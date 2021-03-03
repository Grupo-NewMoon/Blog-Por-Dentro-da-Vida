import React from 'react';
import Image from 'next/image';
import SubLinhado from "./SubLinhado";

export default function PreviaPosts() {
    return (
        <section className="container">
            <div className="row">
                <div className="col-9">
                    <div className="row">
                        <div className="col-8 mb-4">
                            <div className="overflow-hidden">
                                <img className="prev-item" src="/_next/image?url=%2Fimg%2Fprevia-trem.png&w=1200&q=75" alt="Prévia Trem"/>
                            </div>
                        </div>
                        <div className="col-4 mb-4">
                            <div className="overflow-hidden">
                                <img className="prev-item" src="/_next/image?url=%2Fimg%2Fprevia-ferias.png&w=1200&q=75" alt="Prévia Trem"/>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="bg-main h-100 flex-center flex-column">
                                <span className="linha-1">Veja mais de</span>
                                <span className="linha-2">100</span>
                                <span className="linha-3">Artigos e posts</span>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="overflow-hidden">
                                <img className="prev-item" src="/_next/image?url=%2Fimg%2Fprevia-paralisador.png&w=1200&q=75" alt="Prévia Trem"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3 d-flex align-content-between flex-wrap">
                    <SubLinhado textSize="48" textColor="sec" linePosition="start" lineColor="main">
                        Conteúdos
                    </SubLinhado>
                    <ul className="lista-conteudo ps-0 mb-0">
                        <li><a href="#" className="conteudo-link">Os problemas do mundo não serão resolvidos matando os vilões</a></li>
                        <li><a href="#" className="conteudo-link">E agora, quem poderá nos defender?</a></li>
                        <li><a href="#" className="conteudo-link">Super-heróis e você, o que tem a ver?</a></li>
                        <li><a href="#" className="conteudo-link">O exemplo do pai</a></li>
                        <li><a href="#" className="conteudo-link">O trem da vida não para pra você subir</a></li>
                        <li><a href="#" className="conteudo-link">Todo mundo devia ser igual aos Trolls</a></li>
                        <li><a href="#" className="conteudo-link">Ontem e hoje</a></li>
                        <li><a href="#" className="conteudo-link">Como se livrar das garras do polvo</a></li>
                    </ul>
                    <SubLinhado textSize="27" textColor="sec" linePosition="start" lineColor="main">
                        Ver tudo
                    </SubLinhado>
                </div>
            </div>

        </section>
    )
}