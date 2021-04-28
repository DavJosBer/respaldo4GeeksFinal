import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Button, Modal, Form, Card, Container, Alert, Redirect } from "react-bootstrap";
import { CreateService } from "../component/administracion";

export const ModuloAdmin = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container>
			<Card style={{ width: "500px" }}>
				<Card.Body>
					<Card.Title>Módulo de Administración</Card.Title>
					<Card.Text>Seleccione la acción que desea realizar:</Card.Text>
					<CreateService />
				</Card.Body>
			</Card>
			{store.msg_create_service != null ? <AlertDismissible /> : null}
		</Container>
	);
};

function AlertDismissible() {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(true);

	if (show) {
		return (
			<Alert variant="primary" onClose={() => setShow(false)} dismissible>
				<Alert.Heading>{store.msg_create_service}</Alert.Heading>
			</Alert>
		);
	}
	return null;
}
