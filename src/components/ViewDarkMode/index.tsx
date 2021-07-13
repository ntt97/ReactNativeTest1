import {
  AccessibilityProps,
  GestureResponderHandlers,
  Insets,
  LayoutChangeEvent,
  StyleProp,
  Touchable,
  View,
  ViewPropsAndroid,
  ViewPropsIOS,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@reducers/index';
import styles from './styles';
export interface ViewProps
  extends ViewPropsAndroid,
    ViewPropsIOS,
    GestureResponderHandlers,
    Touchable,
    AccessibilityProps {
  hitSlop?: Insets;
  onLayout?: (event: LayoutChangeEvent) => void;
  pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto';
  removeClippedSubviews?: boolean;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  nativeID?: string;
  children?: any;
}

const ViewDarkMode = ({ style, children, pointerEvents }: ViewProps) => {
  const isDarkMode = useSelector<RootState>((state: RootState) => state.darkMode.isDarkMode) as boolean;
  return (
    <View pointerEvents={pointerEvents} style={[style, isDarkMode ? styles.darkMode : {}]}>
      {children}
    </View>
  );
};

export default ViewDarkMode;
