import { colors, WIDTH } from '@constants/vars';
import { Platform, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { WIDTH_RATIO } from './../../constants/vars';
export const nHeight = getStatusBarHeight() + 60 * WIDTH_RATIO;

export default StyleSheet.create({
  headerText: {
    textAlign: 'center',
    fontSize: 20 * WIDTH_RATIO,
    color: colors.WHITE,
    fontWeight: 'bold',
  },
  secondaryHeaderText: {
    alignSelf: 'center',
  },
  styleTitle: {
    flex: 4,
    alignItems: 'center',
    height: 30 * WIDTH_RATIO,
  },
  secondaryHeaderImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30 * WIDTH_RATIO,
  },
  cancelText: {
    color: colors.RED,
  },
  doneText: {
    color: colors.RED,
  },
  iconRight: {
    width: 25,
    height: 25,
    margin: 10,
    tintColor: colors.WHITE,
  },
  statusDisconnected: {
    height: nHeight,
    backgroundColor: colors.RED,
    justifyContent: 'center',
    alignItems: 'center',
    width: WIDTH,
  },
  txtStatusDisconnected: {
    fontSize: 18,
    color: colors.BLUE,
  },
  containerRowHeader: {
    backgroundColor: colors.LIGHT_BLUE,
    height:nHeight
  },

  bodyHeader: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    ...Platform.select({
      android: {
        alignItems: 'center',
      },
      ios: {
        alignItems: 'center',
        marginTop: getStatusBarHeight()
      },
    }),
  },

  containerLeftControl: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
});
