import React from 'react';
import CartStore from '../stores/CartStore';
import CartActions from '../actions/CartActions';

class CartItem extends React.Component {
	constructor(props) {
		super(props);
	}

	handleChange(e) {
		CartActions.updateQuantity(this.props.product, e.target.value);
	}

	render() {
		return (
			<tr key={this.props.product.id}>
				<td className="cart-product-img">
					<img
						src={`src/images/products/${this.props.product.id}.jpg`}
						alt="product image"
					/>
				</td>
				<td className="cart-product-name">
					{this.props.product.item_name}
				</td>
				<td className="cart-product-price">
					€{this.props.product.price}
				</td>
				<td className="cart-product-quantity">
					<input
						onChange={this.handleChange.bind(this)}
						type="number"
						id="quantity"
						defaultValue={this.props.quantity}
						min="0"
						max="10"
					/>
				</td>
				<td className="cart-product-remove">
					<button
						onClick={() => {
							CartActions.removeFromCart(this.props.product);
						}}
					>
						Remove
					</button>
				</td>
				<td className="cart-product-total">
					€{(this.props.product.price * this.props.quantity).toFixed(
						2
					)}
				</td>
			</tr>
		);
	}
}

export default CartItem;
