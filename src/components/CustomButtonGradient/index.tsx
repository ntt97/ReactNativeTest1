import React from 'react';
import {
  Text,
  TouchableOpacityProps,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Image,
  View,
  ActivityIndicator,
  ImageRequireSource,
  ImageStyle,
} from 'react-native';
import { ButtonStyles, styleConfig, SocialButtonStyles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { CustomTouchable } from '../CustomTouchable';

interface Props extends TouchableOpacityProps, GradientProps {
  text?: string;
  icon?: ImageRequireSource;
  isLoading?: boolean;
  disabled?: boolean;
  textStyle?: TextStyle;
  iconStyle?: ImageStyle;
  gradientButtonStyle?: ViewStyle;
  containerButtonStyle?: ViewStyle;
  opacity?: number;
  justText?: boolean;
  isDoNotTouch?: boolean;
  onPress?: () => void;
  onPressDelay?: boolean;
}

interface GradientProps {
  isGradient?: boolean;
  colors?: (string | number)[];
}

export interface Style {
  container: ViewStyle;
  wrapText?: ViewStyle;
  text: TextStyle;
  gradientContainer?: ViewStyle;
}

const renderButton = (
  justText: any,
  styles: any,
  isLoading: any,
  icon: any,
  text: any,
  iconStyle: any,
  textStyle: any,
  propsText: any,
) => {
  if (justText) {
    return <Text style={[styles.text, textStyle]}>{propsText}</Text>;
  }
  return isLoading ? (
    <ActivityIndicator color="white" />
  ) : (
    <View style={styleConfig.containerRow}>
      {icon ? <Image source={icon} style={[styleConfig.icon, text ? styleConfig.textContent : {}, iconStyle]} /> : null}
      {text ? (
        <Text
          numberOfLines={1}
          style={[styles.text, styleConfig.textInsideButton, icon ? { paddingRight: 40 } : {}, textStyle]}
        >
          {propsText}
        </Text>
      ) : null}
    </View>
  );
};

const createButton = (stylesConfig: Style) => {
  const styles = StyleSheet.create(stylesConfig);
  // eslint-disable-next-line react/display-name
  return (props: Props) => {
    const {
      colors = ['#9E55DD', '#5061DC'],
      style,
      text = '',
      icon,
      isLoading = false,
      disabled = false,
      textStyle,
      iconStyle,
      gradientButtonStyle,
      isGradient = false,
      opacity,
      justText,
      containerButtonStyle,
      isDoNotTouch = false,
      onPress,
      onPressDelay,
      ...ortherProps
    } = props;
    const styleContainer = justText ? styles.wrapText : styles.container;

    if (isDoNotTouch) {
      return (
        <View style={[styleContainer, style, { opacity: disabled ? 0.5 : 1 }]} {...ortherProps}>
          {renderButton(justText, styles, isLoading, icon, text, iconStyle, textStyle, props.text)}
        </View>
      );
    }

    return isGradient ? (
      <View style={[styleConfig.shadowButton, styleContainer, containerButtonStyle]}>
        <CustomTouchable
          onPressDelay={onPressDelay}
          onPress={onPress}
          style={[styleConfig.gradientButton, gradientButtonStyle]}
          disabled={disabled}
        >
          <LinearGradient
            style={[styles.gradientContainer, style, { opacity: disabled ? (opacity ? opacity : 0.5) : 1 }]}
            {...ortherProps}
            colors={colors}
          >
            {isLoading ? (
              <ActivityIndicator color="white" />
            ) : (
              <View style={styleConfig.containerRow}>
                {icon ? (
                  <Image source={icon} style={[styleConfig.icon, text ? styleConfig.textContent : {}, iconStyle]} />
                ) : null}
                {text ? (
                  <Text
                    numberOfLines={1}
                    style={[styles.text, styleConfig.textInsideButton, icon ? { paddingRight: 40 } : {}, textStyle]}
                  >
                    {props.text}
                  </Text>
                ) : null}
              </View>
            )}
          </LinearGradient>
        </CustomTouchable>
      </View>
    ) : (
      <CustomTouchable
        onPressDelay={onPressDelay}
        onPress={onPress}
        style={[styleContainer, style, { opacity: disabled ? 0.5 : 1 }]}
        disabled={disabled}
      >
        {renderButton(justText, styles, isLoading, icon, text, iconStyle, textStyle, props.text)}
      </CustomTouchable>
    );
  };
};

export const Button = createButton(ButtonStyles);
export const SocialButton = createButton(SocialButtonStyles);
