import * as React from 'react';
import Head from 'next/head';

import { Chapter } from '~components/atoms/Chapter/Chapter';
import { ImageText } from '~components/atoms/ImageText/ImageText';
import { AppMenu } from '~components/organism/AppMenu/AppMenu';

import style from './OurStory.module.scss';

export const OurStoryPage: React.FC = () => {
    return (
        <div className={ style.root }>
            <Head>
                <title>Our Story</title>
            </Head>
            <AppMenu />
            <div className={ style.root__title }>How we met</div>
            <Chapter chapterNumber={ 1 } text={ 'Once upon a time...' } />
            <ImageText imgSrc={ '/img/firstParty.jpeg' } text={ 'Text about first party' } />
            <Chapter chapterNumber={ 2 } text={ 'Moving in together' } />
            <ImageText imgSrc={ '/img/movingIn.jpeg' } text={ 'Text about moving in' } />
            <Chapter chapterNumber={ 3 } text={ 'First vacation' } />
            <ImageText imgSrc={ '/img/firstVacation.jpeg' } text={ 'Text about first vacation' } />
        </div>
    );
};

export default OurStoryPage;
