import * as React from 'react';
import { useEffect, useState } from 'react';
import Head from 'next/head';

import { Countdown } from '~components/molecules/countdown';
import { AppMenu } from '~components/organism/AppMenu/AppMenu';

import style from './Home.module.scss';

import { navigateToGuestList } from '~helper/_url';
import { isMobile } from '~helper/windowsize';

export const HomePage: React.FC = () => {
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        if (count === 5) {
            navigateToGuestList();
        }
    });

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
                <div className={ style.root__text } onClick={ () => setCount(count + 1) }>
                    Once upon a time...
                </div>
                <div className={ style.root__text } >
                    June 24th, 2023
                </div>
            </div>
            { isMobile() && (
                <div>
                    <Countdown />
                    <img className={ style.root__homeImg } alt='homeImg' src={ './home.jpeg' } />
                </div>
            )}
        </div>
    );
};

export default HomePage;
