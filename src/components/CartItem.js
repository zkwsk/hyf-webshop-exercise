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
				<td>
					<img
						className="product-img img-fluid"
						src={`src/images/products/${this.props.product.id}.jpg`}
						alt="product image"
						height="25%"
					/>
				</td>
				<td>{this.props.product.item_name}</td>
				<td>{this.props.product.price}</td>
				<td>
					<input
						onChange={this.handleChange.bind(this)}
						type="number"
						id="quantity"
						defaultValue={this.props.quantity}
						min="0"
						max="10"
					/>
				</td>
				<td>
					<button
						onClick={() => {
							CartActions.removeFromCart(this.props.product);
						}}
					>
						Remove
					</button>
				</td>
				<td>
					{(this.props.product.price * this.props.quantity).toFixed(
						2
					)}
				</td>
			</tr>
		);
	}
}

export default CartItem;
