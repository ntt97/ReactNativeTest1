import { StyleSheet } from 'react-native';
import { colors } from '@constants/vars';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.GRAY,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  avatarText: {
    color: colors.WHITE,
    fontSize: 16,
  },
});
