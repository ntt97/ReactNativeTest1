import { DROPDOWN } from '@assets/index';
import translate from '@localize/index';
import React, { ReactNode } from 'react';
import { Image, TextStyle, View } from 'react-native';
import RNPickerSelect, { Item as SelectItem } from 'react-native-picker-select';
import styles from './styles';

export type Item = SelectItem;
interface Props {
  items: Item[];
  value?: any;
  placeholder?: string;
  inputIOS?: TextStyle;
  inputAndroid?: TextStyle;
  isPlaceholder?: boolean;
  onValueChange: (value: any, index: number) => void;
  disabled?: boolean;
  itemKey?: string | number;
  children?: React.ReactNode;
  onOpen?: () => void;
  useNativeAndroidPickerStyle?: boolean;
  fixAndroidTouchableBug?: boolean;
  doneText?: string;
  onDonePress?: () => void;
  onUpArrow?: () => void;
  onDownArrow?: () => void;
  onClose?: () => void;
  Icon?: React.ReactNode;
  InputAccessoryView?: React.ReactNode;
}

const IconDefault = (): ReactNode => (
  <View style={styles.iconWrap}>
    <Image source={DROPDOWN} style={styles.icon} />
  </View>
);

const PickerSelect = (props: Props) => {
  const {
    placeholder = translate('picker_select.placeholder'),
    isPlaceholder = true,
    items,
    value,
    inputIOS,
    inputAndroid,
    onValueChange,
    disabled,
    itemKey,
    children,
    onOpen,
    useNativeAndroidPickerStyle,
    fixAndroidTouchableBug,
    doneText,
    onDonePress,
    onUpArrow,
    onDownArrow,
    onClose,
    Icon = IconDefault,
    InputAccessoryView,
  } = props;
  return (
    <RNPickerSelect
      style={{
        ...styles,
        inputIOS: { ...styles.inputIOS, ...inputIOS },
        inputAndroid: { ...styles.inputAndroid, ...inputIOS },
      }}
      onValueChange={onValueChange}
      items={items}
      value={value}
      placeholder={
        isPlaceholder
          ? {
              label: placeholder,
              value: null,
            }
          : {}
      }
      fixAndroidTouchableBug
      Icon={Icon}
    />
  );
};
export default PickerSelect;
