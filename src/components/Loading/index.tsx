import { View, ActivityIndicator } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { colors } from '@constants/vars';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.BLUE} />
    </View>
  );
};

export default LoadingScreen;
