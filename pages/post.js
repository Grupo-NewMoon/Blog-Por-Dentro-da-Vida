import React from 'react';
import HeadContent from "../src/components/HeadContent";
import Header from "../src/components/Header";
import Title from "../src/components/Title";
import Texto from "../src/components/Texto";
import Compartilhe from "../src/components/Compartilhe";
import Autor from "../src/components/Autor";
import Ultimas from "../src/components/Ultimas";
import Instagram from "../src/components/Instagram";
import FaleConosco from "../src/components/FaleConosco";
import Footer from "../src/components/Footer";

export default function Post() {
    return (
        <div className="container-fluid p-0">
            <HeadContent />
            <Header />
            <Title />
            <Texto />
            <Compartilhe />
            <Autor />
            <Ultimas />
            <Instagram />
            <FaleConosco />
            <Footer />
        </div>
    )
}