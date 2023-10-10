import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { Typography } from '@mui/material';
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
