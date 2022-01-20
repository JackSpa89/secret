import * as React from 'react';
import Head from 'next/head';

import { AppMenu } from '~components/organism/AppMenu/AppMenu';

export const VenuePage: React.FC = () => {
    return (
        <div className="venue">
            <Head>
                <title>Venue</title>
            </Head>
            <AppMenu />
            <div>Some information about the venue</div>
        </div>
    );
};

export default VenuePage;
