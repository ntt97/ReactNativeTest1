import { Style } from '.';
import { StyleSheet } from 'react-native';
import { BORDER_RADIUS, colors, FONT_SIZE_DEFAULT, PADDING, WIDTH_RATIO } from '@constants/vars';

export const styleConfig = StyleSheet.create({
  icon: {
    height: 20,
    width: 20,
    marginLeft: PADDING,
    position: 'absolute',
  },
  textInsideButton: {
    flex: 1,
    textAlign: 'center',
  },
  textContent: {
    marginRight: 10,
  },
  disabledButton: {
    opacity: 0.5,
  },
  shadowButton: {
    shadowColor: 'rgba(22,29,37,0.2)',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.7,
    shadowRadius: 1,
  },
  gradientButton: {
    borderColor: '#4F5DBA',
    borderRadius: BORDER_RADIUS,
    overflow: 'hidden',
    // effect only android
    elevation: 3,
  },
  containerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const ButtonStyles: Style = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.BLUE,
    marginVertical: 5,
    height: 38 * WIDTH_RATIO,
    borderRadius: (38 / 2) * WIDTH_RATIO,
    marginHorizontal: PADDING,
  },
  wrapText: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 15,
    borderColor: '#adb5bd',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
  },
  gradientContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 15,
    backgroundColor: 'transparent',
    height: 40,
    elevation: 10,
  },
  text: {
    color: colors.WHITE,
    fontSize: FONT_SIZE_DEFAULT,
    fontWeight: 'bold',
  },
};

export const SocialButtonStyles: Style = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 40,
    borderRadius: BORDER_RADIUS,
  },
  text: {
    fontSize: 15,
  },
};
