import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Button } from '../CustomButtonGradient';
import CustomText from '../CustomText';
import translate from '@localize/index';
import { PADDING, WIDTH_RATIO } from '@constants/vars';
import NavigationActionsService from 'navigation';

export interface PropsAlert {
  text?: string;
  textLines?: number;
  customChild?: any;
  buttonBlackTitle?: string;
  buttonGrayTitle?: string;
  onPressBlackButton?: () => void;
  onPressGrayButton?: () => void;
}

const CustomPopupCommon = (props: PropsAlert) => {
  const {
    text,
    textLines = 0,
    customChild,
    buttonBlackTitle = translate('common.close'),
    buttonGrayTitle,
    onPressBlackButton,
    onPressGrayButton,
  } = props;

  const onPressBlack = () => {
    NavigationActionsService.hideAlert();
    setTimeout(() => {
      onPressBlackButton && onPressBlackButton();
    }, 500);
  };

  const onPressGray = () => {
    NavigationActionsService.hideAlert();
    setTimeout(() => {
      onPressGrayButton && onPressGrayButton();
    }, 500);
  };

  const renderLeftButton = () => {
    return buttonGrayTitle && <Button text={buttonGrayTitle} style={styles.leftButton} onPress={onPressGray} />;
  };

  const renderRightButton = () => {
    return (
      buttonBlackTitle && (
        <Button
          text={buttonBlackTitle}
          style={[styles.rightButton, { marginLeft: buttonGrayTitle ? 0 : PADDING * WIDTH_RATIO }]}
          onPress={onPressBlack}
        />
      )
    );
  };

  const renderButton = () => (
    <View style={{ flexDirection: 'row' }}>
      {renderLeftButton()}
      {renderRightButton()}
    </View>
  );

  return (
    <View style={styles.containerView}>
      <View style={styles.container}>
        {text && <CustomText style={styles.textTitle} numberOfLines={textLines} text={text} />}
        {customChild}
        {renderButton()}
      </View>
    </View>
  );
};

export default CustomPopupCommon;
