import Projects from './containers/Projects';
import About from './containers/About';
import Sidebar from './containers/Sidebar';
import EstiloGlobal, { Container } from './styles';

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </>
  );
}

export default App;
