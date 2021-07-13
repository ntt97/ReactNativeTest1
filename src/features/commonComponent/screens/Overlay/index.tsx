import CustomButton from '@components/CustomButton';
import Header from '@components/Header';
import OverlayCustom from '@components/OverlayCustom';
import ViewDarkMode from '@components/ViewDarkMode';
import NavigationActionsService from 'navigation';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import styles from './styles';

const OverlayScreen = ({ title = '' }) => {
  const [isShow, setIShow] = useState<boolean>(false);
  useEffect(() => {}, []);
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
        <CustomButton onPress={() => setIShow(true)} text={'Show overlay'} />
        <OverlayCustom
          modalVisible={isShow}
          setModalVisible={setIShow}
          title="Demo Overlay"
          description="hello"
          children={<CustomButton onPress={() => setIShow(false)} style={{ marginTop: 20 }} text={'Close'} />}
        />
      </View>
    </ViewDarkMode>
  );
};

export default OverlayScreen;
