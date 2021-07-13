import React from 'react';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import { getInitialName } from '@utils/index';
import { View, StyleProp, TextStyle, ViewStyle } from 'react-native';
import CustomText from '../CustomText';
import { includes } from 'lodash';

declare type ResizeMode = 'contain' | 'cover' | 'stretch' | 'center';

interface Props {
  style?: StyleProp<ViewStyle>;
  avatarTextStyle?: StyleProp<TextStyle>;
  uri?: string;
  name?: string;
  resizeMode?: ResizeMode;
}

const CustomAvatar = (props: Props) => {
  const { uri, name, style, avatarTextStyle, resizeMode } = props;

  const getName = () => {
    return name ? getInitialName(name) : '';
  };

  function getUriImage() {
    return uri && includes(uri, '/') && includes(uri, '.') ? uri : 'https://dummyimage.com/600x400/ebebeb/fff';
  }

  const renderAvatar = () => {
    if (uri) {
      return <FastImage style={styles.avatar} resizeMode={resizeMode} source={{ uri: getUriImage() }} />;
    } else {
      return <CustomText style={[styles.avatarText, avatarTextStyle]} text={getName()} />;
    }
  };

  return <View style={[styles.container, style]}>{renderAvatar()}</View>;
};

export { CustomAvatar };
