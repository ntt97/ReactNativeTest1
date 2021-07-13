import { reduxProvider } from '@store/configureStore';
import { Navigation } from 'react-native-navigation';
import LoadingScreen from './src/components/Loading';
import {
  APP_SCREEN,
  CART_SCREEN,
  DRAW_SCREEN,
  HOME_SCREEN,
  LOADING_SCREEN,
  LOGIN_SCREEN,
  SETTING_SCREEN,
  ALERT_POPUP,
} from './src/constants/screenKeys';
import AppScreen from './src/App';
import LoginScreen from './src/features/auth/screens/Login';
import CartScreen from './src/features/main/screens/Map';
import HomeScreen from './src/features/main/screens/Home';
import DrawScreen from './src/features/setting/screens/Draw';
import SettingScreen from './src/features/setting/screens/Setting';

import CustomPopupCommon from './src/components/CustomPopupCommon';

Navigation.registerComponent(LOADING_SCREEN, () => LoadingScreen);

Navigation.registerComponent(
  APP_SCREEN,
  () => reduxProvider(AppScreen),
  () => AppScreen,
);

Navigation.registerComponent(
  LOGIN_SCREEN,
  () => reduxProvider(LoginScreen),
  () => LoginScreen,
);

Navigation.registerComponent(
  HOME_SCREEN,
  () => reduxProvider(HomeScreen),
  () => HomeScreen,
);

Navigation.registerComponent(
  CART_SCREEN,
  () => reduxProvider(CartScreen),
  () => CartScreen,
);

Navigation.registerComponent(
  DRAW_SCREEN,
  () => reduxProvider(DrawScreen),
  () => DrawScreen,
);

Navigation.registerComponent(
  SETTING_SCREEN,
  () => reduxProvider(SettingScreen),
  () => SettingScreen,
);

Navigation.registerComponent(
  ALERT_POPUP,
  () => reduxProvider(CustomPopupCommon),
  () => CustomPopupCommon,
);

Navigation.events().registerAppLaunchedListener(() => {
  renderScreen();
});

const renderScreen = async () => {
  Navigation.setRoot({
    root: {
      stack: {
        options: { topBar: { visible: false, height: 0 } },
        children: [
          {
            component: {
              name: APP_SCREEN,
            },
          },
        ],
      },
    },
  });
};
