import * as React from 'react';

import HomePage from '~components/pages/Home/Home';

const HomeRoute = (): JSX.Element => {
    return <HomePage />;
};

// Disable next.js Automatic Static Optimization to get runtime configuration for this page
HomeRoute.getInitialProps = () => {
    return {};
};

export default HomeRoute;
