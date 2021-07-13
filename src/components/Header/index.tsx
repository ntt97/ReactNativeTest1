import translate from '@localize/index';
import { RootState } from '@reducers/index';
import React from 'react';
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { useSelector } from 'react-redux';
import styles, { nHeight } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, WIDTH_RATIO } from '@constants/vars';
import CustomText from '@components/CustomText';
import ViewDarkMode from '@components/ViewDarkMode';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
export interface ActionRightProp {
  component: any;
  icon: ImageSourcePropType;
  text: string;
  action: (event: GestureResponderEvent) => void;
  styleTouchable: StyleProp<ViewStyle>;
}
export interface Props {
  mainText?: string;
  leftText?: string;
  leftAction?: () => void;
  leftComponent?: any;
  noShadow?: boolean;
  imageLeft?: ImageSourcePropType;
  actionRight?: [ActionRightProp];
  styleMainText?: StyleProp<ViewStyle>;
  styleContainer?: StyleProp<ViewStyle>;
  stylesHeader?: StyleProp<ViewStyle>;
  stylesHeaderImage?: StyleProp<ViewStyle>;
  stylesHeaderText?: StyleProp<TextStyle>;
  stylesTextRight?: StyleProp<TextStyle>;
  stylesTextLeft?: StyleProp<TextStyle>;
  stylesImageLeft?: StyleProp<ImageStyle>;
  children?: any;
  iconVector?: string;
}

const hitSlop = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20,
};
const Header = ({
  mainText = '',
  leftText,
  leftAction,
  leftComponent,
  noShadow = false,
  imageLeft,
  actionRight,
  styleMainText = {},
  styleContainer = {},
  stylesHeader = {},
  stylesHeaderImage = {},
  stylesHeaderText = {},
  stylesTextRight = {},
  stylesTextLeft = {},
  stylesImageLeft = {},
  children,
  iconVector,
}: Props) => {
  const isConnected = useSelector<RootState>((state: RootState) => state.networkStatus.isConnected) as boolean;

  const renderLeftHeader = () => (
    <TouchableOpacity style={[styles.secondaryHeaderImage, stylesHeaderImage]} onPress={leftAction}>
      {iconVector && <Icon name={iconVector} size={23 * WIDTH_RATIO} color={colors.WHITE} />}
      {imageLeft ? (
        <Image resizeMode="cover" style={[styles.iconRight, stylesImageLeft]} source={imageLeft} />
      ) : leftComponent ? (
        leftComponent
      ) : null}
      {leftText ? (
        <CustomText text={leftText} style={[styles.secondaryHeaderText, styles.cancelText, stylesTextLeft]} />
      ) : null}
    </TouchableOpacity>
  );

  const renderCenterHeader = () => (
    <View pointerEvents={'box-none'} style={[styles.styleTitle, styleMainText]}>
      {mainText ? (
        <CustomText
          text={mainText || ''}
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[styles.headerText, stylesHeaderText]}
        />
      ) : null}
      {children && <View style={{ flex: 1, paddingTop: 15 }}>{children}</View>}
    </View>
  );

  const renderRightHeader = () => (
    <View pointerEvents={'box-none'} style={styles.containerLeftControl}>
      {actionRight?.map((value: ActionRightProp, index: number) => {
        return (
          <TouchableOpacity
            key={index}
            hitSlop={hitSlop}
            style={[styles.secondaryHeaderImage, index > 0 ? { marginLeft: 20 } : {}, value.styleTouchable || {}]}
            onPress={value.action}
          >
            {value.component && value.component}
            {value.icon && <Image style={styles.iconRight} resizeMode="cover" source={value.icon} />}
            {value.text && <CustomText text={value.text || ''} style={[styles.secondaryHeaderText, stylesTextRight]} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );

  return (
    <>
      <View style={isConnected ? { ...styles.statusDisconnected, height: 0 } : styles.statusDisconnected}>
        <CustomText style={[styles.txtStatusDisconnected]} text={translate('network.status')} />
      </View>
      <ViewDarkMode style={[styles.containerRowHeader, !isConnected && { height: nHeight - getStatusBarHeight() }]}>
        <View style={styles.bodyHeader}>
          {renderLeftHeader()}
          {renderCenterHeader()}
          {renderRightHeader()}
        </View>
      </ViewDarkMode>
    </>
  );
};

export default Header;
