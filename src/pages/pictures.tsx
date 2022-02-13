import * as React from 'react';

import PicturesPage from '~components/pages/Pictures/Pictures';

const PicturesRoute = (): JSX.Element => {
    return <PicturesPage />;
};

// Disable next.js Automatic Static Optimization to get runtime configuration for this page
PicturesRoute.getInitialProps = () => {
    return {};
};

export default PicturesRoute;
