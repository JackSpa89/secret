import * as React from 'react';
import Head from 'next/head';

import { AppMenu } from '~components/organism/AppMenu/AppMenu';

export const RsvpPage: React.FC = () => {
    return (
        <div className="rsvp">
            <Head>
                <title>Rsvp</title>
            </Head>
            <AppMenu />
            <div>Rsvp</div>
        </div>
    );
};

export default RsvpPage;
