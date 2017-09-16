import React from 'react';

import data from '../data/data.json';
import CartStore from '../stores/CartStore';
import CartActions from '../actions/CartActions';

import SearchBar from './SearchBar';
import AllProducts from './AllProducts';
import Footer from './Footer';

class App extends React.Component {
	constructor() {
		super(...arguments);
		this.state = {
			products: data.products,
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
				<SearchBar />
				<AllProducts products={this.state.products} />
				<Footer />
			</div>
		);
	}
}

export default App;
