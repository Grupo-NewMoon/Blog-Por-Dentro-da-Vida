import React from 'react';
import Image from 'next/image';
import RedesSociais from "./RedesSociais";

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light w-100">
                <div className="container">
                    <Image src="/img/logo.png" alt="logo" width="183" height="75" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBar">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navBar">
                        <div className="nav navbar-nav justify-content-around">
                            <a href="#" className="nav-link d-flex align-items-center">INÍCIO</a>
                            <a href="#" className="nav-link d-flex align-items-center">QUEM SOU EU</a>
                            <a href="#" className="nav-link d-flex align-items-center">ARTIGOS E POSTS</a>
                            <a href="#" className="nav-link d-flex align-items-center">EVENTOS</a>
                            <a href="#" className="nav-link d-flex align-items-center">CONTATO</a>
                            <RedesSociais displayClass="d-flex d-lg-none" />
                        </div>
                    </div>
                    <RedesSociais displayClass="d-none d-lg-flex" />
                </div>
            </nav>
        </header>
    )
}