import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyles from '../styles/GlobalStyles';

const appTheme = {
  colors: {
    background: '#1d1d1d;',
    textPrimary: '#ddd;',
    textHover: '#999999;',
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

Page.propTypes = {
  children: PropTypes.node.isRequired,
};
