import * as React from 'react';

import RsvpPage from '~components/pages/Rsvp/Rsvp';

const RsvpRoute = (): JSX.Element => {
    return <RsvpPage />;
};

// Disable next.js Automatic Static Optimization to get runtime configuration for this page
RsvpRoute.getInitialProps = () => {
    return {};
};

export default RsvpRoute;
