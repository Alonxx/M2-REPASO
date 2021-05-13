import axios from 'axios';

const link = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
const linkid = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const searchDrinks = (search) => {
	//VODKA

	return async function (dispatch) {
		const result = await axios.get(link + search);
		return dispatch({type: 'SEARCH_DRINK', payload: result.data.drinks});
	};
};

// HACEMOS UNA ACTION

export const oneDrink = (id) => {
	return async function (dispatch) {
		// FUNCION DISPATCH
		const result = await axios.get(linkid + id); // GET AL AXIOS
		return dispatch({type: 'ONE_DRINK', payload: result.data.drinks}); // DESPACHAMOS A LA FUNCION REDUCER EL TYPE Y EL PAYLOAD
	};
};
