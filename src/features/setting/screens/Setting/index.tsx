import { changeDarkMode } from '@actions/darkMode.action';
import { handleChangeLanguage } from '@actions/language.action';
import CustomText from '@components/CustomText';
import Header from '@components/Header';
import PickerSelect from '@components/PickerSelect';
import ViewDarkMode from '@components/ViewDarkMode';
import { colors, WIDTH_RATIO } from '@constants/vars';
import translate from '@localize/index';
import { RootState } from '@reducers/index';
import { setDefaultLanguage, setIsDarkModeTheme } from 'helpers';
import withLanguageChange from 'hoc/HocLanguage';
import I18n from 'i18n-js';
import NavigationActionsService from 'navigation';
import React, { useEffect } from 'react';
import { Switch, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';

const SettingScreen = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector<RootState>((state: RootState) => state.language.currentLanguage);
  const isDarkMode = useSelector<RootState>((state: RootState) => state.darkMode.isDarkMode) as boolean;

  useEffect(() => {}, []);
  const onChange = (keyLanguage: string) => {
    setDefaultLanguage(keyLanguage);
    I18n.defaultLocale = keyLanguage;
    I18n.locale = keyLanguage;
    dispatch(handleChangeLanguage(keyLanguage));
  };
  return (
    <ViewDarkMode style={styles.body}>
      <Header
        iconVector="bars"
        noShadow={true}
        mainText={translate('menu.setting')}
        leftAction={() => {
          NavigationActionsService.toggleDrawer(true);
        }}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={[styles.block]}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <Icon style={styles.icon} name={'language'} size={30 * WIDTH_RATIO} color={colors.BLUE} />
              <CustomText text={translate('setting.language')} style={styles.menuTitle} />
            </View>
            <View style={styles.selectLanguage}>
              <PickerSelect
                items={[
                  { label: '🇻🇳 Việt Nam', value: 'vi' },
                  { label: '🇬🇧 English', value: 'en' },
                ]}
                onValueChange={onChange}
                value={currentLanguage}
                isPlaceholder={false}
              />
            </View>
          </View>

          <View style={[styles.block]}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <Icon style={styles.icon} name={'adjust'} size={30 * WIDTH_RATIO} color={colors.BLUE} />
              <CustomText text={translate('setting.mode')} style={styles.menuTitle} />
            </View>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isDarkMode ? colors.BLUE : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={value => {
                dispatch(changeDarkMode(value));
                setIsDarkModeTheme(value);
              }}
              value={isDarkMode}
            />
          </View>
        </View>
      </SafeAreaView>
    </ViewDarkMode>
  );
};

export default withLanguageChange(SettingScreen);
