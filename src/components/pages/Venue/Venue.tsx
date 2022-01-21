import * as React from 'react';
import Head from 'next/head';

import { AppMenu } from '~components/organism/AppMenu/AppMenu';

import style from './Venue.module.scss';

export const VenuePage: React.FC = () => {
    return (
        <div className="venue">
            <Head>
                <title>Venue</title>
            </Head>
            <AppMenu />
            <div className={ style.root__backgroundImage }>
            </div>
        </div>
    );
};

export default VenuePage;
