import React from 'react';

export default function Instagram() {
    return (
        <div className="container-fluid p-0">
            <div className="container" id="insta-container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <a href="#" className="insta-link">
                            <img className="insta-img" src="/img/insta-1.png" alt="Instagram Post"/>
                            <div className="insta-img-overlay">
                                <div className="insta-text-overlay">
                                    <span className="">Ver post &nbsp;</span>
                                    <span className="seta">&rarr;</span>
                                </div>
                            </div>
                        </a>
                        <a href="#" className="insta-link">
                            <img className="insta-img" src="/img/insta-2.jpg" alt="Instagram Post"/>
                            <div className="insta-img-overlay">
                                <div className="insta-text-overlay">
                                    <span className="">Ver post &nbsp;</span>
                                    <span className="seta">&rarr;</span>
                                </div>
                            </div>
                        </a>
                        <a href="#" className="insta-link">
                            <img className="insta-img" src="/img/insta-3.png" alt="Instagram Post"/>
                            <div className="insta-img-overlay">
                                <div className="insta-text-overlay">
                                    <span className="">Ver post &nbsp;</span>
                                    <span className="seta">&rarr;</span>
                                </div>
                            </div>
                        </a>
                        <a href="#" className="insta-link">
                            <img className="insta-img" src="/img/insta-4.png" alt="Instagram Post"/>
                            <div className="insta-img-overlay">
                                <div className="insta-text-overlay">
                                    <span className="">Ver post &nbsp;</span>
                                    <span className="seta">&rarr;</span>
                                </div>
                            </div>
                        </a>
                        <div className="siga-no-insta flex-center">
                            <div className="flex-center flex-column">
                                <span className="fab fa-instagram text-white logo-insta" />
                                <span className="text-white fs-12">Me siga no Instagram</span>
                                <a href="https://www.instagram.com/por.dentro.da.vida/" className="text-white">@por.dentro.da.vida</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}