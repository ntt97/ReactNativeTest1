import React from 'react';
import styles from './styles';
import CustomText from '../CustomText';
import translate from '@localize/index';
import { TextStyle } from 'react-native';

interface Props {
  style?: TextStyle;
  text?: string;
}

const EmptyData = (props: Props) => {
  const { style, text = translate('common.list_empty') } = props;
  return <CustomText style={[styles.emptyView, style]} text={text} />;
};

export default React.memo(EmptyData);
