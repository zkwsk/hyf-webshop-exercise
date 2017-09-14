import React from 'react';
import CartStore from '../stores/CartStore';
import CartActions from '../actions/CartActions';

class CartItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<tr>
				<td>
					<img
						className="product-img"
						src={`src/images/products/${this.props.product.id}.jpg`}
						alt="product image"
						height="20%"
					/>
				</td>
				<td>{this.props.product.item_name}</td>
				<td>{this.props.product.price}</td>
				<td>
					<input
						type="number"
						id="quantity"
						defaultValue="1"
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
				<td>{this.props.product.price * 1}</td>
			</tr>
		);
	}
}

export default CartItem;
