import React from 'react';
import HeadContent from "../src/components/HeadContent";
import MeuProposito from "../src/components/MeuProposito";
import Header from "../src/components/Header";
import Banner from "../src/components/Banner";
import PreviaPosts from "../src/components/PreviaPosts";
import BemVindo from "../src/components/BemVindo";
import UltimosEventos from "../src/components/UltimosEventos";
import QuemSouEu from "../src/components/QuemSouEu";
import Instagram from "../src/components/Instagram";
import FaleConosco from "../src/components/FaleConosco";
import Footer from "../src/components/Footer";


export default function Home() {
    return (
        <div className="container-fluid p-0">
            <HeadContent title={'Por Dentro da Vida'} />
            <Header />
            <Banner />
            <BemVindo />
            <PreviaPosts />
            <UltimosEventos />
            <MeuProposito />
            <QuemSouEu />
            <Instagram />
            <FaleConosco />
            <Footer />
        </div>
    )
}