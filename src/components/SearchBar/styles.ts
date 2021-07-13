import * as vars from '@constants/vars';
import { StyleSheet } from 'react-native';
import { colors, WIDTH_RATIO } from '@constants/vars';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 40 * WIDTH_RATIO,
  },
  searchContainer: {
    flexDirection: 'row',
    flex: 1,
    minHeight: 30 * WIDTH_RATIO,
    paddingLeft: 10 * WIDTH_RATIO,
    paddingRight: 5 * WIDTH_RATIO,
    alignItems: 'center',
    borderRadius: 20 * WIDTH_RATIO,
    borderWidth: 1 * WIDTH_RATIO,
    borderColor: colors.GRAY200,
    backgroundColor: vars.colors.WHITE,
  },
  searchIcon: {
    marginLeft: 20 * WIDTH_RATIO,
    width: 14 * WIDTH_RATIO,
    height: 14 * WIDTH_RATIO,
  },
  to: {
    color: vars.colors.DARK_GREY,
    fontSize: vars.FONT_SIZE_DEFAULT,
  },
  searchInput: {
    flex: 1,
    fontSize: vars.FONT_SIZE_DEFAULT,
    marginLeft: 7 * WIDTH_RATIO,
    textAlignVertical: 'top',
    minHeight: 36 * WIDTH_RATIO,
    paddingRight: 10 * WIDTH_RATIO,
  },
  rightIcon: {
    marginLeft: 10 * WIDTH_RATIO,
  },
});

export default styles;
