import {ThemeProvider} from 'styled-components';
import {Onboarding} from './screens/Onboarding';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Onboarding />
    </ThemeProvider>
  );
};

export default App;
