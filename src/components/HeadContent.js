import React from 'react';
import Head from 'next/head'

export default function HeadContent(props) {
    return (
        <Head>
            <title>{props.title}</title>
            <link rel="icon" href="/img/favicon.png" />
            <link rel="apple-touch-icon" href="favicon.png" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="/css/main.css" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.typekit.net/din3oeo.css" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js" />
            <script src="https://kit.fontawesome.com/862ff8d067.js" crossOrigin="anonymous" />
        </Head>
    )
}