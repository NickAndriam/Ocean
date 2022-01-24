import React from 'react';
import Head from 'next/head';

export default function AppHead({ title = "Ocean" }) {
    return (
        <Head>
            <title>{title}</title>
        </Head>)
        ;
}
