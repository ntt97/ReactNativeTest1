import React from 'react';
import styles from './styles';
import CustomText from '../CustomText';

interface Props {
  errorValue?: any;
  style?: object;
}

const ErrorMessage = (props: Props) => {
  const { errorValue, style } = props;

  return errorValue ? <CustomText style={[styles.errorText, style]} text={errorValue} /> : null;
};

export default ErrorMessage;
