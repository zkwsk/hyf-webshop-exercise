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
			tax: 0.2,
			shipping: 0.06,
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
						{this.state.cart.map(item => (
							<CartItem
								key={item.product.id}
								product={item.product}
								quantity={item.quantity}
							/>
						))}
					</tbody>
				</table>
				<div>
					<span>Subtotal</span>
					<span>Subtotal</span>
				</div>
				<div>
					<span>Tax</span>
					<span>{`${this.state.tax * 100}%`}</span>
				</div>
				<div>
					<span>Shipping</span>
					<span>{`${this.state.shipping * 100}%`}</span>
				</div>
				<div>
					<span>Grand Total</span>
					<span>Total</span>
				</div>
				<button>Checkout</button>
			</div>
		);
	}
}

export default Cart;
