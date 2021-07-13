import { forwardRef, useImperativeHandle } from 'react';
import { ActionSheetIOS, Alert } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {
  DocumentSourceImageListIOS,
  DocumentPickerImageSourceTitle,
  DocumentSourceImageVideoListIOS,
} from './ImagePickerType';
import { PickerOptions } from './index';
import { check, PERMISSIONS, request, openSettings } from 'react-native-permissions';
import translate from '@localize/index';
import DocumentPicker from 'react-native-document-picker';

const IOSPicker = forwardRef((props: PickerOptions, ref) => {
  const { onCompleted, titlePopup, isMuti = false, hasVideo } = props;

  useImperativeHandle(ref, () => ({
    show() {
      showDocumentSourcePicker();
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
      console.log('===========================================');
      console.log(result);
      console.log('===========================================');

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
        case 'limited':
          grantedAction(options, isOpenCamera, type);
          break;
      }
    });
  };

  const showDocumentSourcePicker = () => {
    handleShowActionSheetWithAllOptions(
      hasVideo ? DocumentSourceImageVideoListIOS : DocumentSourceImageListIOS,
      titlePopup ? titlePopup : DocumentPickerImageSourceTitle,
    );
  };

  const handleShowActionSheetWithAllOptions = (options: string[], title?: string) => {
    let optionsPhotos = {};
    const hasVideoObject = hasVideo
      ? {
          title: title,
          options: options,
          cancelButtonIndex: 3,
        }
      : {
          title: title,
          options: options,
          cancelButtonIndex: 2,
        };
    ActionSheetIOS.showActionSheetWithOptions(hasVideoObject, buttonIndex => {
      switch (buttonIndex) {
        case 0:
          // Open Camera
          optionsPhotos = {
            mediaType: 'photo',
            quality: 0.6,
            skipBackup: true,
            forceJpg: true,
            multiple: isMuti,
          };
          launchCameraOrPhotos(optionsPhotos, PERMISSIONS.IOS.CAMERA, true, DocumentPicker.types.plainText);
          break;
        case 1:
          optionsPhotos = {
            mediaType: 'photo',
            quality: 0.6,
            skipBackup: true,
            forceJpg: true,
            multiple: isMuti,
          };
          // Open Photos
          launchCameraOrPhotos(optionsPhotos, PERMISSIONS.IOS.PHOTO_LIBRARY, false, DocumentPicker.types.images);
          break;
        case 2:
          optionsPhotos = {
            mediaType: 'video',
            quality: 0.6,
            skipBackup: true,
            forceJpg: true,
            multiple: isMuti,
          };
          // Open Video
          if (hasVideo) {
            launchCameraOrPhotos(optionsPhotos, PERMISSIONS.IOS.PHOTO_LIBRARY, false, DocumentPicker.types.video);
          }
          break;
      }
    });
  };

  return null;
});

export default IOSPicker;
