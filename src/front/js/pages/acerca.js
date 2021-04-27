import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/acerca.scss";

export const Acerca = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container text-center mt-5">
			<div className=" col-md-12 mb-3 mb-md-0">
				<div className="container text-center mt-5">
					<img
						src="https://es.seaicons.com/wp-content/uploads/2015/06/drink-3-icon.png"
						width="100"
						height="100"
					/>
					<h1 className="display-4">Acerca de nosotros</h1>
				</div>
				<div>
					<hr className="my-4" />
				</div>
			</div>
			<section className="page-section " id="team">
				<div className="container">
					<div className="text-center">
						<h2 className="section-heading text-uppercase">Equipo</h2>
						<p className="section-subheading text-muted">
							<em>Colaboradores y miembros del proyecto final 4geeks academy Catering services web</em>
						</p>
						<div className="col-md-12 mb-3 mb-md-0" />
					</div>
					<div className="row">
						<div className="col-lg-4">
							<div className="team-member">
								<img
									className="mx-auto rounded-circle"
									src="https://ca.slack-edge.com/T0BFXMWMV-U01KUR63ZJ5-246a1a3d9811-512"
									alt="..."
									width="150"
									height="150"
								/>
								<h4>David Bermúdez</h4>
								<p className="text-muted">Lead Designer</p>
								<a className="btn btn-dark btn-social mx-2" href="#!">
									<i className="fab fa-twitter" />
								</a>
								<a className="btn btn-dark btn-social mx-2" href="#!">
									<i className="fab fa-facebook-f" />
								</a>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="team-member">
								<img
									className="mx-auto rounded-circle"
									src="https://ca.slack-edge.com/T0BFXMWMV-U01KG6N3B5G-2980225e416a-512"
									alt="..."
									width="150"
									height="150"
								/>
								<h4>Jobanny Zúñiga</h4>
								<p className="text-muted">Lead Designer</p>
								<a className="btn btn-dark btn-social mx-2" href="#!">
									<i className="fab fa-twitter" />
								</a>
								<a className="btn btn-dark btn-social mx-2" href="#!">
									<i className="fab fa-facebook-f" />
								</a>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="team-member">
								<img
									className="mx-auto rounded-circle"
									src="https://ca.slack-edge.com/T0BFXMWMV-U01L6216S56-6a2ba6e0f2c3-512"
									alt="..."
									width="100"
									height="100"
								/>
								<h4>Sharmey</h4>
								<p className="text-muted">Lead Designer</p>
								<a className="btn btn-dark btn-social mx-2" href="#!">
									<i className="fab fa-twitter" />
								</a>
								<a className="btn btn-dark btn-social mx-2" href="#!">
									<i className="fab fa-facebook-f" />
								</a>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="team-member">
								<img
									className="mx-auto rounded-circle"
									src="https://ca.slack-edge.com/T0BFXMWMV-U01KD3ZE81K-bca4874285dd-512"
									alt="..."
									width="150"
									height="150"
								/>
								<p className="text-muted">Lead Designer</p>
								<a className="btn btn-dark btn-social mx-2" href="#!">
									<i className="fab fa-twitter" />
								</a>
								<a className="btn btn-dark btn-social mx-2" href="#!">
									<i className="fab fa-facebook-f" />
								</a>
								<h4>Emanuel Burgalin</h4>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-8 mx-auto text-center">
							<p className="large text-muted">
								Colaboradores, gracias por su tiempo en la creacion de CaterigServices{" "}
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
