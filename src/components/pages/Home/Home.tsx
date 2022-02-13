import * as React from 'react';
import Head from 'next/head';

import { Countdown } from '~components/molecules/countdown';
import { AppMenu } from '~components/organism/AppMenu/AppMenu';

import style from './Home.module.scss';

import { isMobile } from '~helper/windowsize';

export const HomePage: React.FC = () => {
    return (
        <div className={ style.root }>
            <Head>
                <title>Homepage</title>
                <link rel="icon" type="image/png" href="https://thumbs.dreamstime.com/b/wedding-rings-vector-icon-black-white-background-110459020.jpg" sizes="800x800" />
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
            { isMobile() && <Countdown />}
        </div>
    );
};

export default HomePage;
