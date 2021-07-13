import { StyleSheet } from 'react-native';
import { HEIGHT } from '@constants/vars';
const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  img: {
    height: HEIGHT / 2,
    marginBottom: 20,
    borderWidth: 1,
  },
});

export default styles;
