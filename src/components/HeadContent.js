import React from 'react';
import Head from 'next/head'

export default function HeadContent(props) {
    return (
        <Head>
            <title>{props.title}</title>
            <link rel="icon" href="/img/favicon.png" />
            <link rel="apple-touch-icon" href="favicon.png" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css"/>
            <link rel="stylesheet" href="/css/main.css" />
            <link rel="stylesheet" href="/css/fonts.min.css" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js" />
        </Head>
    )
}