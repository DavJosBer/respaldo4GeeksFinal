import React, { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, Button } from "react-bootstrap";

export const Articles = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	console.log(store.favorites);

	let articles = store.favorites;
	let total = [];
	let suma = 0;
	const handleSubmit = suma => {
		store.total = suma;
	};
	return (
		<>
			<div className="container">
				<div className="row">
					{articles.map((item, index) => (
						<Card className="col-4" style={{ width: "18rem" }} key={index}>
							<Card.Body>
								<Card.Title className="text-success">
									<u>{item.name}</u>
								</Card.Title>
								<Card.Subtitle className="mb-2 text-muted">
									Cantidad de personas: {item.cantidad}
								</Card.Subtitle>
								<Card.Subtitle className="mb-2 text-danger">
									<span className="d-none">{(total[index] = item.precio * item.cantidad)}</span>
									Total: ¢{total[index]}
								</Card.Subtitle>
							</Card.Body>
						</Card>
					))}
				</div>
				<div className="container d-flex align-items-center justify-content-center mt-3">
					{total.forEach(element => {
						suma = suma + element;
						return suma;
					})}
					<div>
						<p>Total a Pagar:</p>
						<p className="p-2 bg-light border text-center">{suma}</p>
					</div>
				</div>
				<div className="d-flex align-items-center justify-content-center mt-4">
					<Link to="pago">
						<Button variant="primary" onClick={handleSubmit(suma)}>
							Proceder al Pago
						</Button>
					</Link>
				</div>
			</div>
		</>
	);
};
