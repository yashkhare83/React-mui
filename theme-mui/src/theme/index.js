import { createTheme } from '@mui/material/styles';

export default createTheme({
    palette: {
        info: {
            main: '#D8D8D8',
        },
    },
    typography: {
        fontFamily: 'Lato sans-serif',
        fontWeight: '600',
        h1: {
            fontWeight: 500,
            fontSize: 35,
            letterSpacing: '-0.24px',
          },
          h2: {
            fontWeight: 500,
            fontSize: 29,
            letterSpacing: '-0.24px',
          },
          h3: {
            fontWeight: 500,
            fontSize: 24,
            letterSpacing: '-0.06px',
            color:'#435635'
          },
          h4: {
            fontWeight: 500,
            fontSize: 20,
            letterSpacing: '-0.06px',
          },
          h5: {
            fontWeight: 500,
            fontSize: 16,
            letterSpacing: '-0.05px',
          },
          h6: {
            fontWeight: 500,
            fontSize: 14,
            letterSpacing: '-0.05px',
          },
          overline: {
            fontWeight: 500,
          },
    },
    TablePagination: {
        rowsPerPage: {
            display: 'flex',
            border: '1px solid black',
        },
    },
    FormLabel: {
        fontSize: '2rem',
    },
});
