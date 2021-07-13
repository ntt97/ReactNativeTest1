import { ICON_CART, ICON_HOME } from '@assets/index';
import { isIOS } from '@constants/platform';
import { CART_SCREEN, DRAW_SCREEN, HOME_SCREEN, ROOT } from '@constants/screenKeys';
import { colors, WIDTH_RATIO } from '@constants/vars';
import translate from '@localize/index';
import { ImageRequireSource } from 'react-native';
import { Layout, Navigation } from 'react-native-navigation';

const testIDs = {
  TABBAR: {
    HOME: 'TABBAR.HOME',
    CART: 'TABBAR.CART',
  },
};
const initTab = (
  id: string,
  label: string,
  icon: ImageRequireSource,
  tabbarVisible = true,
  testID: string,
): Layout => ({
  stack: {
    id: `TAB-${id}`,
    children: [
      {
        component: {
          id,
          name: id,
          options: {
            topBar: {
              visible: false,
            },
            bottomTabs: {
              visible: tabbarVisible,
              drawBehind: false,
              animate: true,
              backgroundColor: colors.WHITE,
            },
          },
        },
      },
    ],
    options: {
      bottomTab: {
        text: label,
        icon,
        iconColor: colors.GRAY700,
        textColor: colors.GRAY700,
        selectedIconColor: colors.PRIMARY,
        selectedTextColor: colors.PRIMARY,
        testID,
        iconInsets: { top: 5, bottom: -5 },
      },
      topBar: {
        testID: 'navigation-header',
      },
      layout: {
        backgroundColor: colors.WHITE,
      },
    },
  },
});

const MainNav = () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: DRAW_SCREEN,
          },
        },
        options: {
          sideMenu: {
            left: isIOS ? {} : { width: 270 * WIDTH_RATIO },
          },
          layout: {
            orientation: ['portrait'],
          },
        },
        center: {
          bottomTabs: {
            id: ROOT,
            children: [
              initTab(HOME_SCREEN, translate('navigation.home'), ICON_HOME, true, testIDs.TABBAR.HOME),
              initTab(CART_SCREEN, translate('navigation.cart'), ICON_CART, true, testIDs.TABBAR.CART),
            ],
            options: {
              bottomTabs: {
                drawBehind: false,
                currentTabIndex: 0,
                titleDisplayMode: 'alwaysShow',
              },
              sideMenu: {
                left: {
                  enabled: false,
                },
              },
            },
          },
        },
      },
    },
  });
};
export default MainNav;
