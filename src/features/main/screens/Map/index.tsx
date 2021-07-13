/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { deleteAllCart, deleteItem } from '@actions/cart.action';
import { ICON_CART } from '@assets/index';
import Header from '@components/Header';
import ToastComponent from '@components/Toast';
import ViewDarkMode from '@components/ViewDarkMode';
import { CART_SCREEN } from '@constants/screenKeys';
import translate from '@localize/index';
import { RootState } from '@reducers/index';
import { PropsItemProduct } from '@types';
import NavigationActionsService from 'navigation';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
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
        <View style={styles.body}></View>
      </View>
    </ViewDarkMode>
  );
};

export default Cart;
