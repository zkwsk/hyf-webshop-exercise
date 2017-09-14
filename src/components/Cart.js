import React from 'react';
import CartStore from '../stores/CartStore';
import CartActions from '../actions/CartActions';

import CartItem from './CartItem';
import StoreName from './store_name';

class Cart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
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
				<table className="table table-hover">
					<thead>
						<tr className="row">
							<th>Shopping Cart</th>
							<th>Item Name</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Remove Button</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						{this.state.cart.map(product => (
							<CartItem key={product.id} product={product} />
						))}
					</tbody>
				</table>
				<div>
					<span>Subtotal</span>
					<span>Subtotal</span>
				</div>
				<div>
					<span>Tax</span>
					<span>25%</span>
				</div>
				<div>
					<span>Shipping</span>
					<span>Shipping</span>
				</div>
				<div>
					<span>Grand Total</span>
					<span>Grand Total</span>
				</div>
				<button>Checkout</button>
			</div>
		);
	}
}

export default Cart;
