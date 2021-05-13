import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Trago from './Trago';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './redux/reducer';
import thunk from 'redux-thunk';
import {BrowserRouter, Route} from 'react-router-dom';
// ESTE MIDDLEWARE SIRVE PARA PETICIONES ASINCRONA

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Route exact path='/' component={App}></Route>
			<Route exact path='/:id' component={Trago}></Route>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
