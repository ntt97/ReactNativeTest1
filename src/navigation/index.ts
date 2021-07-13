import { PropsAlert } from '@components/CustomPopupCommon';
import { SHOW_LOADING_WITH_SAGA } from '@constants/index';
import { isIOS } from '@constants/platform';
import { ALERT_POPUP, DRAW_SCREEN, LOADING_SCREEN } from '@constants/screenKeys';
import { Keyboard } from 'react-native';
import { Navigation } from 'react-native-navigation';

const TEMP_COMPONENT_ID: Record<string, string> = {};
class NavigationActionsService {
  private static stackNavigation: any[] = [];
  private static navigation: any;
  private static instance: NavigationActionsService;

  static initInstance(navigation: any): NavigationActionsService {
    Navigation.setDefaultOptions({
      layout: {
        orientation: ['portrait'],
      },
    });
    if (!NavigationActionsService.instance) {
      NavigationActionsService.instance = new NavigationActionsService();
      Navigation.events().registerComponentDidAppearListener(({ componentId, componentName, passProps }) => {
        if (componentName != DRAW_SCREEN && componentName != LOADING_SCREEN && componentName != ALERT_POPUP) {
          NavigationActionsService.navigation = componentId;
          TEMP_COMPONENT_ID[componentName] = componentId;
        }
      });
    }

    NavigationActionsService.navigation = navigation;
    NavigationActionsService.stackNavigation.push(navigation);
    return NavigationActionsService.instance;
  }

  public static toggleDrawer = (bool: boolean) =>
    Navigation.mergeOptions(NavigationActionsService.navigation, {
      sideMenu: {
        left: {
          visible: bool,
        },
      },
    });
  public static push = (screenName: string, passProps = {}) => {
    Navigation.push(NavigationActionsService.navigation, {
      component: {
        name: screenName,
        passProps,
        options: {
          topBar: {
            visible: false,
          },
          animations: {
            push: {
              enabled: true,
              waitForRender: true,
              content: isIOS
                ? {}
                : {
                    x: {
                      from: -1000,
                      to: 0,
                      duration: 250,
                    },
                  },
            },
            pop: isIOS
              ? {}
              : {
                  enabled: true,
                  content: {
                    x: {
                      from: 0,
                      to: -1000,
                      duration: 100,
                    },
                  },
                },
          },
          sideMenu: {
            left: {
              enabled: false,
            },
          },
        },
      },
    });
  };

  public static showLoading = () => {
    // store.dispatch(showLoadingWithSaga());
    Navigation.showOverlay({
      component: {
        id: 'loading',
        name: LOADING_SCREEN,
        options: {
          overlay: {
            interceptTouchOutside: true,
          },
          layout: {
            componentBackgroundColor: 'transparent',
          },
          topBar: {
            visible: false,
          },
        },
      },
    });
  };
  public static hideLoading = () => {
    // store.dispatch(hideLoadingWithSaga());
    Navigation.dismissOverlay('loading');
  };

  public static pop = () => {
    Keyboard.dismiss();
    Navigation.pop(NavigationActionsService.navigation);
  };

  public static showBadge = (screenName: string, badge: any, icon: number) => {
    if (badge) {
      Navigation.mergeOptions(screenName, {
        bottomTab: {
          badge,
          icon,
        },
      });
    } else {
      Navigation.mergeOptions(screenName, {
        bottomTab: {
          icon,
        },
      });
    }
  };

  public static popId = (screenName: string) => {
    Keyboard.dismiss();
    const id = TEMP_COMPONENT_ID[screenName];
    if (id) {
      Navigation.popTo(id);
    }
  };

  public static setRootNavigation = (screenName: string) => {
    Navigation.setRoot({
      root: {
        sideMenu: {
          left: {
            component: {
              name: DRAW_SCREEN,
            },
          },

          options: {
            sideMenu: {},
            layout: {
              orientation: ['portrait'],
            },
          },

          center: {
            stack: {
              options: { topBar: { visible: false, height: 0 } },
              children: [
                {
                  component: {
                    name: screenName,
                  },
                },
              ],
            },
          },
        },
      },
    });
  };

  public static showAlert = (propsAlert: PropsAlert) => {
    const { text, buttonBlackTitle, onPressBlackButton, onPressGrayButton, buttonGrayTitle } = propsAlert;
    Navigation.showOverlay({
      component: {
        id: 'alert',
        name: ALERT_POPUP,
        options: {
          overlay: {
            interceptTouchOutside: true,
          },
          layout: {
            componentBackgroundColor: 'transparent',
          },
          topBar: {
            visible: false,
          },
        },
        passProps: {
          text,
          buttonBlackTitle,
          onPressBlackButton,
          onPressGrayButton,
          buttonGrayTitle,
        },
      },
    });
  };

  public static hideAlert = () => {
    Navigation.dismissOverlay('alert');
  };

  public static destroyScreen = () => {
    NavigationActionsService.stackNavigation.pop();
    const maximumStackLength = NavigationActionsService.stackNavigation.length;
    NavigationActionsService.navigation = NavigationActionsService.stackNavigation[maximumStackLength - 1];
  };
}

export default NavigationActionsService;
