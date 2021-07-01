import { DefaultTheme } from 'react-native-paper';

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