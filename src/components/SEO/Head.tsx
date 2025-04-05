import React from 'react';
import Head from 'next/head';

const SEOHead: React.FC<{ title?: string; description?: string; canonicalUrl?: string; ogImage?: string }> = ({
    title = 'Radish - Bet on your favorite creators and earn rewards',
    description = 'Decentralized prediction markets for creator growth metrics.',
    canonicalUrl = 'https://radish-markets.vercel.app',
    ogImage = '/logo.png',
}) => (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <link rel="icon" href={ogImage} />
    </Head>
);

export default SEOHead;
