import React from 'react';

export default function BemVindo() {
    return (
        <div className="container bg-white">
            <div className="bem-vindo">
                <div className="greeting">
                    <span className="greeting-1 d-block">Seja muito bem-vindo!</span>
                    <span className="greeting-2">Fico feliz com sua presença aqui.</span>
                </div>
                <div className="greeting">
                    <span>
                        Por dentro da vida é um mergulho no nosso mundo interno. <br />
                        É enxergar o invisível, é correspondência, gratidão, força e amor!
                    </span>
                </div>
                <div>
                    <button className="btn vamos-conversar border-radius-0">VAMOS CONVERSAR</button>
                </div>
            </div>
        </div>
    )
}