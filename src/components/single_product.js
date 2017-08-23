import React from 'react';

class SingleProduct extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		const style = {
						display: 'inline-block',
						width: '300px',
						height: '320px',
						margin: '5px',
						padding: '10px',
						border: '1px solid #5EA000',
						'text-align': 'center',
						fontFamily: 'Garamond'
					};
		
		return (
				<li style={style}>
					<img className='product-img' src={this.props.image_source} alt='' height='180px'/>
					<h4 className='product-name'>{this.props.item_name}</h4>
					<h5 className='product-price'>€{this.props.product_price}</h5>
					<button className='add-to-cart'>Add to Cart</button>
				</li>
		);
	}
};

export default SingleProduct;