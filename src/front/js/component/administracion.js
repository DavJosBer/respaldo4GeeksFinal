import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, Redirect } from "react-router-dom";
import { Button, Modal, Form, Row, Col, Alert } from "react-bootstrap";

export const CreateService = () => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleSubmit = event => {
		event.preventDefault();
		actions.addService(
			name,
			bocadillos,
			entrada,
			plato_Fuerte,
			ensalada,
			bebida,
			postre,
			decoracion,
			dj,
			inventario,
			precio
		);
		setAuth(true);
	};

	const [auth, setAuth] = useState(false);
	const [name, setName] = useState("");
	const [bocadillos, setBocadillos] = useState("");
	const [entrada, setEntrada] = useState("");
	const [plato_Fuerte, setPlato_Fuerte] = useState("");
	const [ensalada, setEnsalada] = useState("");
	const [bebida, setBebida] = useState("");
	const [postre, setPostre] = useState("");
	const [decoracion, setDecoracion] = useState("");
	const [dj, setDj] = useState("");
	const [inventario, setInventario] = useState("");
	const [precio, setPrecio] = useState("");

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Nuevo Servicio
			</Button>

			<Modal size="lg" show={show} onHide={handleClose} backdrop="static" keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Ingrese la información para crear un nuevo servicio</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={event => handleSubmit(event)}>
						<Form.Group as={Row} controlId="exampleForm.ControlInput1">
							<Form.Label column>Nombre del Servicio</Form.Label>
							<Col sm="9">
								<Form.Control
									type="text"
									value={name}
									onChange={event => setName(event.target.value)}
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="exampleForm.ControlInput1">
							<Form.Label column>Detalle de Bocadillos</Form.Label>
							<Col sm="9">
								<Form.Control
									type="text"
									value={bocadillos}
									onChange={event => setBocadillos(event.target.value)}
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="exampleForm.ControlInput1">
							<Form.Label column>Detalle de Entrada</Form.Label>
							<Col sm="9">
								<Form.Control
									type="text"
									value={entrada}
									onChange={event => setEntrada(event.target.value)}
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="exampleForm.ControlInput1">
							<Form.Label column>Detalle de Plato Fuerte</Form.Label>
							<Col sm="9">
								<Form.Control
									type="text"
									value={plato_Fuerte}
									onChange={event => setPlato_Fuerte(event.target.value)}
									as="textarea"
									rows={3}
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="exampleForm.ControlInput1">
							<Form.Label column>Detalle de Ensalada</Form.Label>
							<Col sm="9">
								<Form.Control
									type="text"
									value={ensalada}
									onChange={event => setEnsalada(event.target.value)}
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="exampleForm.ControlInput1">
							<Form.Label column>Detalle de Bebida</Form.Label>
							<Col sm="9">
								<Form.Control
									type="text"
									value={bebida}
									onChange={event => setBebida(event.target.value)}
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="exampleForm.ControlInput1">
							<Form.Label column>Detalle de Postre</Form.Label>
							<Col sm="9">
								<Form.Control
									type="text"
									value={postre}
									onChange={event => setPostre(event.target.value)}
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="exampleForm.ControlInput1">
							<Form.Label column>Detalle de Decoración</Form.Label>
							<Col sm="9">
								<Form.Control
									type="text"
									value={decoracion}
									onChange={event => setDecoracion(event.target.value)}
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="exampleForm.ControlInput1">
							<Form.Label column>Detalle de DJ</Form.Label>
							<Col sm="9">
								<Form.Control type="text" value={dj} onChange={event => setDj(event.target.value)} />
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="exampleForm.ControlInput1">
							<Form.Label column>Cantidad Máxima de Personas</Form.Label>
							<Col sm="9">
								<Form.Control
									type="number"
									value={inventario}
									onChange={event => setInventario(event.target.value)}
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="exampleForm.ControlInput1">
							<Form.Label column>Precio del Paquete por Persona</Form.Label>
							<Col sm="9">
								<Form.Control
									type="number"
									value={precio}
									onChange={event => setPrecio(event.target.value)}
								/>
							</Col>
						</Form.Group>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Cerrar
							</Button>

							<Button variant="primary" type="submit" onClick={handleClose}>
								Crear un nuevo Servicio
							</Button>
						</Modal.Footer>
					</Form>
					{auth ? <Redirect to="/admin" /> : null}
				</Modal.Body>
			</Modal>
		</>
	);
};
