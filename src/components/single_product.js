import React from 'react';

const SingleProduct = (props) => {

		const style = {
						display: 'inline-block',
						width: '240px',
						height: '290px',
						margin: '3px 10px',
						padding: '10px',
						border: '1px solid #5EA000',
						textAlign: 'center',
						fontFamily: 'Garamond'
					};
		
		return (
				<li style={style}>
					<img className='product-img' src={props.image_source} alt='product image' height='180px'/>
					<p className='product-name'><strong>{props.item_name}</strong></p>
					<p className='product-price'><strong>€{props.product_price}</strong></p>
					<button className='add-to-cart'>Add to Cart</button>
				</li>
		);
};

export default SingleProduct;