import { Platform } from 'react-native';
import moment from 'moment';
import { IPhoto } from '../@types/photo';

export function getPhotoFromImageResponse(response: any) {
  const photo: IPhoto = { name: '', uri: '', type: '' };
  if (response) {
    if (Platform.OS === 'ios') {
      photo.name = moment().valueOf().toString() + '.jpg';
    } else {
      const names = response.path ? response.path.split('/') : [];
      photo.name = names && names.length > 0 ? names[names.length - 1] : '';
    }
    photo.uri = response.path ? response.path : '';
    photo.type = response.mime;
  }

  return photo;
}
