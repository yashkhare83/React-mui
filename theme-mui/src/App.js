import logo from './logo.svg';
import './App.css';
import { Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <Typography variant="h3">Responsive h3</Typography>
    </div>
    </ThemeProvider>
  );
}

export default App;
