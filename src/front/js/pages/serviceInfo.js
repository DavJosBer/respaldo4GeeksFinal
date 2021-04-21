import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Button } from "react-bootstrap";

export const ServiceInfo = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<>
			<div className="card-header bg-white">
				{store.services.length > 0 && (
					<>
						<h1>{store.services[params.theid].name}</h1>
					</>
				)}
			</div>
			<Button variant="primary">Agregar al Carrito</Button>
		</>
	);
};
