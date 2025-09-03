
// project-imports
import config, { MenuOrientation, ThemeDirection, ThemeMode } from 'config';
import useLocalStorage from 'hooks/useLocalStorage';

// types
import { CustomizationProps, FontFamily, I18n, PresetColor } from 'types/config';

// initial state
const initialState: CustomizationProps = {
  ...config,
  onChangeContainer: () => {},
  onChangeLocalization: () => {},
  onChangeMode: () => {},
  onChangePresetColor: () => {},
  onChangeDirection: () => {},
  onChangeMiniDrawer: () => {},
  onChangeMenuOrientation: () => {},
  onChangeMenuCaption: () => {},
  onChangeFontFamily: () => {},
  onChangeContrast: () => {}
};

// ==============================|| CONFIG CONTEXT & PROVIDER ||============================== //



export function ConfigContextUpdate() {
  const [config, setConfig] = useLocalStorage('kgp-storage', initialState);

  const onChangeLocalization = (lang: I18n) => {

    setConfig({
      ...config,
      i18n: lang,
      themeDirection: lang === 'en' ? ThemeDirection.LTR : ThemeDirection.RTL
    });
  };

  const onChangeDirection = (direction: ThemeDirection) => {
    setConfig({
      ...config,
      themeDirection: direction
    });
  };

  const onChangeMiniDrawer = (miniDrawer: boolean) => {
    setConfig({
      ...config,
      miniDrawer
    });
  };

  const onChangeMenuCaption = () => {
    setConfig({
      ...config,
      menuCaption: !config.menuCaption
    });
  };

  const onChangeMenuOrientation = (layout: MenuOrientation) => {
    setConfig({
      ...config,
      menuOrientation: layout
    });
  };

  const onChangeFontFamily = (fontFamily: FontFamily) => {
    setConfig({
      ...config,
      fontFamily
    });
  };
 

  return { 
    onChangeLocalization,
    onChangeDirection,
    onChangeFontFamily,
    onChangeMenuOrientation,
    onChangeMenuCaption,
    onChangeMiniDrawer,
  }
}

