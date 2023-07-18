const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: []
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

			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/", {
					method: "GET"
				})
				.then((response) => response.json())
				.then(data => {
					setStore({ ...getStore, vehicles: data.results});
					console.log(data.results);	
				})
			}
		}
	};
};

export default getState;
