import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {ProductContext} from './contexts/ProductContext'
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);	// add the given item to the cart
	};

	return (
		<ProductContext.Provider value={{products, addItem}}>
			
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/" component={Products} />
		
			
			/>
		</div>
		
		</ProductContext.Provider>
	);
}

export default App;