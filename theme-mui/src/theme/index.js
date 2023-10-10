import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  breakpoints: {
            values: {
              xs: 0,
              sm: 600,
              md: 900,
              lg: 1200,
              xl: 1536,
            },
          },
       
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
                color:'#435635',
                // [theme.breakpoints.down('md')]: {
                //     fontSize:'13',
                //     color:'red',
                //   },
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
  // You can customize other theme options here
});

theme.typography.h3 = {
  fontSize: '1.5rem',
  color:'red',
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
    color:'blue'
  },
};
export default theme;