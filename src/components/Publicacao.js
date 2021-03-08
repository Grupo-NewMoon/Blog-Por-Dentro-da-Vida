import React from 'react';
import SubLinhado from "./SubLinhado";

export default function Publicacao(props) {
    return (
        <div className="col-3">
            <img src={`/img/ultimas-${props.img}.png`} alt="" className="img-fluid pb-3" />
            <div className="ultimas-body">
                <div className="d-inline-flex align-items-center pb-3">
                    <span className="fas fa-calendar-alt pe-2" />
                    <span>{`${props.dia} de ${props.mes} de 20${props.ano}`}</span>
                </div>
                <h2 className="ultimas-title">{props.children}</h2>
                <SubLinhado id="ver-mais" textSize="27" textColor="sec" linePosition="start" lineColor="main">
                    ver mais
                </SubLinhado>
            </div>
        </div>
    )
}