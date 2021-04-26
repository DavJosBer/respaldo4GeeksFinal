import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Contacto = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container text-center mt-5">
			<section className="signup-section" id="signup">
				<div className="container">
					<div className="row">
						<div className="col-md-10 col-lg-8 mx-auto text-center">
							<i className="far fa-paper-plane fa-2x mb-2 text-dark" />
							<h2 className="text-dark mb-5">contáctanos</h2>
							<form className="form-inline d-flex">
								<input
									className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
									id="inputEmail"
									type="email"
									placeholder="Enter email address..."
								/>
								<button className="btn btn-primary mx-auto" type="submit">
									Enviar
								</button>
							</form>
						</div>
					</div>
				</div>
				<div />
			</section>
			<section className="contact-section bg-black">
				<div className="container">
					<div className="row">
						<div className="col-md-4 mb-3 mb-md-0">
							<div className="container text-center mt-5">
								<img
									src="https://images.vexels.com/media/users/3/157570/isolated/preview/4b39b362c76ea5a00de62f8ff839b5ed-icono-de-tel--fono-inteligente-simple-by-vexels.png"
									width="100"
									height="100"
								/>
							</div>
							<h4 className="text-uppercase m-0 text-dark">Llamanos</h4>
							<hr className="my-4" />
							<div className="small text-black-50">
								Llámenos sin costo desde su celular al operador 800-000-09378
							</div>
						</div>
						<div className="col-md-4 mb-3 mb-md-0">
							<div className="container text-center mt-5">
								<img
									src="https://img.icons8.com/small/452/secured-letter.png"
									width="100"
									height="100"
								/>
							</div>
							<h4 className="text-uppercase m-0 text-dark">Email</h4>
							<hr className="my-4" />
							<div className="small text-black-50">
								<a href="#!">CateringServices.com</a>
							</div>
						</div>
						<div className="col-md-4 mb-3 mb-md-0">
							<div className="container text-center mt-5">
								<img src="https://img.icons8.com/small/452/whatsapp.png" width="100" height="100" />
							</div>
							<h4 className="text-uppercase m-0 text-dark">WhatsApp</h4>
							<hr className="my-4" />
							<div className="small text-black-50">
								Contáctenos vía WhatsApp al +506 9081-1199, atención las 24 horas.
							</div>
						</div>
					</div>
					<div className="social d-flex justify-content-center">
						<a className="mx-2" href="#!">
							<i className="fab fa-twitter" />
						</a>
						<a className="mx-2" href="#!">
							<i className="fab fa-facebook-f" />
						</a>
						<a className="mx-2" href="#!">
							<i className="fab fa-github" />
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};
