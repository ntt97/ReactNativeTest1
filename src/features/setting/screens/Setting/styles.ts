import { StyleSheet } from 'react-native';
import { BORDER_COLOR_DEFAULT, colors, HEIGHT, RADIUS_DEFAULT } from '@constants/vars';
const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 15,
    marginVertical: 10,
    flex: 1,
    maxHeight: 60,
    borderWidth: 1,
    borderColor: colors.GRAY,
  },
  icon: { marginRight: 10 },
  menuTitle: {
    color: colors.BLACK,
    // flex: 1,
  },
  selectLanguage: {
    borderWidth: 0.5,
    borderColor: BORDER_COLOR_DEFAULT,
    borderRadius: RADIUS_DEFAULT,
    width: 150,
  },
});

export default styles;
