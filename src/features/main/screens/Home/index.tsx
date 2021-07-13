/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { addToCart } from '@actions/cart.action';
import { getProductWithSaga, setRefreshProductList } from '@actions/product.action';
import { ICON_CART } from '@assets/index';
import Header from '@components/Header';
import ToastComponent from '@components/Toast';
import ViewDarkMode from '@components/ViewDarkMode';
import { CART_SCREEN } from '@constants/screenKeys';
import translate from '@localize/index';
import { RootState } from '@reducers/index';
import { ProductState } from '@reducers/product.reducer';
import { PropsItemProduct } from '@types';
import withLanguageChange from 'hoc/HocLanguage';
import NavigationActionsService from 'navigation';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ItemLoading, { FooterLoading } from '../../components/ItemLoading';
import ItemProduct from '../../components/ItemProduct';
import styles from './styles';
import Orientation from 'react-native-orientation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HEIGHT } from '@constants/vars';
export interface Props {
  componentId?: string;
}

const HOME = (props: Props) => {
  const dispatch = useDispatch();
  const listData = useSelector<RootState>((state: RootState) => state.product) as ProductState;
  const listCart = useSelector<RootState>((state: RootState) => state.cart.listCart) as Array<any>;
  const [orientation, setOrientation] = useState<string>('PORTRAIT');
  const { listProduct, isLoading, pagination, isEndData, refreshing } = listData;

  useEffect(() => {
    const count = listCart.length.toString();

    if (listCart.length > 0) {
      NavigationActionsService.showBadge(CART_SCREEN, count, ICON_CART);
    } else {
      NavigationActionsService.showBadge(CART_SCREEN, null, ICON_CART);
    }
  }, [listCart]);

  useEffect(() => {
    NavigationActionsService.initInstance(props.componentId);
    dispatch(
      getProductWithSaga({
        pagination: { page: 1, limit: 10 },
        refresh: true,
      }),
    );
    const initial = Orientation.getInitialOrientation();
    _orientationDidChange(initial);
    Orientation.addOrientationListener(_orientationDidChange);
  }, []);

  const _orientationDidChange = (orientation: any) => {
    if (orientation === 'LANDSCAPE') {
      // do something with landscape layout

      setOrientation('LANDSCAPE');
    } else {
      // do something with portrait layout
      setOrientation('PORTRAIT');
    }
  };

  const onAddToCart = (item: any, quantity: number) => {
    const isExist = listCart.some((e: any) => e?.item.id === item.id);
    if (isExist) {
      ToastComponent('ERROR', translate('cart.exist_cart'));
      return;
    }
    dispatch(addToCart({ item, quantity }));
  };

  function renderFooter() {
    if (listProduct.length < 10 || !isLoading) {
      return null;
    }
    return (
      <View style={styles.footer}>
        <FooterLoading />
      </View>
    );
  }

  function handleRefresh() {
    if (listProduct.length === 0) {
      return false;
    }

    dispatch(setRefreshProductList(true));
    dispatch(
      getProductWithSaga({
        pagination: { page: 1, limit: 10 },
        refresh: true,
      }),
    );
  }

  function handleLoadMore() {
    if (!isEndData && !isLoading) {
      dispatch(
        getProductWithSaga({
          pagination: { ...pagination, page: pagination.page + 1 },
          refresh: false,
        }),
      );
    }
  }

  if (isLoading && listProduct.length <= 0) {
    return (
      <ViewDarkMode style={{ flex: 1 }}>
        <Header
          isPortrait={orientation == 'PORTRAIT'}
          iconVector="bars"
          noShadow={false}
          mainText={translate('navigation.home')}
          leftAction={() => {
            NavigationActionsService.toggleDrawer(true);
          }}
        />
        <ItemLoading />
      </ViewDarkMode>
    );
  }
  const renderFlatPortrait = () => (
    <FlatList
      data={listProduct}
      renderItem={(item: PropsItemProduct) => {
        return <ItemProduct isPortrait={orientation == 'PORTRAIT'} {...item} addToCart={onAddToCart} />;
      }}
      keyExtractor={item => item.id}
      ListFooterComponent={renderFooter}
      onRefresh={handleRefresh}
      refreshing={refreshing}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      initialNumToRender={10}
      numColumns={3}
    />
  );

  const renderFlatLandscape = () => (
    <FlatList
      data={listProduct}
      renderItem={(item: PropsItemProduct) => {
        return <ItemProduct isPortrait={orientation == 'PORTRAIT'} {...item} addToCart={onAddToCart} />;
      }}
      keyExtractor={item => item.id}
      ListFooterComponent={renderFooter}
      onRefresh={handleRefresh}
      refreshing={refreshing}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      initialNumToRender={10}
      numColumns={6}
    />
  );

  return (
    <ViewDarkMode style={styles.wrapper}>
      <Header
        isPortrait={orientation == 'PORTRAIT'}
        iconVector="bars"
        noShadow={false}
        mainText={translate('navigation.home')}
        leftAction={() => {
          NavigationActionsService.toggleDrawer(true);
        }}
      />
      <View style={styles.container}>
        {orientation == 'PORTRAIT' && <View style={styles.body}>{renderFlatPortrait()}</View>}
        {orientation != 'PORTRAIT' && <SafeAreaView style={styles.body}>{renderFlatLandscape()}</SafeAreaView>}
      </View>
    </ViewDarkMode>
  );
};

export default withLanguageChange(HOME);
