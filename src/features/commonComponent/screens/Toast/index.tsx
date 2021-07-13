import CustomButton from '@components/CustomButton';
import CustomInput from '@components/CustomInput';
import Header from '@components/Header';
import ToastComponent from '@components/Toast';
import ViewDarkMode from '@components/ViewDarkMode';
import NavigationActionsService from 'navigation';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import styles from './styles';

const ToastScreen = ({ title = '' }) => {
  const [value, setValue] = useState<string>('test');
  useEffect(() => {}, []);

  const onShow = () => {
    ToastComponent('SUCCESS', value);
  };
  return (
    <ViewDarkMode style={styles.body}>
      <Header
        iconVector="arrow-left"
        noShadow={true}
        mainText={title}
        leftAction={() => {
          NavigationActionsService.pop();
        }}
      />
      <View style={styles.container}>
        <CustomInput
          inputStyle={{ borderWidth: 1, borderColor: 'white', paddingHorizontal: 10 }}
          value={value}
          onChangeText={text => {
            setValue(text);
          }}
          customInputStyle={{ borderWidth: 1 }}
        />
        <CustomButton onPress={onShow} text={'Show'} />
      </View>
    </ViewDarkMode>
  );
};

export default ToastScreen;
