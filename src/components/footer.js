import React from 'react';

const Footer = () => {
	return (
		<div className="well">
			<footer>
				<p>
					Copyright © Hack Your Groceries {new Date().getFullYear()}
				</p>
				<p>
					Customer Service:{' '}
					<a href="mailto:customerservice@hyg.com">
						customerservice@hyg.com
					</a>
				</p>
			</footer>
		</div>
	);
};

export default Footer;
