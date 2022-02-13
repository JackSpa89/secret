import * as React from 'react';

import VenuePage from '~components/pages/Venue/Venue';

const VenueRoute = (): JSX.Element => {
    return <VenuePage />;
};

// Disable next.js Automatic Static Optimization to get runtime configuration for this page
VenueRoute.getInitialProps = () => {
    return {};
};

export default VenueRoute;
