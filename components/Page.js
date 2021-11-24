import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

const appTheme = {
  colors: {
    background: '#1d1d1d;',
    textPrimary: '#ddd;',
  },
  font: `'Archivo', sans-serif`,
};

export default function Page({ children }) {
  return (
    <>
      <ThemeProvider theme={appTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </>
  );
}
