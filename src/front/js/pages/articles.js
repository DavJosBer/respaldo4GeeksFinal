import React, { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, Button } from "react-bootstrap";

export const Articles = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	console.log(store.favorites);

	let articles = store.favorites;

	return (
		<>
			<div className="row">
				{articles.map((item, index) => (
					<Card className="col-4" style={{ width: "18rem" }} key={index}>
						<Card.Body>
							<Card.Title>{item.name}</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">{item.precio}</Card.Subtitle>
						</Card.Body>
					</Card>
				))}
			</div>
			<div className="d-flex align-items-center justify-content-center mt-4">
				<Button variant="primary">Proceder al Pago</Button>
			</div>
		</>
	);
};
