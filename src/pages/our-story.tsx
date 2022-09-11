import * as React from 'react';

import OurStoryPage from '~components/pages/OurStory/OurStory';

const OurStoryRoute = (): JSX.Element => {
    return <OurStoryPage />;
};

// Disable next.js Automatic Static Optimization to get runtime configuration for this page
OurStoryRoute.getInitialProps = () => {
    return {};
};

export default OurStoryRoute;
