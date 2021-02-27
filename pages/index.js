import React from 'react';
import Head from 'next/head'
import Header from "../src/components/Header";

export default function Home() {
    return (
        <div className="container-fluid p-0">
            <Head>
                <title>Por Dentro da Vida</title>
                <link rel="icon" href="/img/favicon.png" />
                <link rel="apple-touch-icon" href="favicon.png" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css"/>
                <link rel="stylesheet" href="/css/main.css" />
                <link rel="stylesheet" href="/css/brands.min.css" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
            </Head>

            <Header />
        </div>
    )
}