import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Pago = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container mt-5">
			<div className=" col-md-12 mb-3 mb-md-0">
				{/* <div className="container text-center mt-5">
					<img
						src="https://www.flaticon.es/svg/vstatic/svg/747/747156.svg?token=exp=1619679608~hmac=27ae2efe06420b5ef491c011055d7ac5"
						width="100"
						height="100"
					/>
					<h1 className="display-4">Metodo de Pago</h1>
				</div> */}
				<div>
					<hr className="my-4" />
				</div>
			</div>
			<div>
				<div className="card-header bg-none text-center">
					<h2>Concluyamos la compra</h2>
				</div>

				<form id="form">
					<div className="card-body">
						<div className="col-md-12" id="alert" />

						<div className="row mt-3">
							<div className="col-md-4">
								<div className="form">
									<label className="form-label text-dark">Card #</label>
									<input
										type="number"
										id="card"
										className="form-control"
										placeholder="XXXXXXXXXXXXXXX"
									/>
									<p id="alertCard" />
								</div>
							</div>
							<div className="col-md-4">
								<div className="form">
									<label className="form-label text-dark">CVC #</label>
									<input type="number" id="cvc" className="form-control" placeholder="0000" />
									<p id="alertCvc" />
								</div>
							</div>
							<div className="col-md-4">
								<div className="form">
									<label htmlFor="amount" className="form-label">
										Amount
									</label>
									<div className="input-group">
										<div>
											<i className="fas fa-dollar-sign col" />
										</div>
										<input
											type="number"
											className="form-control disabled"
											id="amount"
											placeholder="Amount"
											readOnly
											value={store.total}
										/>
									</div>
									<p id="alertAmount" />
								</div>
							</div>
						</div>
						<div className="row mt-3">
							<div className="col-md-6">
								<div className="form">
									<label className="form-label text-dark">First Name</label>
									<input type="text" id="firstName" className="form-control" />
									<p id="alertName" />
								</div>
							</div>
							<div className="col-md-6">
								<div className="form">
									<label className="form-label text-dark">Last Name</label>
									<input type="text" id="lastName" className="form-control" />
									<p id="alertLastName" />
								</div>
							</div>
						</div>
						<div className="row mt-3">
							<div className="col-md-6">
								<div className="form">
									<label className="form-label text-dark">City</label>
									<input type="text" id="city" className="form-control" />
									<p id="alertCity" />
								</div>
							</div>
							<div className="col-md-3">
								<div className="form">
									<label className="form-label text-dark">State</label>
									<input type="text" id="state" className="form-control" placeholder="Pick a state" />
									<p id="alertState" />
								</div>
							</div>

							<div className="col-md-3">
								<div className="form">
									<label className="form-label text-dark">Postal Code</label>
									<input type="number" id="postalCode" className="form-control" />
									<p id="alertPostal" />
								</div>
							</div>
						</div>

						<div className="row mt-2">
							<div className="col-md-6">
								<label htmlFor="paymentCard" className="form-label">
									We accept:
								</label>
								<div className="col-lg-8 rounded-1 p-2 d-flex justify-content-between bg-secondary text-light">
									<div className="form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											name="inlineRadioOptions"
											id="inlineRadio1"
											value="option1"
											checked
										/>
										<i className="fab fa-cc-mastercard" />
									</div>
									<div className="form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											name="inlineRadioOptions"
											id="inlineRadio2"
											value="option2"
										/>
										<i className="fab fa-cc-visa" />
									</div>
									<div className="form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											name="inlineRadioOptions"
											id="inlineRadio3"
											value="option3"
										/>
										<i className="fab fa-cc-diners-club" />
									</div>
									<div className="form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											name="inlineRadioOptions"
											id="inlineRadio4"
											value="option4"
										/>
										<i className="fab fa-cc-amex" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="card-footer mt-5">
						<div className="row p-1">
							<div className="col-md-12">
								<button className="btn btn-primary float-end m-1" type="submit">
									Send
								</button>
								<button className="btn btn-secondary float-end m-1" type="button" onClick="resetForm()">
									Cancel
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
