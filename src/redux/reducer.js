const intialData = {
	totalDrinks: [],
	oneDrink: [],
};

const reducer = (state = intialData, action) => {


	switch (action.type) {
		case 'SEARCH_DRINK':
			return {...state, totalDrinks: action.payload};

		case 'ONE_DRINK':
			return {...state, oneDrink: action.payload};
		default:
			return state;
	}
};

export default reducer;
