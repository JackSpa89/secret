import { AppContext, AppProps } from 'next/app';
import dynamic from 'next/dynamic';

import '~scss/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <Component { ...pageProps } />
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
