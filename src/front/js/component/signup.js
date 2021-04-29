import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Button, Modal, Form } from "react-bootstrap";

export function SignUp() {
	const [validated, setValidated] = useState(false);

	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [address, setAddress] = useState("");
	const [auth, setAuth] = useState(false);

	const handleSubmit = event => {
		event.preventDefault();
		actions.signup_user(email, username, password, address);
		setAuth(true);

		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<>
			<Button className="m-3" variant="danger" onClick={handleShow}>
				Regístrese
			</Button>

			<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Ingrese la información solicitada para registarse como usuario</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form noValidate validated={validated} onSubmit={event => handleSubmit(event)}>
						<Form.Group>
							<Form.Label>Dirección de email</Form.Label>
							<Form.Control
								type="text"
								placeholder="Email"
								value={email}
								onChange={event => setEmail(event.target.value)}
								required
							/>
							<Form.Control.Feedback type="invalid">
								Por favor, ingrese el correo electrónico
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group>
							<Form.Label>Nombre de Usuario</Form.Label>
							<Form.Control
								type="text"
								placeholder="Ingrese su nombre de usuario"
								value={username}
								onChange={event => setUsername(event.target.value)}
								required
							/>
							<Form.Control.Feedback type="invalid">
								Por favor, ingrese el nombre de usuario
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Label>Contraseña</Form.Label>
							<Form.Control
								type="password"
								placeholder="Contraseña"
								value={password}
								onChange={event => setPassword(event.target.value)}
								required
							/>
							<Form.Control.Feedback type="invalid">
								Por favor, ingrese la contraseña
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group>
							<Form.Label>Dirección de domicilio</Form.Label>
							<Form.Control
								type="text"
								placeholder="Ingrese la dirección de su domicilio"
								value={address}
								onChange={event => setAddress(event.target.value)}
								required
							/>
							<Form.Control.Feedback type="invalid">
								Por favor, ingrese su dirección
							</Form.Control.Feedback>
						</Form.Group>
						<Button className="m-3" variant="secondary" onClick={handleClose}>
							Cerrar
						</Button>
						{username.length > 0 && password.length > 0 && email.length > 0 && address.length > 0 ? (
							<Button className="m-3" variant="primary" type="submit" onClick={handleClose}>
								Continuar
							</Button>
						) : (
							<Button className="m-3" variant="primary" type="submit">
								Continuar
							</Button>
						)}
					</Form>
					{auth ? <Redirect to="/" /> : null}
				</Modal.Body>
			</Modal>
		</>
	);
}
