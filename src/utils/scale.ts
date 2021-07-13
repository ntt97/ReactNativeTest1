import { Platform, Dimensions } from 'react-native';
let deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;

const baseScreenWidth = 414; // base density IP11 ,
const baseScreenHeight = 896; // base density IP11,

const ratio = 1;

deviceHeight = deviceHeight > baseScreenHeight ? baseScreenHeight : deviceHeight;

const scaleWidth = (size: number) => ((deviceWidth / baseScreenWidth) * size) / ratio;
const scaleHeight = (size: number) => ((deviceHeight / baseScreenHeight) * size) / ratio;
const scaleFont = (size: number) => ((deviceWidth / baseScreenWidth) * size) / ratio;
const scalePadding = (size: number) => ((deviceWidth / baseScreenWidth) * size) / ratio;
const scalePaddingVertical = (size: number) => ((deviceHeight / baseScreenHeight) * size) / ratio;
const scalePaddingHorizontal = (size: number) => ((deviceWidth / baseScreenWidth) * size) / ratio;
const scaleMargin = (size: number) => ((deviceWidth / baseScreenWidth) * size) / ratio;
const scaleMarginVertical = (size: number) => ((deviceHeight / baseScreenHeight) * size) / ratio;
const scaleMarginHorizontal = (size: number) => ((deviceWidth / baseScreenWidth) * size) / ratio;

export default {
  platform,
  scaleWidth,
  scaleHeight,
  scaleFont,
  deviceHeight,
  deviceWidth,
  scalePadding,
  scaleMargin,
  scalePaddingVertical,
  scalePaddingHorizontal,
  scaleMarginVertical,
  scaleMarginHorizontal,
};
