/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import CustomText from '@components/CustomText';
import { CustomTouchable } from '@components/CustomTouchable';
import { nHeight } from '@components/Header/styles';
import { colors, HEIGHT, WIDTH, WIDTH_RATIO } from '@constants/vars';
import { PropsItemProduct } from '@types';
import NavigationActionsService from 'navigation';
import React, { useState } from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ItemProduct = ({ item, addToCart, isPortrait }: PropsItemProduct) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [isError, setIsError] = useState<boolean>(false);
  const { image, price, name } = item;
  const onChangeValue = (num: number) => {
    if (quantity === 1 && num === -1) {
      return;
    }
    setQuantity(quantity + num);
  };

  let W: number = WIDTH < HEIGHT ? WIDTH : HEIGHT;
  W = W - (nHeight - 60 * WIDTH_RATIO);
  const itemContainerLandSpace = {
    height: W / 3 + 20,
    width: W / 3,
  };
  const imageStyleLandSpace = {
    height: W / 3 - 5,
    width: W / 3 - 5,
  };

  const onPressImage = () => {
    NavigationActionsService.showAlert({
      text: 'Record species',
    });
  };

  const onPressIcon = () => {
    NavigationActionsService.showAlert({
      text: 'Species details',
    });
  };

  return (
    <View style={[styles.itemContainer, isPortrait ? {} : itemContainerLandSpace]}>
      <View style={styles.itemLeftContainer}>
        <CustomTouchable onPress={onPressImage}>
          <FastImage
            onError={() => {
              setIsError(true);
            }}
            style={[styles.imageStyle, isPortrait ? {} : imageStyleLandSpace]}
            source={{
              uri:
                !isError && image && image != ''
                  ? image
                  : 'https://www.ormondbeachmartialarts.com/wp-content/uploads/2017/04/default-image.jpg',
            }}
          />
          <Icon
            onPress={onPressIcon}
            style={styles.styleIcon}
            name={'question-circle'}
            size={30 * WIDTH_RATIO}
            color={colors.BLUE}
          />
        </CustomTouchable>
        <CustomText style={styles.txtPrice}>{name}</CustomText>
      </View>
    </View>
  );
};

export default ItemProduct;
