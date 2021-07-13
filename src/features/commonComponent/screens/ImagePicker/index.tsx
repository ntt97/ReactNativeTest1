import Header from '@components/Header';
import DocumentPickerImage from '@components/ImagePicker';
import { IPhoto } from '../../../../@types/photo';
import NavigationActionsService from 'navigation';
import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { getPhotoFromImageResponse } from '@utils/photo';
import CustomButton from '@components/CustomButton';
import FastImage from 'react-native-fast-image';
import { useState } from 'react';
import { HEIGHT } from '@constants/vars';
import ViewDarkMode from '@components/ViewDarkMode';

const ImagePickScreen = ({ title = '' }) => {
  const imagePickerRef = useRef<any>(null);
  const [uri, setUri] = useState<string>('http://aquaphor.vn/wp-content/uploads/2016/06/default-placeholder.png');
  useEffect(() => {}, []);

  const renderPicker = () => <DocumentPickerImage ref={imagePickerRef} onCompleted={onCompletedPicker} />;

  const onCompletedPicker = (response: any) => {
    const photo: IPhoto = getPhotoFromImageResponse(response);
    setUri(photo.uri);
  };

  const OpenPicker = () => {
    if (imagePickerRef && imagePickerRef.current) {
      imagePickerRef.current.show();
    }
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
        <FastImage style={styles.img} source={{ uri: uri }} />
        <CustomButton onPress={OpenPicker} text={'OpenPicker'} />
        {renderPicker()}
      </View>
    </ViewDarkMode>
  );
};

export default ImagePickScreen;
