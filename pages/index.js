import React from 'react';
import Header from "../src/components/Header";
import Banner from "../src/components/Banner";
import HeadContent from "../src/components/HeadContent";

export default function Home() {
    return (
        <div className="container-fluid p-0">
            <HeadContent title={'Por Dentro da Vida'} />

            <Header />
            <Banner />
        </div>
    )
}