import translate from '@localize/index';

export const DocumentPickerSourceTitle = translate('document_picker.upload_collection');
export const DocumentPickerImageSourceTitle = translate('document_picker.upload_avatar');

// picker for android
export const DocumentSourceImageListDroid = [
  {
    value: 0,
    label: translate('document_picker.take_photo'),
  },
  {
    value: 1,
    label: translate('document_picker.choose_photo'),
  },
];
export const DocumentSourceImageVideoListDroid = [
  translate('document_picker.take_photo'),
  translate('document_picker.choose_photo'),
  translate('document_picker.choose_video'),
  {
    value: 0,
    label: translate('document_picker.take_photo'),
  },
  {
    value: 1,
    label: translate('document_picker.choose_photo'),
  },
  {
    value: 2,
    label: translate('document_picker.choose_video'),
  },
];

//picker for IOS
export const DocumentSourceImageListIOS = [
  translate('document_picker.take_photo'),
  translate('document_picker.choose_photo'),
  translate('document_picker.cancel'),
];

export const DocumentSourceImageVideoListIOS = [
  translate('document_picker.take_photo'),
  translate('document_picker.choose_photo'),
  translate('document_picker.choose_video'),
  translate('document_picker.cancel'),
];
