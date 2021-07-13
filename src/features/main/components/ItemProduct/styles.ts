import { colors } from '@constants/vars';
import { StyleSheet } from 'react-native';
import { HEIGHT, WIDTH } from './../../../../constants/vars';
const W = WIDTH < HEIGHT ? WIDTH : HEIGHT;

const styles = StyleSheet.create({
  //Item

  itemContainer: {
    height: W / 3 + 20,
    width: W / 3,
  },

  itemLeftContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: W / 3 - 5,
    width: W / 3 - 5,
    backgroundColor: colors.DARK_GREY,
  },

  txtPrice: {
    fontWeight: 'bold',
    color: colors.BLACK,
    alignSelf: 'center',
    fontSize: 11,
  },
  styleIcon: { position: 'absolute', bottom: 7, right: 7 },
});

export default styles;
