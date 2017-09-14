import React from 'react';

import data from '../data/data.json';
import CartStore from '../stores/CartStore';
import CartActions from '../actions/CartActions';

import StoreName from './store_name';
import SearchBar from './search_bar';
import AllProducts from './all_products';
import Footer from './footer';
import Cart from './Cart';

class App extends React.Component {
	constructor() {
		super(...arguments);
		CartActions.createCart();
		this.state = {
			products: data.products,
			cart: CartStore.getState(),
		};
	}

	componentDidMount() {
		this.storeSubscription = CartStore.addListener(data =>
			this.handleStoreChange(data)
		);
	}

	componentWillUnmount() {
		this.storeSubscription.remove();
	}

	handleStoreChange() {
		this.setState({ cart: CartStore.getState() });
	}

	render() {
		return (
			<div>
				<StoreName />
				<SearchBar />
				<Cart contents={this.state.cart} />
				<AllProducts products={this.state.products} />
				<Footer />
			</div>
		);
	}
}

export default App;
