import { TextStyle, ViewStyle, StyleProp } from 'react-native';
import styles from './styles';
import React from 'react';
import { CustomTouchable } from '../CustomTouchable';
import CustomText from '../CustomText';

interface Props {
  style?: StyleProp<ViewStyle>;
  text: string;
  textStyle?: TextStyle;
  disabled?: boolean;
  onPress?: () => void;
  activeOpacity?: number;
}

const CustomButton = (props: Props) => {
  const { onPress, style, text, disabled = false, textStyle, activeOpacity } = props;

  return (
    <CustomTouchable
      style={[styles.container, { opacity: disabled ? 0.5 : 1 }, style]}
      activeOpacity={activeOpacity}
      disabled={disabled}
      onPress={onPress}
    >
      <CustomText style={[styles.text, textStyle]} text={text} />
    </CustomTouchable>
  );
};

export default CustomButton;
