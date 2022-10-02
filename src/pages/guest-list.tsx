import * as React from 'react';

import GuestListPage from '~components/pages/GuestList/GuestList';

const GuestListRoute = (): JSX.Element => {
    return <GuestListPage />;
};

// Disable next.js Automatic Static Optimization to get runtime configuration for this page
GuestListRoute.getInitialProps = () => {
    return {};
};

export default GuestListRoute;
