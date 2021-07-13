import React from 'react';
import styles from './styles';
import { Input } from 'react-native-elements';
import {
  View,
  Image,
  StyleProp,
  TextStyle,
  ViewStyle,
  ImageStyle,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  ReturnKeyTypeOptions,
  KeyboardTypeOptions,
  TextInputFocusEventData,
  ActivityIndicator,
} from 'react-native';
import { CustomTouchable } from '../CustomTouchable';
import { CLOSED_EYE, OPEN_EYE } from '@assets/index';
import CustomText from '../CustomText';
import { colors } from '@constants/vars';

const LoadingPicker = () => {
  return <ActivityIndicator size={'small'} color={colors.BLACK} />;
};
export type CustomInputProps = {
  description?: string;
  descriptionStyle?: StyleProp<TextStyle>;
  customInputStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  placeholder?: string;
  placeholderColor?: string;
  value?: string;
  secureTextEntry?: boolean;
  onPressEye?: () => void;
  inputRef?: any;
  rightIcon?: any;
  onPressRightIcon?: () => void;
  rightIconStyle?: StyleProp<ImageStyle>;
  pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto';
  editable?: boolean;
  multiline?: boolean;
  rest?: any;
  onChangeText?: (text: string) => void;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  onSubmitEditing?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
  returnKeyType?: ReturnKeyTypeOptions;
  keyboardType?: KeyboardTypeOptions;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  autoCorrect?: boolean;
  rightLoading?: boolean;
};

const CustomInput = ({
  autoCapitalize,
  onChangeText,
  description,
  descriptionStyle,
  customInputStyle,
  inputContainerStyle,
  inputStyle,
  containerStyle,
  placeholder,
  placeholderColor,
  value,
  secureTextEntry,
  onPressEye,
  inputRef,
  rightIcon,
  onPressRightIcon,
  rightIconStyle,
  pointerEvents = 'auto',
  editable = true,
  multiline = false,
  onSubmitEditing,
  returnKeyType,
  keyboardType,
  onBlur,
  autoCorrect,
  rightLoading = false,

  ...rest
}: CustomInputProps) => (
  <View style={[{ alignItems: 'flex-start' }]}>
    {description ? <CustomText style={[styles.description, descriptionStyle]} text={description} /> : null}
    <View style={[styles.formBar, customInputStyle]}>
      <Input
        {...rest}
        ref={inputRef}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={placeholderColor ? placeholderColor : 'grey'}
        value={value}
        placeholder={placeholder}
        allowFontScaling={false}
        editable={editable}
        inputStyle={[styles.inputStyle, inputStyle]}
        inputContainerStyle={[styles.inputContainer, inputContainerStyle]}
        containerStyle={[styles.container, containerStyle]}
        pointerEvents={pointerEvents}
        multiline={multiline}
        onChangeText={onChangeText}
        autoCapitalize={autoCapitalize}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType}
        keyboardType={keyboardType}
        onBlur={onBlur}
        autoCorrect={autoCorrect}
      />
      {onPressEye && (
        <CustomTouchable style={[styles.iconContainer, rightIcon && { marginRight: 50 }]} onPress={onPressEye}>
          <Image
            style={[styles.iconStyle, rightIconStyle]}
            source={secureTextEntry ? CLOSED_EYE : OPEN_EYE}
            resizeMode={'contain'}
          />
        </CustomTouchable>
      )}
      {rightIcon && (
        <CustomTouchable style={[styles.iconContainer]} onPress={onPressRightIcon}>
          {!rightLoading ? (
            <Image style={[styles.iconStyle, rightIconStyle]} resizeMode="cover" source={rightIcon} />
          ) : (
            <LoadingPicker />
          )}
        </CustomTouchable>
      )}
    </View>
  </View>
);

export default CustomInput;
