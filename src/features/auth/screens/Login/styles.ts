import { HEIGHT, WIDTH_RATIO, WIDTH, colors } from '@constants/vars';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  formikContainer: {
    width: '100%',
    paddingHorizontal: 20 * WIDTH_RATIO,
    marginTop: 20,
  },
  content: {
    marginTop: WIDTH <= 320 ? HEIGHT * 0.1 : HEIGHT * 0.15,
    alignItems: 'center',
  },
  inputStyle: {
    fontSize: 14,
    color: colors.WHITE,
  },
  inputContainer: {
    marginTop: 10 * WIDTH_RATIO,
    borderRadius: 22 * WIDTH_RATIO,
    height: 44 * WIDTH_RATIO,
    // paddingHorizontal: 20 * WIDTH_RATIO,
    borderColor: 'rgb(120, 139, 163)',
    borderWidth: 1,
    backgroundColor: 'rgba(55, 80, 106, 0.3)',
  },
  headerTitle: {
    fontSize: 32 * WIDTH_RATIO,
    fontWeight: '700',
    color: colors.WHITE,
    marginBottom: 100 * WIDTH_RATIO,
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: colors.DARK_BLUE,
    width: WIDTH - 50 * WIDTH_RATIO,
    height: 40 * WIDTH_RATIO,
    borderRadius: 20 * WIDTH_RATIO,
    marginBottom: 10,
  },
  buttonTitle: {
    color: colors.WHITE,
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  linkTitle: {
    fontSize: 15 * WIDTH_RATIO,
    color: colors.WHITE,
  },
  linkContainer: {
    width: WIDTH * 0.86,
    marginTop: 20,
    marginBottom: 15,
  },
  textAlignRight: {
    textAlign: 'right',
    width: '100%',
  },
  inputErrorContainer: {
    borderColor: 'red',
    borderWidth: 1,
  },
  or: {
    fontSize: 12 * WIDTH_RATIO,
    marginVertical: 20 * WIDTH_RATIO,
    color: colors.GREY,
  },
  socialButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20 * WIDTH_RATIO,
  },
  socialButton: {
    width: ((WIDTH - 60) / 2) * WIDTH_RATIO,
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    height: 40 * WIDTH_RATIO,
    borderRadius: 20 * WIDTH_RATIO,
  },
  facebookText: {
    fontSize: 15 * WIDTH_RATIO,
    fontWeight: '800',
    color: 'rgb(24, 75, 191)',
  },
  googleText: {
    fontSize: 15 * WIDTH_RATIO,
    fontWeight: '800',
    color: colors.RED,
  },
  appleButton: {
    width: WIDTH - 60,
    height: 40 * WIDTH_RATIO,
    shadowColor: '#555',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    marginVertical: 15,
  },
  textColor: {
    color: 'white',
    fontSize: 16,
  },
  header: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  containerLanguage: {
    height: 40,
    width: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 20,
  },
  boxVi: {
    backgroundColor: 'blue',
    flex: 1,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxEn: {
    backgroundColor: colors.WHITE,
    flex: 1,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtActive: {
    color: 'white',
    fontWeight: 'bold',
  },
  txtLabelLanguage: {
    lineHeight: 18,
    fontSize: 15,
    color: colors.BLACK,
  },
});

export default styles;
