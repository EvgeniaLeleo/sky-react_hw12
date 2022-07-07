import styled, { createGlobalStyle } from 'styled-components';

import Console from './components/Console';
import Title from './components/Title';
import currentThemeColor from './theme';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: consolas;
    font-size: 16px;
    color: ${currentThemeColor};

    box-sizing: border-box;
    margin:0;
    padding:0;
  }`;

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  box-sizing: border-box;

  background: black;
`;

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
