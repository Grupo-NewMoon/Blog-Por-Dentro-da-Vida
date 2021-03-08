import React from 'react';
import SubLinhado from "./SubLinhado";

export default function QuemSouEu() {
    return (
        <div className="container" id="quem-sou-eu">
            <div className="row">
                <div className="col-4">
                    <SubLinhado textColor="sec" textSize="56" lineColor="main" linePosition="start">
                        Quem sou Eu
                    </SubLinhado>
                    <div className="foto-rafaela">
                        <img src="/_next/image?url=%2Fimg%2Frafaela.png&w=3840&q=100" alt="Rafaela Gregório" className="photo"/>
                        <div className="foto-footer flex-center">
                            <span>Rafaela Gregório</span>
                        </div>
                    </div>
                </div>
                <div className="col-1" />
                <div className="col-7 d-flex align-items-center">
                    <div className="pt-5">
                        <p>Desde que meu primeiro filho nasceu, em 2013, venho experimentando o poder transformador que a educação pode exercer na vida de alguém. Agora, já com 3 filhos, comprovo diariamente como podemos colaborar efetivamente na formação integral da criança por meio do nosso exemplo e da nossa orientação firme, segura e serena.</p>
                        <p>Estudante de Logosofia, aplico a Pedagogia Logosófica na educação de mim mesma e das crianças e os resultados e benefícios que venho alcançando com essa prática são muito especiais. Daí surgiu a ideia de criar o “por dentro de vida”, para compartilhar com muitos tudo o que venho aprendendo e descobrindo nessa grande jornada que é ser humano. Esse espaço é também um grande exercício de gratidão e de correspondência a todo o bem que recebo da ciência e pedagogia logosófica!</p>
                        <p>Vocês vão encontrar por aqui muitas reflexões e experiências relacionadas à educação dos filhos, mas vou compartilhar também os desafios e as descobertas que vivo em relação à minha própria vida, pois eu também estou aprendendo muito enquanto busco ensinar. E não seria esse um dos grandes propósitos da maternidade?</p>
                        <p>Espero que esse conteúdo lhe inspire a olhar para dentro para encontrar todas as maravilhas com as quais somos constituídos!</p>
                        <p>Há muito o que conhecer por dentro da vida! Vamos?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}