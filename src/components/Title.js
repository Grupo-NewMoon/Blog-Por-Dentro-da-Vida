import React from 'react';
import Image from 'next/image'

export default function Title() {
    return (
        <div className="container-fluid p-0 fundo">
            <div className="container d-flex justify-content-center flex-column">
                <h1 className="post-heading">O trem da vida não para pra você subir</h1>
                <div className="flex-center" id="post-date-row">
                    <img src="/_next/image?url=%2Fimg%2Ficone-calendario.svg&w=1200&q=100" alt="cale" className="calendar-icon" />
                    <span className="post-date ps-2">4 de Setembro de 2019</span>
                </div>
                <img className="destaque-img" src="/img/destaque-post.png" alt="Destaque" />
            </div>
        </div>
    )
}