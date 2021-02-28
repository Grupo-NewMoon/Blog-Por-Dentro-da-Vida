import React from 'react';

export default function RedesSociais(props) {
    return (
        <div className={`${props.displayClass} justify-content-between redes-sociais`}>
            <div className="rounded-circle social flex-center cursor-pointer">
                <a href="https://instagram.com" className="fab fa-instagram text-white text-decoration-none" />
            </div>
            <div className="rounded-circle social flex-center cursor-pointer">
                <a href="https://facebook.com" className="fab fa-facebook-f fs-12 text-white text-decoration-none" />
            </div>
            <div className="rounded-circle social flex-center cursor-pointer">
                <a href="https://youtube.com" className="fab fa-youtube fs-12 text-white text-decoration-none" />
            </div>
        </div>
    )
}