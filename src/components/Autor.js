import React from 'react';

export default function Autor() {
    return (
        <div className="container" id="autor">
            <div className="row">
                <div className="col-9 autor">
                    <img src="/img/rafaela2.png" alt="Foto de Rafaela Gregório" className="foto-autor" />
                    <div>
                        <span className="nome-autor">Rafaela Gregório</span>
                        <span className="fs-14 d-block mb-3">Rafaela Gregório é mãe de 3 crianças e desde que seu primeiro filho nasceu se encantou pelo universo da educação por constatar o seu poder transformador!</span>
                        <div className="autor-icons">
                            <img src="/img/logosofia.png" alt="Logosofia"/>
                            <span className="fab fa-instagram" />
                            <span className="fab fa-facebook-f" />
                            <span className="fab fa-youtube" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}