import React from 'react';
import { TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { throttle } from 'lodash';

interface Props {
  onPress?: () => void;
  children?: any;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  activeOpacity?: number;
  onLongPress?: () => void;
  onPressDelay?: boolean;
}

const CustomTouchable = (props: Props) => {
  const { children, onPress, onPressDelay = true, style, activeOpacity, disabled = false, onLongPress } = props;
  const onCustomPress = () => {

  }
  const onCustomPressThrottle = onPress ?
    (onPressDelay ? throttle(onPress, 2000, { leading: true, trailing: false }) : onPress)
    : undefined;
  return (
    <TouchableOpacity activeOpacity={activeOpacity} onPress={onCustomPressThrottle} style={style} disabled={disabled} onLongPress={onLongPress}>
      {children}
    </TouchableOpacity>
  );
};

export { CustomTouchable };
