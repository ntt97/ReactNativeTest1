import { View, StyleProp, TextStyle } from 'react-native';
import styles from './styles';
import { Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@reducers/index';

interface Props {
  text?: any;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  stylesContainer?: StyleProp<TextStyle>;
  ellipsizeMode?: string;
  children?: any;
}

const CustomText = (props: Props) => {
  const isDarkMode = useSelector<RootState>((state: RootState) => state.darkMode.isDarkMode) as boolean;
  const { children, text, style, numberOfLines = 0, stylesContainer } = props;

  return (
    <View style={[styles.container, stylesContainer]}>
      <Text
        style={[styles.title, style, isDarkMode ? styles.titleDark : {}]}
        allowFontScaling={false}
        numberOfLines={numberOfLines}
      >
        {children ?? text}
      </Text>
    </View>
  );
};

export default CustomText;
