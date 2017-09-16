import React from 'react';

import CartActions from '../actions/CartActions';

class SingleProduct extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<li className="store-single-product">
				<img
					className="store-product-img"
					src={`src/images/products/${this.props.product.id}.jpg`}
					alt="product image"
					height="180px"
				/>
				<p className="store-product-name">
					<strong>{this.props.product.item_name}</strong>
				</p>
				<p className="store-product-price">
					<strong>€{this.props.product.price}</strong>
				</p>
				<button
					className="store-add-to-cart"
					onClick={() => CartActions.addToCart(this.props.product)}
				>
					Add to Cart
				</button>
			</li>
		);
	}
}

export default SingleProduct;
