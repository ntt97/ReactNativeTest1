/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { initCart } from '@actions/cart.action';
import { changeDarkMode } from '@actions/darkMode.action';
import { handleChangeLanguage } from '@actions/language.action';
import LoadingScreen from '@components/Loading';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import { getCart, getDefaultLanguage, getIsDarkModeTheme, isLogin } from 'helpers';
import I18n from 'i18n-js';
import { changeConnectionStatus } from 'modules/network/actions';
import AuthNav from 'navigation/authNav';
import MainNav from 'navigation/mainNav';
import MainNavDarkMode from 'navigation/mainNavDarkMode';
import React, { useEffect } from 'react';
import CodePush from 'react-native-code-push';
import SplashScreen from 'react-native-splash-screen';
import { useDispatch } from 'react-redux';

const App = (props: unknown) => {
  const dispatch = useDispatch();
  useEffect(() => {
    init();
    SplashScreen.hide();

    return () => {
      // unsubscribe();
    };
  }, []);

  const init = async () => {
    const stateNetwork: any = NetInfo.fetch();
    dispatch(changeConnectionStatus({ isConnected: stateNetwork.isConnected }));
    const keyLanguage = (await getDefaultLanguage()) || 'en';
    I18n.defaultLocale = keyLanguage;
    I18n.locale = keyLanguage;
    dispatch(handleChangeLanguage(keyLanguage));
    const cart = await getCart();
    cart && dispatch(initCart(cart));
    NetInfo.addEventListener(state => {
      handleConnectionChange(state);
    });
    const isDarkMode = await getIsDarkModeTheme();
    if (isDarkMode) {
      dispatch(changeDarkMode(true));
    }
    renderScreen();
  };

  const renderScreen = async () => {
    const isLog = await isLogin();
    const isDarkMode = await getIsDarkModeTheme();
    if (isLog) {
      isDarkMode ? MainNavDarkMode() : MainNav();
    } else {
      AuthNav();
    }
  };

  const handleConnectionChange = (state: NetInfoState) => {
    if (state.isConnected == null) return;
    dispatch(changeConnectionStatus({ isConnected: state.isConnected }));
  };

  return <LoadingScreen></LoadingScreen>;
};

let codePushOptions = { checkFrequency: CodePush.CheckFrequency.MANUAL };
export default CodePush(codePushOptions)(App);
