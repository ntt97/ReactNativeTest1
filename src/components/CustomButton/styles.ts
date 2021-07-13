import { StyleSheet } from 'react-native';
import { colors, WIDTH_RATIO, WIDTH } from '@constants/vars';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.BLUE,
    width: WIDTH - 50 * WIDTH_RATIO,
    height: 40 * WIDTH_RATIO,
    borderRadius: 20 * WIDTH_RATIO,
    marginBottom: 10,
  },

  text: {
    fontSize: 14,
  },

  icon: {
    height: 20,
    width: 20,
  },
});

export default styles;
