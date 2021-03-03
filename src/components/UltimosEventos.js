import React from 'react';
import SubLinhado from "./SubLinhado";
import Eventos from "./Eventos";

export default function UltimosEventos() {
    return (
        <div className="container-fluid p-0 flex-center flex-column" id="ultimos-eventos">
            <div className="container text-center">
                <SubLinhado id="eventos-heading" textColor="sec" textSize="56" lineColor="main" linePosition="center">
                    Últimos Eventos
                </SubLinhado>
            </div>

            <div className="container" id="carrossel">
                <div id="carrosselEventos" className="carousel slide" data-bs-ride="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <Eventos />
                        </div>
                        <div className="carousel-item">
                            <Eventos />
                        </div>
                    </div>
                    <button className="carousel-control-prev bg-main" type="button" data-bs-target="#carrosselEventos" data-bs-slide="prev">
                        <span className="fs-12 fas fa-chevron-left chevron" />
                    </button>
                    <button className="carousel-control-next bg-main" type="button" data-bs-target="#carrosselEventos" data-bs-slide="next">
                        <span className="fs-12 fas fa-chevron-right chevron" />
                    </button>
                </div>
            </div>
        </div>
    )
}