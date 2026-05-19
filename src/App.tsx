import { ThemeProvider } from 'styled-components';

import Projects from './containers/Projects';
import About from './containers/About';
import Sidebar from './containers/Sidebar';
import EstiloGlobal, { Container } from './styles';
import themeLight from './themes/light';
import themeDark from './themes/dark';
import { useState } from 'react';

function App() {
  const [useThemeDark, setUseThemeDark] = useState(false);

  function tradeTheme() {
    setUseThemeDark(!useThemeDark);
  }

  return (
    <ThemeProvider theme={useThemeDark ? themeDark : themeLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar tradeTheme={tradeTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
