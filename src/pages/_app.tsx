import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { AppContext, AppProps } from 'next/app';
import dynamic from 'next/dynamic';

import theme from '~styles/theme';
import '~styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={ theme }>
                <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script>
                <Component { ...pageProps } />
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

// Capture errors that happen during a page's getInitialProps.
// This will work on both client and server sides.
MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
    if (!Component.getInitialProps) {
        return {};
    }

    const pageProps = await Component.getInitialProps(ctx);

    return { pageProps };
};

export default dynamic(() => Promise.resolve(MyApp));
