import React from 'react';
import ReactDOM from 'react-dom';

import data from '../data/data.json';
import CartStore from '../stores/CartStore';
import CartActions from '../actions/CartActions';

import StoreName from './store_name';
import SearchBar from './search_bar';
import AllProducts from './all_products';
import Footer from './footer';

class App extends React.Component {

	constructor() {
		super(...arguments);
		CartActions.createCart();
		this.state = {
			products: data.products,
			cart: CartStore.getState(),
		};

		this.addToCart = this.addToCart.bind(this);
		this.removeFromCart = this.removeFromCart.bind(this);
		this.clearCart = this.clearCart.bind(this);
	}

	componentDidMount() {
		this.storeSubscription = CartStore.addListener(
			data => this.handleStoreChange(data)
			); 
	}

	componentWillUnmount() {
		this.storeSubscription.remove();
	}

	handleStoreChange() {
		this.setState({cart: CartStore.getState()});
	}

	addToCart() {
		CartActions.addToCart({
			'product-id': 1,
			'product-name': 'test',
			'product-price': 22,
			'product-quantity': 1,
		});

	}

	removeFromCart() {

	}

	clearCart() {

	}
	
	render() {
	    return (
	        <div>
	            <StoreName />
	            <SearchBar />
	            <AllProducts products={this.state.products} addToCart={this.addToCart}/>
	            <Footer />
	        </div>
	    );
	}
};

export default App;