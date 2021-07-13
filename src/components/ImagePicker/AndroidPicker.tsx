import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import ReactNativePickerModule from 'react-native-picker-module';
import {
  DocumentPickerImageSourceTitle,
  DocumentSourceImageListDroid,
  DocumentSourceImageVideoListDroid,
} from './ImagePickerType';
import ImagePicker from 'react-native-image-crop-picker';
import { check, PERMISSIONS, request, openSettings } from 'react-native-permissions';
import translate from '@localize/index';
import { Alert } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { PickerOptions } from './index';

const AndroidPicker = forwardRef((props: PickerOptions, ref) => {
  const { onCompleted, titlePopup, isMuti = false, hasVideo } = props;

  const pickerRef: any = useRef(null);

  useImperativeHandle(ref, () => ({
    show() {
      pickerRef && pickerRef.current.show();
    },
  }));

  const grantedAction = (options: any, isOpenCamera: boolean, type: any) => {
    if (isOpenCamera) {
      ImagePicker.openCamera(options).then(images => {
        onCompleted(images, type);
      });
    } else {
      ImagePicker.openPicker(options).then(images => {
        onCompleted(images, type);
      });
    }
  };

  const launchCameraOrPhotos = (options: any, permission: any, isOpenCamera = false, type: any) => {
    check(permission).then(result => {
      switch (result) {
        case 'unavailable':
          if (isOpenCamera) {
            Alert.alert(translate('alert.camera_unavailable_title'), translate('alert.camera_unavailable_message'));
          } else {
            Alert.alert(translate('alert.photo_unavailable_title'), translate('alert.photo_unavailable_message'));
          }
          break;
        case 'blocked':
          Alert.alert(
            isOpenCamera ? translate('alert.camera_access_denied_title') : translate('alert.photo_access_denied_title'),
            isOpenCamera
              ? translate('alert.camera_access_denied_message')
              : translate('alert.photo_access_denied_message'),
            [
              {
                text: translate('alert.ok'),
                onPress: () => {},
              },
              {
                style: 'cancel',
                text: translate('alert.settings'),
                onPress: () => openSettings().catch(() => console.warn('cannot open settings')),
              },
            ],
          );
          break;
        case 'denied':
          request(permission).then(result => {
            if (result === 'granted') {
              grantedAction(options, isOpenCamera, type);
            }
          });
          break;
        case 'granted':
          grantedAction(options, isOpenCamera, type);
          break;
      }
    });
  };

  const handleAllDocumentSourceResponse = async (value: string) => {
    let optionsGallery = {};
    const number: number = +value;
    switch (number) {
      case 0:
        optionsGallery = {
          mediaType: 'photo',
          quality: 0.6,
          skipBackup: true,
          forceJpg: true,
          multiple: isMuti,
        };
        launchCameraOrPhotos(optionsGallery, PERMISSIONS.ANDROID.CAMERA, true, DocumentPicker.types.plainText);
        break;
      case 1:
        optionsGallery = {
          mediaType: 'photo',
          quality: 0.6,
          skipBackup: true,
          forceJpg: true,
          multiple: isMuti,
        };
        launchCameraOrPhotos(
          optionsGallery,
          PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
          false,
          DocumentPicker.types.images,
        );
        break;
      case 2:
        optionsGallery = {
          mediaType: 'video',
          quality: 0.6,
          skipBackup: true,
          forceJpg: true,
          multiple: isMuti,
        };
        launchCameraOrPhotos(
          optionsGallery,
          PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
          false,
          DocumentPicker.types.video,
        );
        break;
    }
  };

  return (
    <ReactNativePickerModule
      items={hasVideo ? (DocumentSourceImageVideoListDroid as any) : (DocumentSourceImageListDroid as any)}
      title={titlePopup ? titlePopup : DocumentPickerImageSourceTitle}
      pickerRef={pickerRef}
      onValueChange={handleAllDocumentSourceResponse}
    />
  );
});

export default AndroidPicker;
