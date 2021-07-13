import { Platform } from 'react-native';
import IOSPickerImage from './IOSPicker';
import AndroidPickerImage from './AndroidPicker';

export interface PickerOptions {
  onCompleted: (imageResponse?: any, type?: any) => void;
  titlePopup?: string;
  isMuti?: boolean;
  hasVideo?: boolean;
}

const DocumentPickerImage = Platform.OS === 'ios' ? IOSPickerImage : AndroidPickerImage;

export default DocumentPickerImage;
