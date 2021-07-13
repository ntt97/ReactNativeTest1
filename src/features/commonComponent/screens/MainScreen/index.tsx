import CustomButton from '@components/CustomButton';
import { Button } from '@components/CustomButtonGradient';
import Header from '@components/Header';
import ViewDarkMode from '@components/ViewDarkMode';
import {
  IMAGE_PICKER_SCREEN,
  OVERLAY_SCREEN,
  PICKER_SELECT_SCREEN,
  SEARCH_BAR_SCREEN,
  TOAST_SCREEN,
} from '@constants/screenKeys';
import translate from '@localize/index';
import NavigationActionsService from 'navigation';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import styles from './styles';

export type ListCot = {
  title: string;
  screen: string;
};

const listComponent: Array<ListCot> = [
  {
    title: 'ImagePicker',
    screen: IMAGE_PICKER_SCREEN,
  },
  {
    title: 'OverLay',
    screen: OVERLAY_SCREEN,
  },
  {
    title: 'PickerSelect',
    screen: PICKER_SELECT_SCREEN,
  },
  {
    title: 'SearchBar',
    screen: SEARCH_BAR_SCREEN,
  },
  {
    title: 'Toast',
    screen: TOAST_SCREEN,
  },
  {
    title: 'Alert',
    screen: 'ALERT',
  },
];

const MainScreen = () => {
  useEffect(() => {}, []);
  return (
    <ViewDarkMode style={styles.body}>
      <Header
        iconVector="bars"
        noShadow={true}
        mainText={translate('menu.component')}
        leftAction={() => {
          NavigationActionsService.toggleDrawer(true);
        }}
      />
      <View style={styles.container}>
        {listComponent.map(({ title, screen }, index) => {
          return (
            <Button
              key={screen}
              onPress={() => {
                if (screen === 'ALERT') {
                  NavigationActionsService.showAlert({
                    text: translate('alert.photo_access_denied_message'),
                    buttonBlackTitle: translate('alert.ok'),
                    buttonGrayTitle: translate('alert.settings'),
                  });
                  return;
                }
                NavigationActionsService.push(screen, { title });
              }}
              textStyle={{ fontSize: 20 }}
              text={title}
              isGradient
            />
          );
        })}
      </View>
    </ViewDarkMode>
  );
};

export default MainScreen;
