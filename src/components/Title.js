import React from 'react';
import Image from 'next/image'

export default function Title() {
    return (
        <div className="container-fluid p-0 position-relative">
            <div className="fundo-post" />
            <div className="container d-flex justify-content-center flex-column">
                <h1 className="post-heading">O trem da vida não para pra você subir</h1>
                <div className="flex-center" id="post-date-row">
                    <span className="fas fa-calendar-alt text-main px-2" />
                    <span className="post-date">4 de Setembro de 2019</span>
                </div>
                <img className="destaque-img" src="/img/destaque-post.png" alt="Destaque" />
            </div>
        </div>
    )
}