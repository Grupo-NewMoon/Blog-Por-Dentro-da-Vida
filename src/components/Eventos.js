import React from 'react';
import SubLinhado from "./SubLinhado";
import Evento from "./Evento";

export default function Eventos() {
    return (
        <div className="row justify-content-between" id="eventos-row">
            <Evento date="Agosto de 2020" live={true}>
                Maternidade em Tempos de Isolamento Social
            </Evento>

            <Evento date="Junho de 2020" live={false}>
                As Bases da Educação – Uma Reflexão
            </Evento>

            <Evento date="Junho de 2020" live={true}>
                Maternidade em Tempos de Isolamento Social
            </Evento>
        </div>
    )
}