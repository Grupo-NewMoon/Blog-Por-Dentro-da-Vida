import React from 'react';

export default function SocialBtn(props) {
    return (
        <button className={`btn social-btn ${props.icon}-btn border-radius-0`}>
            <span className={`fab fa-${props.icon} pe-2`} />
            <span>{props.children}</span>
        </button>
    )
}