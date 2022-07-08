import { createGlobalStyle } from 'styled-components';
import Console from './components/Console/Console';
import currentThemeColor from './theme';
import { AppWrapper, Title } from './styles';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: consolas;
    font-size: 16px;
    color: ${currentThemeColor};

    box-sizing: border-box;
    margin:0;
    padding:0;
  }`;

const App = () => (
  <>
    <GlobalStyles />
    <AppWrapper>
      <Title color={currentThemeColor}>Console CMD. SKYPRO_REACT</Title>
      <Console color={currentThemeColor} />
    </AppWrapper>
  </>
);

export default App;
