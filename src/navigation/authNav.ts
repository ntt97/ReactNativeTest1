import { LOGIN_SCREEN } from '@constants/screenKeys';
import { Navigation } from 'react-native-navigation';

const AuthNav = () => {
  Navigation.setRoot({
    root: {
      stack: {
        options: { topBar: { visible: false, height: 0 } },
        children: [
          {
            component: {
              name: LOGIN_SCREEN,
            },
          },
        ],
      },
    },
  });
};
export default AuthNav;
