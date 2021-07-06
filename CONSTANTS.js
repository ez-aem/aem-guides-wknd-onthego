import { DefaultTheme } from 'react-native-paper';

export const URL = "https://publish-p25404-e44534-cmstg.adobeaemcloud.com";
export const HOME_SCREEN_DATA = `${URL}/graphql/execute.json/wknd/native-app-home`;
export const ADVENTURES_DATA = `${URL}/graphql/execute.json/wknd/native-app-adventures`;
export const ARTICLE_DATA = `${URL}/graphql/execute.json/wknd/native-app-adventure%3bapath=`;

const Theme = {
  ...DefaultTheme,
  dark: false,
  roundness: 0,
  colors: {
    primary: "#202020",
    accent: "#FFEB00",
    background: "#202020",
    surface: "#202020",
    error: '#B00020',
    text: "#fff",
    onSurface: '#000000',
    disabled: "rgb(255, 69, 58)",
    placeholder: "rgb(255, 69, 58)",
    backdrop: "rgb(255, 69, 58)",
    notification: "rgb(255, 69, 58)",
  },
  // fonts: configureFonts(),
  animation: {
    scale: 1.0,
  },
};

export default Theme;