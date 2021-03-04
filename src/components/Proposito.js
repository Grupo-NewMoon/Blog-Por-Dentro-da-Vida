import React from 'react';

export default function Proposito(props) {
    return (
        <div className="col-4">
            <div className="d-flex align-items-center mb-4">
                <img src={`/_next/image?url=%2Fimg%2Ficone-${props.source}.svg&w=128&q=75`} alt={props.alt} />
                <h2 className="ms-3 mb-0 proposito-titulo">{props.title}</h2>
            </div>
            <p className="proposito-texto text-white mb-0">{props.children}</p>
        </div>
    )
}