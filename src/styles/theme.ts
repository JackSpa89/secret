import type {} from '@mui/lab/themeAugmentation';
import { Components, createTheme, } from '@mui/material';

const components: Components = {
    MuiButton: {
        styleOverrides: {
            textPrimary: {
                color: 'white'
            }
        },
    },
    MuiAppBar: {
        styleOverrides: {
            colorPrimary: {
                backgroundColor: 'purple',
            }
        },
    }
};

const theme = createTheme({
    components,
});

export default theme;
