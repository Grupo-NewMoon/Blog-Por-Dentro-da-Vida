import React from 'react';

export default function FaleConosco() {
    return (
        <div className="container-fluid p-0 bg-white" id="fale-conosco">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4">
                        <div className="fale-conosco">
                            <h1 className="fale-conosco-title">Fale Conosco</h1>
                            <h2 className="fale-conosco-sub pb-4 mb-4">Vamos conversar? Entre em contato!</h2>
                        </div>
                        <p className="text-sec mb-3">Se quiser saber mais sobre qualquer um dos conteúdos publicados será uma alegria receber o seu contato! Entre em contato através do nosso endereço de email, ou pelo formulário.</p>
                        <span className="text-sec">E-mail: </span><span className="text-main">rafaela@pordentrodavida.com</span>
                    </div>
                    <div className="col-1" />
                    <div className="col-5">
                        <div className="row">
                            <div className="col-6">
                                <input className="fs-14 form-control text-input mb-4" type="text" placeholder="Nome" />
                            </div>
                            <div className="col-6">
                                <input className="fs-14 form-control text-input mb-4" type="text" placeholder="Sobrenome" />
                            </div>
                            <div className="col-12">
                                <input className="fs-14 form-control text-input mb-4" type="email" placeholder="E-mail" />
                            </div>
                            <div className="col-12">
                                <textarea className="fs-14 form-control mb-4" rows="3" placeholder="Mensagem" />
                            </div>
                        </div>
                        <button className="btn vamos-conversar border-radius-0">VAMOS CONVERSAR</button>
                    </div>
                </div>
            </div>
        </div>
    )
}