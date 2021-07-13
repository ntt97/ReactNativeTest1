import { StyleSheet } from 'react-native';
import { SPACING_SM, colors } from '@constants/vars';

const styles = StyleSheet.create({
  formBar: {
    height: 45,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: SPACING_SM,
  },
  iconContainer: {
    height: 45,
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    right: 0,
    marginRight: 20,
  },
  iconStyle: {
    height: 20,
    width: 20,
    tintColor: 'white',
  },
  inputStyle: {
    fontSize: 14,
    marginTop: 30,
  },
  inputContainer: {
    borderBottomWidth: 0,
  },
  container: {},
  description: {
    fontSize: 14,
    marginLeft: 15,
    color: colors.DARK_GREY,
  },
});

export default styles;
