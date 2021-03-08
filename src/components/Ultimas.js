import React from 'react';
import SubLinhado from "./SubLinhado";
import Publicacao from "./Publicacao";

export default function Ultimas() {
    return (
        <div className="container-fluid p-0 position-relative">
            <div className="fundo-post-2" />
            <div className="container" id="ultimas-publicacoes">
                <div className="text-center">
                    <SubLinhado textColor="sec" textSize="56" linePosition="center" lineColor="main">
                        Últimas Publicações
                    </SubLinhado>
                </div>

                <div className="row mx-auto justify-content-between" id="ultimas">
                    <div className="col-1" />
                    <Publicacao dia="21" mes="setembro" ano="19" img="1">
                        Pensamentos Tóxicos
                    </Publicacao>
                    <Publicacao dia="17" mes="setembro" ano="19" img="2">
                        Exemplo do pai
                    </Publicacao>
                    <Publicacao dia="20" mes="agosto" ano="19" img="3">
                        O paralisador abraço do polvo
                    </Publicacao>
                    <div className="col-1" />
                </div>
            </div>
        </div>
    )
}