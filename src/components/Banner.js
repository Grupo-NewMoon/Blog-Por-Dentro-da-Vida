import React from 'react';
import Image from 'next/image';

export default function Banner() {
    return (
        <div className="container-fluid p-0 position-relative" id="banner">
            {/*<Image src="/img/banner.png" alt="Banner" className="banner-img" layout="fill" objectFit="cover" />*/}
            <img src="/_next/image?url=%2Fimg%2Fbanner.png&w=3840&q=100" alt="Banner" className="banner-img" />
            <section className="container banner-section">
                <div className="row w-100">
                    <div className="col-6" />
                    <div className="col-6">
                        <div className="d-flex">
                            <span className="banner-text">Há muito <br /> a conhecer <br /> por dentro da</span>
                            <span className="cervanttis d-block">Vida</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}