import { StyleSheet } from 'react-native';
import { BORDER_RADIUS, colors, WIDTH_RATIO } from '@constants/vars';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    borderRadius: BORDER_RADIUS,
    maxWidth: 300 * WIDTH_RATIO,
    maxHeight: 250 * WIDTH_RATIO,
    overflow: 'hidden',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingBottom: 33 * WIDTH_RATIO,
  },
  textTitle: {
    fontSize: 14,
    margin: 30,
    textAlign: 'center',
    color: colors.BLACK,
  },
  leftButton: {
    flex: 1,
    backgroundColor: colors.GREEN,
  },
  rightButton: {
    flex: 1,
    backgroundColor: colors.BLUE,
  },
  containerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
});
