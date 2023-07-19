const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			character: [],
			planets: [],
			planet: [],
			vehicles: [],
			vehicle: [],
			favorites: [],
			favorite: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people/", {
					method: "GET"
				})

				.then((response) => response.json())
				.then(data => {
					setStore({ ...getStore, characters: data.results});
					console.log(data.results);
				})
				.catch((error)=> console.log(error))
			},

			getCharacter: (id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`, {
					method: "GET"
				})

				.then((response) => response.json())
				.then(data => {
					setStore({ ...getStore, character: data.result});
					console.log(data.result);
				})
				.catch((error)=> console.log(error))
			},

			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/", {
					method: "GET"
				})

				.then((response) => response.json())
				.then(data => {
					setStore({ ...getStore, planets: data.results});
					console.log(data.results);
				})
				.catch((error) => console.log(error))
			},
			getPlanet: (id) => {
				fetch(`https://www.swapi.tech/api/planets/${id}`, {
					method: "GET"
				})

				.then((response) => response.json())
				.then(data => {
					setStore({ ...getStore, planet: data.result});
					console.log(data.result);
				})
				.catch((error)=> console.log(error))
			},

			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/", {
					method: "GET"
				})
				.then((response) => response.json())
				.then(data => {
					setStore({ ...getStore, vehicles: data.results});
					console.log(data.results);	
				})
			},
			getVehicle: (id) => {
				fetch(`https://www.swapi.tech/api/vehicles/${id}`, {
					method: "GET"
				})

				.then((response) => response.json())
				.then(data => {
					setStore({ ...getStore, vehicle: data.result});
					console.log(data.result);
				})
				.catch((error)=> console.log(error))
			},

			addFavorites: (favorite) => {
				const favoriteState = getStore().favorites.concat(favorite);
				setStore({ ...getStore, favorites: favoriteState})
			},

			deleteFavorite: (name) => {
				const store = getStore()
				const newFavorite = store.favorites.filter((item) => item != name);
				setStore({favorites: newFavorite});
			}
		}
	};
};

export default getState;
