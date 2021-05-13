import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {oneDrink} from './redux/actions';

const Trago = ({match, myDrink, getDrink}) => {
	const tragoid = match.params.id;

	useEffect(() => {
		getDrink(tragoid);
	}, []);

	return (
		<div>
			{console.log(myDrink)}
			{myDrink &&
				myDrink.map((el) => (
					<div>
						<h1>{el.strDrink}</h1>
						<h2>{el.strGlass}</h2>
						<img src={el.strDrinkThumb} alt='ssds' />
					</div>
				))}
		</div>
	);
};

function mapStateToProps(state) {
	return {
		myDrink: state.oneDrink,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getDrink: (drinks) => dispatch(oneDrink(drinks)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Trago);
