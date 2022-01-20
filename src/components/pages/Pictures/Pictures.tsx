import * as React from 'react';
import Head from 'next/head';

import { AppMenu } from '~components/organism/AppMenu/AppMenu';

export const PicturesPage: React.FC = () => {
    return (
        <div className="homepage">
            <Head>
                <title>Pictures</title>
            </Head>
            <AppMenu />
            <div className="content">
                Here will be the pictures
            </div>
        </div>

    );
};

export default PicturesPage;
