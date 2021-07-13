import { BORDER_COLOR_DEFAULT, FONT_COLOR, FONT_SIZE_DEFAULT, RADIUS_DEFAULT } from '@constants/vars';

const styles = {
  inputIOS: {
    minWidth: 80,
    height: 40,
    fontSize: FONT_SIZE_DEFAULT,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: BORDER_COLOR_DEFAULT,
    borderRadius: RADIUS_DEFAULT,
    color: FONT_COLOR,
    paddingRight: 30,
    // To ensure the text is never behind the icon
  },
  inputAndroid: {
    minWidth: 80,
    height: 40,
    fontSize: FONT_SIZE_DEFAULT,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: BORDER_COLOR_DEFAULT,
    borderRadius: RADIUS_DEFAULT,
    color: FONT_COLOR,
    paddingRight: 30,
    // To ensure the text is nev∏er behind the icon
  },
  iconWrap: {
    height: 40,
    width: 40,
    justifyContent: 'center' as 'center',
    alignItems: 'center' as 'center',
  },
  icon: {
    tintColor: FONT_COLOR,
  },
};

export default styles;
