import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar, Image, Nav, DropdownButton, ButtonGroup, Button, Dropdown, Badge } from "react-bootstrap";
import { Login_user } from "../component/login";
import { SignUp } from "../component/signup";

export const Navbar_main = () => {
	const { store, actions } = useContext(Context);
	let favoritesArr = store.favorites;
	let listMap = favoritesArr.map((item, i) => <Dropdown.Item key={i} index={i} favorite={{ item }} />);
	console.log(listMap);
	let num = favoritesArr.length;

	return (
		<Navbar className="container">
			<Navbar.Brand>
				<Link to="/">
					<Image src="https://image.flaticon.com/icons/png/512/34/34859.png" height="60" alt="party" />
				</Link>
			</Navbar.Brand>

			<Nav className="mr-auto">
				<Link className="nav-link" to="/servicios">
					Servicios
				</Link>
				<Link className="nav-link" to="/acerca">
					Acerca de nosotros
				</Link>
				<Link className="nav-link" to="/contacto">
					Contáctanos
				</Link>
			</Nav>
			<Nav className="mr-sm-2">
				<Login_user />
				<SignUp />
			</Nav>

			<ButtonGroup>
				<DropdownButton as={ButtonGroup} title={<i className="fas fa-shopping-cart" />} id="bg-nested-dropdown">
					{listMap}
				</DropdownButton>
				<Button disabled style={{ pointerEvents: "none" }}>
					<Badge variant="light">{num}</Badge>
				</Button>
			</ButtonGroup>
		</Navbar>
	);
};
