import { StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { colors } from './vars';
const paddingButton = 13;
const heightButton = 42;
const marginLeftRightButton = 10;
const heightGroupButton = 55;

const globalStyle = StyleSheet.create({
  containerTransparent: {
    backgroundColor: colors.TRANSPARENT,
  },
  absolute: {
    position: 'absolute',
  },
  containerMain: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  container: {
    paddingBottom: 20,
    flexDirection: 'column',
    backgroundColor: colors.WHITE,
  },

  ratingGroup: {
    backgroundColor: colors.WHITE,
    marginTop: 9,
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.WHITE,
    marginBottom: 10,
  },
  grayButton: {
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.GRAY,
  },
  viewButtonBottom: {
    height: heightButton,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: paddingButton,
    paddingRight: paddingButton,
    minWidth: 165,
  },
  viewButtonIconLeft: {
    height: heightButton,
    paddingLeft: paddingButton,
    paddingRight: paddingButton,
    borderRadius: 4,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: marginLeftRightButton,
    marginRight: marginLeftRightButton / 2,
  },
  viewButtonIconRight: {
    height: heightButton,
    paddingLeft: paddingButton,
    paddingRight: paddingButton,
    borderRadius: 4,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginRight: marginLeftRightButton,
    marginLeft: marginLeftRightButton / 2,
  },
  viewButtonBottomLeft: {
    height: heightButton,
    paddingLeft: paddingButton,
    paddingRight: paddingButton,
    flex: 1,
    marginLeft: 10,
    marginRight: 5,
  },
  viewButtonBottomRight: {
    height: heightButton,
    paddingLeft: paddingButton,
    paddingRight: paddingButton,
    flex: 1,
    marginRight: marginLeftRightButton,
    marginLeft: marginLeftRightButton / 2,
  },
  groupButton: {
    height: heightGroupButton,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
    shadowColor: colors.SHADOW,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 2,
  },
  viewLine: {
    height: 1,
    backgroundColor: colors.BORDER_LINE,
  },
  buttonTextActiveStyle: {
    fontSize: 14,
    color: colors.WHITE,
    fontWeight: 'bold',
  },
  button: {
    paddingVertical: 10,
  },
  flex0: {
    flex: 0,
  },
  flex1: {
    flex: 1,
  },
  flexCenterAll: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRow: {
    flexDirection: 'row',
  },
  w100: {
    width: '100%',
  },
  safeArea: {
    flex: 1,
    ...ifIphoneX(
      {
        marginTop: 0,
      },
      {
        marginTop: 20,
      },
    ),
  },
  me3: {
    marginEnd: 3,
  },
  me10: {
    marginEnd: 10,
  },
  me15: {
    marginEnd: 15,
  },
  mt5: {
    marginTop: 5,
  },
  mt10: {
    marginTop: 10,
  },
  mt15: {
    marginTop: 15,
  },
  mt20: {
    marginTop: 20,
  },
  ml10: {
    marginStart: 10,
  },
  ml5: {
    marginStart: 5,
  },
  mlNegative5: {
    marginStart: -5,
  },
  mv15: {
    marginVertical: 15,
  },
  mv20: {
    marginVertical: 20,
  },
  mb0: {
    marginBottom: 0,
  },
  mb10: {
    marginBottom: 10,
  },
  mb15: {
    marginBottom: 15,
  },
  mr24: {
    marginRight: 24,
  },
  textError: {
    color: colors.RED,
  },
  btnDisabled: {
    opacity: 0.65,
  },
  minHeight100: {
    minHeight: '100%',
  },
  hide: {
    display: 'none',
  },
  pt20: {
    paddingTop: 20,
  },
  pt10: {
    paddingTop: 10,
  },
  p20: {
    padding: 20,
  },
  p10: {
    padding: 10,
  },

  alignItemStart: {
    alignItems: 'flex-start',
  },
  alignItemCenter: {
    alignItems: 'center',
  },
  aspectRatio: {
    aspectRatio: 16 / 9,
  },
  submitText: {
    color: colors.WHITE,
    fontSize: 14,
  },
  flexGrow: {
    flexGrow: 1,
  },
  viewUpdateLandScape: {
    marginHorizontal: 14 * 2 + 1,
  },
  viewContent: {
    flex: 1,
    marginHorizontal: 8,
  },
  pb30: {
    paddingBottom: 30,
  },
  pb15: {
    paddingBottom: 15,
  },
});

export default globalStyle;
