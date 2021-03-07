import React from 'react';
import HeadContent from "../src/components/HeadContent";
import Header from "../src/components/Header";
import Title from "../src/components/Title";
import Texto from "../src/components/Texto";

export default function Post() {
    return (
        <div className="container-fluid p-0">
            <HeadContent />
            <Header />
            <Title />
            <Texto />
        </div>
    )
}