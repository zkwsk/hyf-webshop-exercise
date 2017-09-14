import React from 'react';

import SingleProduct from './single_product';

// we want to load the data.json file and then run a loop over the array of products so that each element (product) is loaded as an 'li'

const AllProducts = props => {
	const style = {
		backgroundColor: '#F3F3F3',
	};

	return (
		<div className="well" style={style}>
			{/* in this section, we are going to use the array.map method on the products array within the data.json file and using the information contained in the json file, we are going to render all of our products one by one within the SingleProduct component. The images for the products are located in a separate folder but have names identical to their id data in the data.json file. */}
			<ul>
				{props.products.map(product => (
					<SingleProduct key={product.id} product={product} />
				))}
			</ul>
		</div>
	);
};

export default AllProducts;
