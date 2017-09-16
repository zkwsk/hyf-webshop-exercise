import React from 'react';

const SearchBar = () => {
	return (
		<div className="well search-bar">
			<span>
				<input type="text" className="search-bar-input" />
			</span>
			<span>
				<button>Search</button>
			</span>
		</div>
	);
};

export default SearchBar;
