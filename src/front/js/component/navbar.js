import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar, Image, Nav, DropdownButton, ButtonGroup, Button, Dropdown, Badge } from "react-bootstrap";
import { Login_user } from "../component/login";
import { SignUp } from "../component/signup";
import PropTypes from "prop-types";

const DropItem = props => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="mt-2 border-bottom">
				<span className="ml-1">
					<i className="fas fa-trash d-inline" onClick={() => actions.removeFav(props.id)} />
				</span>
				<a className="dropdown-item d-inline">
					{props.name} ¢{props.precio} {props.cantidad}
				</a>
			</div>
		</>
	);
};
DropItem.proptypes = {
	name: PropTypes.string,
	id: PropTypes.number,
	precio: PropTypes.number,
	index: PropTypes.number,
	cantidad: PropTypes.number
};

export const Navbar_main = () => {
	const { store, actions } = useContext(Context);
	let num = store.favorites.length;
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

			<div className="dropdown">
				<button
					className="btn btn-primary py-2 dropdown-toggle d-flex justify-content-between align-items-center"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					<i className="fas fa-shopping-cart" />
					<span className="badge badge-light ml-2">{num}</span>
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					{store.favorites.map((item, index) => (
						<DropItem
							key={index}
							name={item.name}
							id={item.id}
							precio={item.precio}
							cantidad={item.cantidad}
						/>
					))}
				</div>
			</div>
		</Navbar>
	);
};
