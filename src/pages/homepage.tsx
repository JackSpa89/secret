import * as React from 'react';
import Head from 'next/head';

export const HomePage: React.FC = () => {
    return (
        <div className="homepage">
            <Head>
                <title>Homepage</title>
            </Head>
            <div className="content">
                hallo
            </div>
        </div>

    );
};

export default HomePage;
