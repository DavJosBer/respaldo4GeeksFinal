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
						<p>Bocadillos: {store.services[params.theid].Bocadillos}</p>
						<p>Entrada: {store.services[params.theid].Entrada}</p>
						<p>Plato Fuerte: {store.services[params.theid].Plato_Fuerte}</p>
						<p>{store.services[params.theid].Ensalada}</p>
						<p>{store.services[params.theid].Bebida}</p>
						<p>{store.services[params.theid].Postre}</p>
						<p>{store.services[params.theid].Decoración}</p>
						<p>{store.services[params.theid].DJ}</p>
						<p>{store.services[params.theid].precio}</p>
					</>
				)}
			</div>
			<Button variant="primary" onClick={() => actions.addFavorite(event, store.services[params.theid].name)}>
				Agregar al Carrito
			</Button>
		</>
	);
};
