import React from 'react';
import CartStore from '../stores/CartStore';
import CartActions from '../actions/CartActions';

import CartItem from './CartItem';

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
				<div className="cart-total-checkout">
					<div className="cart-total">
						<span className="cart-total-line">
							Cart Total &nbsp;
						</span>
						<span className="cart-total-figure well">
							€{this.state.cart
								.map(item => item.product.price * item.quantity)
								.reduce((sum, value) => sum + value, 0)
								.toFixed(2)}
						</span>
					</div>
					<div>
						<button className="cart-checkout">Checkout</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Cart;
