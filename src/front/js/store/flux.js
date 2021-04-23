const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: "https://3001-azure-sparrow-yy1pzp4k.ws-us03.gitpod.io/api",
			token: "",
			services: [],
			favorites: []
		},
		actions: {
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
			get_services: async () => {
				let result = await fetch(getStore().url)
					.then(res => res.json())
					.then(data => {
						setStore({ services: data });
					})
					.catch(error => console.log(error));
			},
			addFavorite: (event, name, precio, id, index) => {
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
					// .then(result => console.log(result))
					.then(console.log(getStore()))
					.catch(error => console.log("error", error));
				setStore({ ...getStore(), favorites: [...getStore().favorites, { name, precio }] });
			},
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
					.then(console.log(getStore()))
					.catch(error => console.log("error", error));
				const array = getStore().favorites;
				const newFav = array.filter(value => {
					return value != index;
				});
				setStore({ favorites: newFav });
				console.log(newFav);
			}
		}
	};
};

export default getState;
