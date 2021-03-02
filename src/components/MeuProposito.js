import React from 'react';
import Proposito from "./Proposito";
import SubLinhado from "./SubLinhado";

export default function MeuProposito() {
    return (
        <div className="container-fluid p-0 bg-main" id="meu-proposito">
            <div className="container">
                <div className="text-center mb-3">
                    <SubLinhado textSize="56" textColor="white" linePosition="center" lineColor="red">
                        Meu Propósito
                    </SubLinhado>
                </div>
                <div className="row pt-2">
                    <Proposito source="vida" alt="Ícone Vida" title="Vida">
                        O que é a vida? O que estamos fazendo aqui? Qual é o grande objetivo da existência humana na
                        Terra?
                    </Proposito>
                    <Proposito source="edu" alt="Ícone Educação" title="Educação">
                        Qual a minha responsabilidade em relação à educação de qualquer criança que esteja sob os meus
                        cuidados? Como o ato de educar se relaciona com a humanidade?
                    </Proposito>
                    <Proposito source="amor" alt="Ícone Amor" title="Amor">
                        Qual a importância do amor na educação? Consigo sentir o amor? Como esse sentimento tem
                        orientado minhas ações?
                    </Proposito>
                </div>
            </div>
        </div>
    )
}