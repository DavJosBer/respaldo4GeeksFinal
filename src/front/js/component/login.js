import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Button, Modal, Form } from "react-bootstrap";

export function Login_user() {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);
	const [show2, setShow2] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const handleClose2 = () => setShow2(false);
	const handleShow2 = () => setShow2(true);

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [auth, setAuth] = useState(false);

	const handleSubmit = event => {
		event.preventDefault();
		actions.login_user(username, password);
		setAuth(true);
	};

	const handleSubmit2 = event => {
		event.preventDefault();
		actions.reset_password(username, email);
	};

	return (
		<>
			<Button className="m-3" variant="primary" onClick={handleShow}>
				Iniciar Sesión
			</Button>

			<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Ingrese su nombre de usuario y contraseña</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={event => handleSubmit(event)}>
						<Form.Group>
							<Form.Label>Nombre de usuario</Form.Label>
							<Form.Control
								type="text"
								placeholder="Ingrese su nombre de usuario"
								value={username}
								onChange={event => setUsername(event.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Label>Contraseña</Form.Label>
							<Form.Control
								type="password"
								placeholder="Contraseña"
								value={password}
								onChange={event => setPassword(event.target.value)}
							/>
						</Form.Group>
						<Button className="m-3" variant="secondary" onClick={handleClose}>
							Cerrar
						</Button>
						<Button className="m-3" variant="primary" type="submit" onClick={handleClose}>
							Continuar
						</Button>
						<a onClick={handleShow2} className="text-danger">
							Olvide mi Contraseña
						</a>
					</Form>
					{auth ? <Redirect to="/" /> : null}
				</Modal.Body>
			</Modal>

			{/* Reset Password */}

			<Modal show={show2} onHide={handleClose2} backdrop="static" keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Ingrese su usuario y su email</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={event => handleSubmit2(event)}>
						<Form.Group>
							<Form.Label>Nombre de usuario</Form.Label>
							<Form.Control
								type="text"
								placeholder="Ingrese su nombre de usuario"
								value={username}
								onChange={event => setUsername(event.target.value)}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="text"
								placeholder="Email"
								value={email}
								onChange={event => setEmail(event.target.value)}
							/>
						</Form.Group>
						<Button className="m-3" variant="secondary" onClick={handleClose2}>
							Cerrar
						</Button>
						<Button className="m-3" variant="primary" type="submit" onClick={handleClose2}>
							Continuar
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
}
