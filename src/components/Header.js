import React from 'react';
import Image from 'next/image';

export default function Header() {
    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
                <div className="container d-flex justify-content-between">
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
                        </div>
                    </div>
                    <div className="d-none d-lg-flex justify-content-between redes-sociais">
                        <div className="rounded-circle social flex-center cursor-pointer">
                            <a href="https://instagram.com" className="fab fa-instagram text-white text-decoration-none" />
                        </div>
                        <div className="rounded-circle social flex-center cursor-pointer">
                            <a href="https://facebook.com" className="fab fa-facebook-f fs-12 text-white text-decoration-none" />
                        </div>
                        <div className="rounded-circle social flex-center cursor-pointer">
                            <a href="https://youtube.com" className="fab fa-youtube fs-12 text-white text-decoration-none" />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}