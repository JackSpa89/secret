import * as React from 'react';
import Head from 'next/head';

import { AppMenu } from '~components/organism/AppMenu/AppMenu';
import { SignupForm } from '~components/organism/RsvpForm/RsvpForm';

import style from './Rsvp.module.scss';

export const RsvpPage: React.FC = () => {
    return (
        <div className={ style.rsvp }>
            <Head>
                <title>Rsvp</title>
            </Head>
            <AppMenu />
            <div className={ style.rsvp__wrapper }>
                <img alt="be our guest" className={ style.rsvp__image } />
                <SignupForm />
            </div>
        </div>
    );
};

export default RsvpPage;
