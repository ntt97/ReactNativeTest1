import Header from '@components/Header';
import PickerSelect from '@components/PickerSelect';
import ViewDarkMode from '@components/ViewDarkMode';
import NavigationActionsService from 'navigation';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import styles from './styles';

const PickerSelectScreen = ({ title = '' }) => {
  useEffect(() => {}, []);
  const onChange = (value: any, index: any) => {};
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
        <PickerSelect
          items={[
            { label: 'Football', value: 'football' },
            { label: 'Baseball', value: 'baseball' },
            { label: 'Hockey', value: 'hockey' },
          ]}
          onValueChange={onChange}
        />
      </View>
    </ViewDarkMode>
  );
};

export default PickerSelectScreen;
