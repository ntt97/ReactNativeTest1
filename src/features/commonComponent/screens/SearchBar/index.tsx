import { ICON_CART } from '@assets/index';
import Header from '@components/Header';
import SearchBar from '@components/SearchBar';
import ViewDarkMode from '@components/ViewDarkMode';
import NavigationActionsService from 'navigation';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import styles from './styles';

const SearchBarScreen = ({ title = '' }) => {
  useEffect(() => {}, []);
  return (
    <ViewDarkMode style={styles.body}>
      <Header
        iconVector="arrow-left"
        mainText={title}
        leftAction={() => {
          NavigationActionsService.pop();
        }}
      />
      <View style={styles.container}>
        <SearchBar
          isLoading={true}
          rightIcon={ICON_CART}
          customContainerSearchStyle={{ borderWidth: 1, borderRadius: 5, borderColor: 'gray' }}
        />
      </View>
    </ViewDarkMode>
  );
};

export default SearchBarScreen;
