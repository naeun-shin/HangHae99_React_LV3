import MainSection from './components/MainSection';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainSection />
    </ThemeProvider>
  );
}

export default App;
