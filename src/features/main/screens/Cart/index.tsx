/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { deleteAllCart, deleteItem } from '@actions/cart.action';
import { ICON_CART } from '@assets/index';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import Header from '@components/Header';
import OverlayCustom from '@components/OverlayCustom';
import ToastComponent from '@components/Toast';
import ViewDarkMode from '@components/ViewDarkMode';
import { CART_SCREEN } from '@constants/screenKeys';
import translate from '@localize/index';
import { RootState } from '@reducers/index';
import { PropsItemProduct } from '@types';
import NavigationActionsService from 'navigation';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ItemCart from '../../components/ItemCart';
import styles from './styles';
export interface Props {
  componentId?: string;
}

const Cart = (props: Props) => {
  const dispatch = useDispatch();
  const listCart = useSelector<RootState>((state: RootState) => state.cart.listCart) as Array<any>;
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  useEffect(() => {
    NavigationActionsService.initInstance(props.componentId);
  }, []);

  useEffect(() => {
    const count = listCart.length.toString();

    if (listCart.length > 0) {
      NavigationActionsService.showBadge(CART_SCREEN, count, ICON_CART);
    } else {
      NavigationActionsService.showBadge(CART_SCREEN, null, ICON_CART);
    }
  }, [listCart]);

  const onRemove = (item: PropsItemProduct) => {
    dispatch(deleteItem({ item }));
  };

  const sumTotal = () => {
    const sum = listCart.reduce((sumLast: number, product: any) => {
      return sumLast + product.item.price * product.quantity;
    }, 0);

    return sum;
  };

  const onValidation = async () => {
    NavigationActionsService.showLoading();
    setTimeout(() => {
      NavigationActionsService.hideLoading();
      setIsShowModal(false);
      dispatch(deleteAllCart());
      ToastComponent('SUCCESS', translate('cart.successfully_purchase'));
    }, 500);
  };

  return (
    <ViewDarkMode style={styles.wrapper}>
      <Header
        iconVector="bars"
        noShadow={false}
        mainText={translate('navigation.cart')}
        leftAction={() => NavigationActionsService.toggleDrawer(true)}
      />

      <View style={styles.container}>
        <View style={styles.body}>
          <FlatList
            style={{ flex: 1 }}
            data={listCart}
            renderItem={item => {
              return <ItemCart onRemove={onRemove} {...item.item} />;
            }}
            keyExtractor={item => item.item.id}
            ListEmptyComponent={
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{translate('cart.empty')}</Text>
              </View>
            }
          />
          <View style={{ flex: 0.3 }}>
            <View style={styles.lineStyle}></View>
            <View style={styles.containerTotal}>
              <CustomText style={styles.txtTitle}>{translate('cart.total')}</CustomText>
              <CustomText style={styles.txtPrice}>
                {sumTotal()} <CustomText style={{ fontWeight: '300' }}>euros</CustomText>
              </CustomText>
            </View>
            <View style={styles.btnValidateContainer}>
              <TouchableOpacity disabled={listCart.length <= 0} onPress={() => setIsShowModal(true)}>
                <View style={styles.btnValidate}>
                  <Text style={[{ alignSelf: 'center' }, listCart?.length ? {} : { color: 'gray' }]}>
                    {translate('cart.validate')}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <OverlayCustom
        title={translate('cart.request_validate')}
        modalVisible={isShowModal}
        setModalVisible={setIsShowModal}
        styleContainer={{ width: '90%' }}
        children={
          <View>
            <CustomText style={{ fontSize: 20, color: 'blue' }} text={`${sumTotal()} Euro`} />
            <CustomText text={`----:-:----`} />
          </View>
        }
        footerChildren={() => (
          <View style={{ justifyContent: 'center', flexDirection: 'row', flex: 1 }}>
            <CustomButton
              text={translate('cart.validate')}
              style={{ width: 'auto', paddingHorizontal: 25, margin: 5 }}
              onPress={onValidation}
            />
            <CustomButton
              text={translate('cart.later')}
              style={{ width: 'auto', paddingHorizontal: 25, margin: 5 }}
              onPress={() => {
                setIsShowModal(false);
              }}
            />
          </View>
        )}
      />
    </ViewDarkMode>
  );
};

export default Cart;
