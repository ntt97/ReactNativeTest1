import {
  ActivityIndicator,
  Image,
  ImageSourcePropType,
  NativeSyntheticEvent,
  StyleProp,
  Text,
  TextInput,
  TextInputChangeEventData,
  TextInputKeyPressEventData,
  TextInputSelectionChangeEventData,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { colors } from '@constants/vars';
import { isIOS } from '@constants/platform';
import styles from './styles';
import translate from '@localize/index';

interface Props {
  leftIcon?: ImageSourcePropType;
  onSelectionChange?: (event: NativeSyntheticEvent<TextInputSelectionChangeEventData>) => void;
  onKeyPress?: (event: NativeSyntheticEvent<TextInputKeyPressEventData>) => void;
  onChange?: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  multiLine?: boolean;
  selection?: any;
  rightIcon?: ImageSourcePropType;
  placeholder?: string;
  isLoading?: boolean;
  numberOfLines?: number;
  onTouchStart?: () => void;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'visible-password'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search'
    | undefined;
  onChangeText?: (text: string) => void;
  onPressRightIcon?: () => void;
  onFocus?: () => void;
  testSearch?: string;
  customContainerStyle?: StyleProp<ViewStyle>;
  customTextInputStyle?: StyleProp<ViewStyle>;
  customContainerSearchStyle?: StyleProp<ViewStyle>;
}

export default class SearchBar extends React.Component<Props> {
  static defaultProps = {
    hasPlusIcon: false,
  };

  render() {
    const {
      leftIcon,
      placeholder,
      rightIcon,
      onChangeText,
      onPressRightIcon,
      testSearch,
      onSelectionChange,
      selection,
      onFocus,
      multiLine,
      keyboardType,
      onTouchStart,
      onKeyPress,
      onChange,
      numberOfLines,
      customContainerStyle = {},
      customTextInputStyle = {},
      customContainerSearchStyle = {},
      isLoading,
    } = this.props;

    return (
      <View style={[styles.container, customContainerStyle]}>
        <View style={[styles.searchContainer, customContainerSearchStyle]}>
          {leftIcon ? (
            <Image resizeMode="contain" source={leftIcon} />
          ) : (
            <Text style={styles.to}>{translate('searchbar.to')}</Text>
          )}

          <TextInput
            onFocus={onFocus}
            keyboardType={keyboardType}
            numberOfLines={numberOfLines}
            onChange={onChange}
            selection={selection}
            multiline={multiLine}
            onSelectionChange={onSelectionChange}
            placeholder={placeholder}
            onTouchStart={onTouchStart}
            clearButtonMode="always"
            onChangeText={onChangeText}
            onKeyPress={onKeyPress}
            placeholderTextColor={colors.GRAY500}
            style={[styles.searchInput, !isIOS ? { paddingBottom: 6 } : {}, customTextInputStyle]}
          >
            {testSearch}
          </TextInput>
          {isLoading ? <ActivityIndicator color={colors.BLUE} animating size="small" /> : null}
        </View>
        {rightIcon && (
          <TouchableOpacity onPress={onPressRightIcon}>
            <Image style={styles.rightIcon} resizeMode="contain" source={rightIcon} />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
