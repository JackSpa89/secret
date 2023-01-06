import * as React from 'react';
import { Link, Typography } from '@mui/material';
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
                <div className={ style.rsvp__intro }>Please RSVP by February 15th, 2023!</div>
                <div className={ style.rsvp__imageWrapper }>
                    { <img className={ style.rsvp__image } alt="be our guest mobile" src={ './beOurGuestMobile.jpeg' } />}
                </div>
                <div className={ style.rsvp__venue }>Location:</div>
                <div className={ style.rsvp__venue }>Buhl Mansion Guesthouse & Spa</div>
                <div className={ style.rsvp__venue }>422 E. State Street</div>
                <div className={ style.rsvp__venue }>Sharon, PA 16146</div>
                <Typography align='center'>
                    <Link href="https://www.buhlmansion.com/" className={ style.rsvp__venue }>Link to the Buhl Mansion Website</Link>
                </Typography>
                <div className={ style.rsvp__venue }>The ceremony will start promptly at 4pm.</div>
                <div className={ style.rsvp__venue }>Dress Code:</div>
                <div className={ style.rsvp__venue }>Summer Wedding Attire / Favorite Disney Character</div>
                <SignupForm />
            </div>
        </div>
    );
};

export default RsvpPage;
