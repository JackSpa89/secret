import * as React from 'react';

import DonationPage from '~components/pages/Donations/DonationPage';
import OurStoryPage from '~components/pages/OurStory/OurStory';

const DonationRoute = (): JSX.Element => {
    return <DonationPage />;
};

// Disable next.js Automatic Static Optimization to get runtime configuration for this page
DonationRoute.getInitialProps = () => {
    return {};
};

export default DonationRoute;
