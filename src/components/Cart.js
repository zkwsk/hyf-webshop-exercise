import React from 'react';
import CartStore from '../stores/CartStore';
import CartActions from '../actions/CartActions';

import CartItem from './CartItem';

class Cart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cart: CartStore.getState(),
			tax: 0.2,
			shipping: 0.06,
		};

		this.getSubTotal = this.getSubTotal.bind(this);
	}

	getSubTotal() {
		this.state.cart
			.map(item => item.product.price * item.quantity)
			.reduce((sum, value) => sum + value),
			0;
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
				<h1>Your Shopping Cart</h1>
				<table className="table table-hover">
					<thead>
						<tr className="row">
							<th className="cart-product-img-header">
								<img height="25%" />
							</th>
							<th className="cart-product-name" />
							<th className="cart-product-price">Price</th>
							<th className="cart-product-quantity">Quantity</th>
							<th className="cart-product-remove" />
							<th className="cart-product-total">Total</th>
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
					<span>Subtotal: {this.getSubTotal}</span>
				</div>
				<div>
					<span>Tax......</span>
				</div>
				<div>
					<span>Shipping.......</span>
				</div>
				<div>
					<span>Grand Total.....</span>
				</div>
				<button>Checkout</button>
			</div>
		);
	}
}

export default Cart;
