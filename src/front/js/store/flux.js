const getState = ({ getStore, getActions, setStore }) => {
	return {
		/*Almacena los datos de manera global para ser usados en components, pages, index o layout*/
		store: {
			url: "https://3001-orange-firefly-q9g8jd1a.ws-us03.gitpod.io/api",
			token: "",
			services: [],
			favorites: []
		},
		/*Almacena las funciones que llenan el store*/
		actions: {
			/*Recibe por parametro el email, username, password y address definidos en el formulario de registro
				a continuación realiza la función de fetch convirtiendo los parametros en formato JSON
				a continuación llena la base de datos de signup
			*/
			signup_user: (email, username, password, address) => {
				fetch(`${getStore().url}/signup`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						email: `${email}`,
						username: `${username}`,
						password: `${password}`,
						address: `${address}`
					})
				})
					.then(response => response.json())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			},
			/*Recibe por parametro el username y password definidos en el formulario de login
				a continuación realiza la función de fetch convirtiendo los parametros en formato JSON
				a continuación llena la base de datos de signup
			*/
			login_user: (username, password) => {
				fetch(`${getStore().url}/login`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						username: `${username}`,
						password: `${password}`
					})
				})
					.then(response => response.json())
					.then(result => {
						//setStore({ favlist: result.favorites });
						setStore({ token: result.token });
					})
					.catch(error => console.log("error", error));
			},
			/*Recibe por parametro el email y username definidos en el formulario de reset password
				a continuación realiza la función de fetch convirtiendo los parametros en formato JSON
				el fetch envía un email con la password definida por el usuario
			*/
			reset_password: (username, email) => {
				fetch(`${getStore().url}/reset`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						username: `${username}`,
						email: `${email}`
					})
				})
					.then(response => response.json())
					.then(result => console.log(username))
					.catch(error => console.log("error", error));
			},
			/*Trae mediante la funcion fetch los datos de service almacenados en la base de datos
			*/
			get_services: async () => {
				let result = await fetch(getStore().url)
					.then(res => res.json())
					.then(data => {
						setStore({ services: data });
					})
					.catch(error => console.log(error));
			},
			/*Recibe por parametro el evento de boton, name, precio e id definidos en el componente
				a continuación realiza la función de fetch convirtiendo los parametros en formato JSON
				a continuación llena la base de datos de shopCart
			*/
			addFavorite: (event, name, precio, id) => {
				fetch(`${getStore().url}/shopCart`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${getStore().token}`
					},
					body: JSON.stringify({
						service_id: `${id}`,
						precio: `${precio}`,
						cantidad: 1
					})
				})
					.then(response => response.json())
					.then(result => console.log(id))

					.catch(error => console.log("error", error));
				setStore({ ...getStore(), favorites: [...getStore().favorites, { name, precio }] });
			},
			/*Recibe por parametro el index e id definidos en el shop cart
				a continuación realiza la función de fetch convirtiendo los parametros en formato JSON
				a continuación elimina el item la base de datos de shop cart
			*/
			removeFav: (index, id) => {
				fetch(`${getStore().url}/shopCart`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${getStore().token}`
					},
					body: JSON.stringify({
						id: `${id}`
					})
				})
					.then(response => response.json())
					// .then(result => console.log(result))
					//.then(console.log(id))
					.catch(error => console.log("error", error));
				const array = getStore().favorites;
				const newFav = array.filter(value => {
					return value != index;
				});
				setStore({ favorites: newFav });
				//console.log(newFav);
			}
		}
	};
};

export default getState;
