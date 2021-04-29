import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/home";
import { ServiceInfo } from "./pages/serviceInfo";
import { Acerca } from "./pages/acerca";
import { Contacto } from "./pages/Contacto";
import { Pago } from "./pages/payment";
import injectContext from "./store/appContext";
import { ModuloAdmin } from "./pages/admin";
import { Articles } from "./pages/articles";

import { Navbar_main } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<Navbar_main />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/service/:theid">
						<ServiceInfo />
					</Route>
					<Route exact path="/admin">
						<ModuloAdmin />
					</Route>
					<Route exact path="/articles">
						<Articles />
					</Route>
					<Route exact path="/pago">
						<Pago />
					</Route>
					<Route exact path="/acerca">
						<Acerca />
					</Route>
					<Route exact path="/contacto">
						<Contacto />
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
