import * as React from 'react';
import Head from 'next/head';

import { AppMenu } from '~components/organism/AppMenu/AppMenu';

import style from './Home.module.scss';

export const HomePage: React.FC = () => {
    return (
        <div className={ style.root }>
            <Head>
                <title>Homepage</title>
            </Head>
            <AppMenu />
            <div className={ style.root__backgroundImage }>
                <div className={ style.root__names }>
                    Angela & Peter
                </div>
                <div className={ style.root__text }>
                    Once upon a time...
                </div>
            </div>
        </div>
    );
};

export default HomePage;
