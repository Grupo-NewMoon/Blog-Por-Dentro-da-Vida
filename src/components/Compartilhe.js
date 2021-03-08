import React from 'react';
import SocialBtn from "./SocialBtn";

export default function Compartilhe() {
    return (
        <div className="container">
            <span className="gostou">Gostou do texto?</span>
            <span className="compartilhe">Compartilhe nas Redes Sociais:</span>
            <SocialBtn icon="facebook-square">FACEBOOK</SocialBtn>
            <SocialBtn icon="twitter">TWITTER</SocialBtn>
            <SocialBtn icon="linkedin">LINKEDIN</SocialBtn>
        </div>
    )
}