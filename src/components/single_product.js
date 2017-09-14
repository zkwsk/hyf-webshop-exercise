import React from 'react';

import CartActions from '../actions/CartActions';

class SingleProduct extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<li
				style={{
					display: 'inline-block',
					width: '240px',
					height: '290px',
					margin: '3px 10px',
					padding: '10px',
					border: '1px solid #5EA000',
					textAlign: 'center',
					fontFamily: 'Garamond',
				}}
			>
				<img
					className="product-img"
					src={`src/images/products/${this.props.product.id}.jpg`}
					alt="product image"
					height="180px"
				/>
				<p className="product-name">
					<strong>{this.props.product.item_name}</strong>
				</p>
				<p className="product-price">
					<strong>€{this.props.product.price}</strong>
				</p>
				<button
					className="add-to-cart"
					onClick={() => CartActions.addToCart(this.props.product)}
				>
					Add to Cart
				</button>
			</li>
		);
	}
}

export default SingleProduct;
