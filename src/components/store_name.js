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
						Store
					</NavLink>
				</li>
				<li>
					<NavLink to="/cart">Cart</NavLink>
				</li>
			</ul>
		</header>
	);
};

export default StoreName;
