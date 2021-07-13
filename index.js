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
  COMPONENT_SCREEN,
  IMAGE_PICKER_SCREEN,
  OVERLAY_SCREEN,
  PICKER_SELECT_SCREEN,
  SEARCH_BAR_SCREEN,
  TOAST_SCREEN,
  ALERT_POPUP,
} from './src/constants/screenKeys';
import AppScreen from './src/App';
import LoginScreen from './src/features/auth/screens/Login';
import CartScreen from './src/features/main/screens/Cart';
import HomeScreen from './src/features/main/screens/Home';
import DrawScreen from './src/features/setting/screens/Draw';
import SettingScreen from './src/features/setting/screens/Setting';
import ComponentScreen from './src/features/commonComponent/screens/MainScreen';
import ImagePickerScreen from './src/features/commonComponent/screens/ImagePicker';
import OverlayScreen from './src/features/commonComponent/screens/Overlay';
import PickerSelectScreen from './src/features/commonComponent/screens/PickerSelect';
import SearchBarScreen from './src/features/commonComponent/screens/SearchBar';
import ToastScreen from './src/features/commonComponent/screens/Toast';
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
  COMPONENT_SCREEN,
  () => reduxProvider(ComponentScreen),
  () => ComponentScreen,
);

Navigation.registerComponent(
  IMAGE_PICKER_SCREEN,
  () => reduxProvider(ImagePickerScreen),
  () => ImagePickerScreen,
);

Navigation.registerComponent(
  OVERLAY_SCREEN,
  () => reduxProvider(OverlayScreen),
  () => OverlayScreen,
);

Navigation.registerComponent(
  PICKER_SELECT_SCREEN,
  () => reduxProvider(PickerSelectScreen),
  () => PickerSelectScreen,
);

Navigation.registerComponent(
  SEARCH_BAR_SCREEN,
  () => reduxProvider(SearchBarScreen),
  () => SearchBarScreen,
);

Navigation.registerComponent(
  TOAST_SCREEN,
  () => reduxProvider(ToastScreen),
  () => ToastScreen,
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
