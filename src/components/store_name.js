import React from 'react';

const StoreName = () => {

	const style = {
					backgroundColor: '#5EA000',
	 				color: '#FFFFFF',
	 				fontFamily: 'Garamond',
	 				fontSize: 16
	 				};

	return (
		<div className='jumbotron well' style={style}>
		<h1>Hack Your Groceries</h1>
		</div>
		);
};

export default StoreName;