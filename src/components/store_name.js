import React from 'react';
import { NavLink } from 'react-router-dom';

const StoreName = () => {
	const style = {
		backgroundColor: '#6DC37B',
	};
	return (
		<header style={style}>
			<span>
				<img src="src/images/HYG.png" alt="store-logo" />
			</span>
			<ul className="main-nav">
				<li>
					<NavLink exact to="/">
						STORE
					</NavLink>
				</li>
				<li>
					<NavLink to="/cart">CART</NavLink>
				</li>
			</ul>
		</header>
	);
};

export default StoreName;
