import React, {useState} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {searchDrinks} from './redux/actions';
import {Link} from 'react-router-dom';

function App({getDrinks, drinks}) {
	const [Input, setInput] = useState('');

	const handleInput = (e) => {
		setInput(e.target.value); // MARIANA ESCRIBIO: VODKA
	};
	const handleOnClick = (e) => {
		getDrinks(Input);
	};



	return (
		<div className='App'>
			<h2> NUESTRAS BEBIDAS </h2>
			<label> Buscar bebida</label>
			<input onChange={(e) => handleInput(e)}></input>
			<button onClick={(e) => handleOnClick(e)}>Buscar</button>
			<ul>
				{drinks &&
					drinks.map((el) => (
						<div>
							<li>
								<Link to={el.idDrink}>
									<button>{el.strDrink}</button>
								</Link>
							</li>
						</div>
					))}
			</ul>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		drinks: state.totalDrinks,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getDrinks: (drinks) => dispatch(searchDrinks(drinks)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
