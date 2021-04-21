const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			services: [],
			favorites: []
		},
		actions: {
			signup_user: (email, username, password, address) => {
				fetch("https://3001-amaranth-hyena-gjnt3qhe.ws-us03.gitpod.io/api/signup", {
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
				fetch("https://3001-amaranth-hyena-gjnt3qhe.ws-us03.gitpod.io/api/login", {
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
				let result = await fetch("https://3001-amaranth-hyena-gjnt3qhe.ws-us03.gitpod.io/api")
					.then(res => res.json())
					.then(data => {
						setStore({ services: data });
					})
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
