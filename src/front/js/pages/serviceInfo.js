import React, { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Button, Jumbotron, Form, Container } from "react-bootstrap";

export const ServiceInfo = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const handleSubmit = event => {
		event.preventDefault();
		actions.addFavorite(
			store.services[params.theid].name,
			store.services[params.theid].precio,
			store.services[params.theid].id,
			input
		);
	};

	const [input, setInput] = useState(1);

	return (
		<>
			<div className="card-header bg-white">
				{store.services.length > 0 && (
					<Jumbotron>
						<h1>{store.services[params.theid].name}</h1>
						{store.services[params.theid].Bocadillos != null ? (
							<p>Bocadillos: {store.services[params.theid].Bocadillos}</p>
						) : null}
						{store.services[params.theid].Entrada != null ? (
							<p>Entrada: {store.services[params.theid].Entrada}</p>
						) : null}
						{store.services[params.theid].Plato_Fuerte != null ? (
							<p>Plato Fuerte: {store.services[params.theid].Plato_Fuerte}</p>
						) : null}
						{store.services[params.theid].Ensalada != null ? (
							<p>Ensalada: {store.services[params.theid].Ensalada}</p>
						) : null}
						{store.services[params.theid].Bebida != null ? (
							<p>Bebida: {store.services[params.theid].Bebida}</p>
						) : null}
						{store.services[params.theid].Postre != null ? (
							<p>Postre: {store.services[params.theid].Postre}</p>
						) : null}
						{store.services[params.theid].Decoracion != null ? (
							<p>Decoración: {store.services[params.theid].Decoracion}</p>
						) : null}
						{store.services[params.theid].DJ != null ? <p>DJ: {store.services[params.theid].DJ}</p> : null}
						{store.services[params.theid].precio != null ? (
							<p>Precio por persona: {store.services[params.theid].precio}</p>
						) : null}
						<Container style={{ maxWidth: "400px" }}>
							<Form onSubmit={event => handleSubmit(event)}>
								<Form.Group>
									<Form.Control
										type="number"
										placeholder="Cantidad de Personas"
										value={input}
										onChange={event => setInput(event.target.value)}
									/>
								</Form.Group>
								<Button variant="primary" type="submit">
									Agregar al Carrito
								</Button>
							</Form>
						</Container>
					</Jumbotron>
				)}
			</div>
		</>
	);
};
