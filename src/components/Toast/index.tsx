// eslint-disable-next-line no-unused-vars
import Toast from 'react-native-tiny-toast';
import { ICON_SUCCESS, ICON_ERROR } from '@assets/index';
import translate from '@localize/index';
import styles from './styles';

const ToastComponent = (type: 'ERROR' | 'SUCCESS', message?: string) => {
  let msg = translate('msg_updateSuccess');
  if (type == 'ERROR') {
    msg = translate('msg_error');
  }
  return Toast.show(message ? message : msg, {
    position: Toast.position.BOTTOM,
    containerStyle: styles.containerStyle,
    textStyle: styles.textStyle,
    imgSource: type == 'SUCCESS' ? ICON_SUCCESS : ICON_ERROR,
    imgStyle: {},
    mask: true,
    maskStyle: {},
  });
};

export default ToastComponent;
