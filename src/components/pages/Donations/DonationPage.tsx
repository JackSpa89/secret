import * as React from 'react';
import { useState } from 'react';
import { Link, Typography } from '@mui/material';
import Head from 'next/head';

import { AppMenu } from '~components/organism/AppMenu/AppMenu';

import style from './DonationPage.module.scss';

export const DonationPage: React.FC = () => {
    const [ amount, setAmount ] = useState('');
    const [ comment, setComment ] = useState('');

    function handlePayment () {
        window.location.href = 'https://paypal.me/gruvermumberwedding?country.x=DE&locale.x=de_DE';
    }

    function handleCommentChange (e) {
        setComment(e.target.value);
    }

    return (
        <div >
            <Head>
                <title>Donation Page</title>
            </Head>
            <AppMenu />
            <div className={ style.donationPage }>
                <h2 className={ style.donationPage__title }>Donate to our Disney-themed Wedding!</h2>
                <img className={ style.donationPage__image } src={ 'https://cdn0.weddingwire.ca/usr/6/7/3/4/cfb_2x_3176.jpg' } />
                <button onClick={ handlePayment } style={{ display: 'flex', alignItems: 'center', padding: '10px 20px', fontSize: '1.2rem' }}>
                    <img src={ 'https://i0.wp.com/blog.subhub.com/wp-content/uploads/2021/02/Paypal-Logo.jpg?ssl=1' } alt="PayPal Logo" style={{ width: 30, marginRight: 10 }} />
                        Pay with PayPal
                </button>
            </div>
        </div>
    );
};

export default DonationPage;
