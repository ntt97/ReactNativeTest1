import styles from './styles';
import React from 'react';
import { StyleProp, View, ViewStyle, Text } from 'react-native';
import { Overlay } from 'react-native-elements';
interface OverlayCustomProps {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  footerChildren?: any;
  title?: string;
  description?: string;
  isClickBackdropHide?: boolean;
  children?: any;
  width?: string;
  styleContainer?: StyleProp<ViewStyle>;
  customStyleOverlay?: StyleProp<ViewStyle>;
  customStyleFooter?: StyleProp<ViewStyle>;
}
const OverlayCustom = ({
  modalVisible,
  setModalVisible,
  footerChildren,
  title,
  description,
  isClickBackdropHide = true,
  children = null,
  styleContainer = {},
  customStyleOverlay = {},
  customStyleFooter = {},
}: OverlayCustomProps) => {
  return (
    <Overlay
      isVisible={modalVisible}
      onBackdropPress={() => (isClickBackdropHide ? setModalVisible(false) : false)}
      overlayStyle={[styles.overlayStyle, customStyleOverlay]}
    >
      <View style={[styles.centeredView, styleContainer]}>
        <View>
          {title ? <Text style={styles.modalTitle}>{title}</Text> : null}
          {description ? <Text style={styles.modalDes}>{description}</Text> : null}
          {children}
        </View>
        {footerChildren && <View style={[styles.modalFooter, customStyleFooter]}>{footerChildren()}</View>}
      </View>
    </Overlay>
  );
};

export default OverlayCustom;
