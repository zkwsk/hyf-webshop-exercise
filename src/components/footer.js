import React from 'react';

const Footer = () => {

	const style = {
					backgroundColor: '#1BBB3F',
	 				color: '#FFFFFF',
	 				fontFamily: 'Garamond',
	 				fontSize: 12
	 				};

	return (
		<div className='well' style={style}>
		<footer>
			  <p>Copyright © Hack Your Groceries {new Date().getFullYear()}</p>
			  <p>Customer Service: <a href="mailto:customerservice@hyg.com">
			  customerservice@hyg.com</a></p>
		</footer>
		</div>
		);
};

export default Footer