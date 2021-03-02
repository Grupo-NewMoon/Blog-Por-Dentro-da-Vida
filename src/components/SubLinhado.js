import React from 'react';

export default function SubLinhado(props) {
    return (
        <h1 className={`
        pacifico-title
        d-inline-flex
        mb-3
        fs-${props.textSize}
        text-${props.textColor}
        justify-content-${props.linePosition}
        line-${props.lineColor}
        `}>
            {props.children}
        </h1>
    )
}