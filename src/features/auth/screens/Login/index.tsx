import { handleChangeLanguage } from '@actions/language.action';
import { BG_MODEL, ICON_KEY, ICON_USER } from '@assets/index';
import CustomButton from '@components/CustomButton';
import CustomInput from '@components/CustomInput';
import CustomText from '@components/CustomText';
import ErrorMessage from '@components/ErrorMessage';
import ToastComponent from '@components/Toast';
import { colors } from '@constants/vars';
import translate from '@localize/index';
import { RootState } from '@reducers/index';
import { Formik } from 'formik';
import { setDefaultLanguage, setIsLogin } from 'helpers';
import withLanguageChange from 'hoc/HocLanguage';
import I18n from 'i18n-js';
import NavigationActionsService from 'navigation';
import MainNav from 'navigation/mainNav';
import React, { useEffect, useRef, useState } from 'react';
import { ImageBackground, Keyboard, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { object, string } from 'yup';
import styles from './styles';
interface Props {
  componentId: string;
}

const validationSchema = object().shape({
  email: string()
    .label('authentication.email')
    .email('authentication.valid_email')
    .required('authentication.registered_email'),
  password: string()
    .label('authentication.password')
    .required('authentication.password_required')
    .min(8, 'authentication.short_password'),
});

const LoginScreen = (props: Props) => {
  const currentLanguage = useSelector<RootState>((state: RootState) => state.language.currentLanguage);
  const isConnected = useSelector<RootState>((state: RootState) => state.networkStatus.isConnected) as boolean;
  const dispatch = useDispatch();
  const [secureEntry, setSecureEntry] = useState<boolean>(true);
  const passwordRef: any = useRef(null);
  const isEN = currentLanguage === 'en';

  useEffect(() => {
    NavigationActionsService.initInstance(props.componentId);
  }, []);

  const onLoginSuccess = (response: any) => {
    NavigationActionsService.hideLoading();
    setIsLogin(true);
    MainNav();
  };

  //ACTIONS
  const onLogin = (values: any) => {
    Keyboard.dismiss();
    if (!isConnected) {
      ToastComponent('ERROR', translate('network.status'));
      return;
    }
    NavigationActionsService.showLoading();
    setTimeout(() => {
      onLoginSuccess('');
    }, 3000);
  };

  const onPressEye = () => {
    setSecureEntry(!secureEntry);
  };

  //RENDERS
  const renderHeaderTitle = () => {
    return <CustomText style={styles.headerTitle} text={translate('authentication.login_label')} />;
  };

  const focusPassword = () => {
    passwordRef && passwordRef.current.focus();
  };

  const onChangeLanguage = (keyLanguage: string) => {
    setDefaultLanguage(keyLanguage);
    I18n.defaultLocale = keyLanguage;
    I18n.locale = keyLanguage;
    dispatch(handleChangeLanguage(keyLanguage));
  };

  const renderInputField = () => {
    return (
      <Formik initialValues={{ email: '', password: '' }} onSubmit={onLogin} validationSchema={validationSchema}>
        {formikProps => (
          <View style={styles.formikContainer}>
            <CustomInput
              onChangeText={formikProps.handleChange('email')}
              autoCapitalize="none"
              onSubmitEditing={focusPassword}
              placeholder={translate('authentication.username')}
              returnKeyType="next"
              keyboardType="email-address"
              customInputStyle={styles.inputContainer}
              inputStyle={styles.inputStyle}
              value={formikProps.values.email}
              onBlur={formikProps.handleBlur('email')}
              rightIcon={ICON_USER}
              placeholderColor={colors.WHITE}
            />
            <ErrorMessage
              errorValue={formikProps.touched.email && formikProps.errors.email && translate(formikProps.errors.email)}
            />

            <CustomInput
              onChangeText={formikProps.handleChange('password')}
              onSubmitEditing={formikProps.handleSubmit}
              placeholder={translate('authentication.password')}
              returnKeyType="go"
              secureTextEntry={secureEntry}
              onPressEye={onPressEye}
              customInputStyle={styles.inputContainer}
              inputStyle={styles.inputStyle}
              value={formikProps.values.password}
              onBlur={formikProps.handleBlur('password')}
              inputRef={passwordRef}
              rightIcon={ICON_KEY}
              placeholderColor={colors.WHITE}
            />
            <ErrorMessage
              errorValue={
                formikProps.touched.password && formikProps.errors.password && translate(formikProps.errors.password)
              }
            />

            <CustomButton
              disabled={!formikProps.isValid}
              onPress={formikProps.handleSubmit}
              style={styles.buttonContainer}
              textStyle={styles.buttonTitle}
              text={translate('authentication.login_button')}
            />
          </View>
        )}
      </Formik>
    );
  };
  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.containerLanguage}>
        <TouchableOpacity onPress={() => onChangeLanguage('vi')} style={isEN ? styles.boxEn : styles.boxVi}>
          <Text style={[styles.txtLabelLanguage, isEN ? {} : styles.txtActive]}>VI</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onChangeLanguage('en')} style={!isEN ? styles.boxEn : styles.boxVi}>
          <Text style={[styles.txtLabelLanguage, !isEN ? {} : styles.txtActive]}>EN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ImageBackground style={{ flex: 1 }} source={BG_MODEL}>
      <SafeAreaView>
        <KeyboardAwareScrollView
          contentInsetAdjustmentBehavior="never"
          keyboardShouldPersistTaps={'handled'}
          showsVerticalScrollIndicator={false}
        >
          {renderHeader()}
          <View style={styles.content}>
            {renderHeaderTitle()}
            {renderInputField()}
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default withLanguageChange(LoginScreen);
