import React from 'react';

export default function Instagram() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <img src="/_next/image?url=%2Fimg%2Finsta-1.png&w=3840&q=100" alt="Instagram Post"/>
                    <img src="/_next/image?url=%2Fimg%2Finsta-2.png&w=3840&q=100" alt="Instagram Post"/>
                    <img src="/_next/image?url=%2Fimg%2Finsta-3.png&w=3840&q=100" alt="Instagram Post"/>
                    <img src="/_next/image?url=%2Fimg%2Finsta-4.png&w=3840&q=100" alt="Instagram Post"/>
                    <div className="siga-no-insta flex-center">
                        <div className="flex-center flex-column">
                            <span className="fab fa-instagram text-white logo-insta" />
                            <span className="text-white fs-12">Me siga no Instagram</span>
                            <strong className="text-white">@por.dentro.da.vida</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}