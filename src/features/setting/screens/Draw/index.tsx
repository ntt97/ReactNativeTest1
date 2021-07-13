/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { selectMenuIndex } from '@actions/navigation.action';
import { CustomAvatar } from '@components/CustomAvatar';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import { CustomTouchable } from '@components/CustomTouchable';
import ViewDarkMode from '@components/ViewDarkMode';
import listMenu from '@constants/listMenu';
import { COMPONENT_SCREEN, SETTING_SCREEN } from '@constants/screenKeys';
import { colors, WIDTH_RATIO } from '@constants/vars';
import translate from '@localize/index';
import { RootState } from '@reducers/index';
import { setIsLogin } from 'helpers';
import withLanguageChange from 'hoc/HocLanguage';
import NavigationActionsService from 'navigation';
import AuthNav from 'navigation/authNav';
import MainNav from 'navigation/mainNav';
import MainNavDarkMode from 'navigation/mainNavDarkMode';
import React from 'react';
import { ImageBackground, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
const uriBackground =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZpWjlBsuXkfYI62nlt7YG70JAprX9xtnLIQ&usqp=CAU';
const uriAvatar = 'https://tiengtrung.com/wp-content/uploads/2021/02/cuc_tinh_y7.jpg';

const SideMenu = (props: any) => {
  const dispatch = useDispatch();
  const menuIndex = useSelector<RootState>((state: RootState) => state.navigation.selectedMenuIndex) as number;
  const isDarkMode = useSelector<RootState>((state: RootState) => state.darkMode.isDarkMode) as boolean;
  const onLogout = () => {
    NavigationActionsService.showLoading();
    setTimeout(() => {
      setIsLogin(false);
      AuthNav();
      NavigationActionsService.hideLoading();
    });
  };

  const onSelectMenu = (index: number) => {
    dispatch(selectMenuIndex({ selectedMenuIndex: index }));
    NavigationActionsService.toggleDrawer(false);
    setTimeout(() => {
      switch (index) {
        case 0:
          isDarkMode ? MainNavDarkMode() : MainNav();
          break;
        case 1:
          NavigationActionsService.setRootNavigation(COMPONENT_SCREEN);
          break;
        case 2:
          NavigationActionsService.setRootNavigation(SETTING_SCREEN);
          break;
        default:
          break;
      }
    }, 300);
  };
  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: uriBackground,
      }}
    >
      <ViewDarkMode style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <View style={styles.profileContainer}>
            <CustomAvatar style={styles.avatarStyle} uri={uriAvatar} />
            <CustomText style={styles.txtLabel} text="Vip" />
            <CustomText style={styles.txtName} text="Nguyen Thanh To" />
            <CustomText text="---------:-:---------" />
          </View>
          <View style={styles.menuContainer}>
            {listMenu.map(({ icon, name }, index) => {
              return (
                <CustomTouchable key={index} disabled={menuIndex == index} onPress={() => onSelectMenu(index)}>
                  <View style={[styles.block, menuIndex == index ? styles.selected : {}]}>
                    <Icon style={styles.icon} name={icon} size={25 * WIDTH_RATIO} color={colors.BLUE} />
                    <CustomText text={translate(name)} style={styles.menuTitle} />
                  </View>
                </CustomTouchable>
              );
            })}
          </View>
          <View style={styles.footerContainer}>
            <CustomButton onPress={onLogout} text={translate('authentication.logout_button')}></CustomButton>
          </View>
        </SafeAreaView>
      </ViewDarkMode>
    </ImageBackground>
  );
};

export default withLanguageChange(SideMenu);
