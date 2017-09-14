import React from 'react';

const SearchBar = () => {
	const style = {
		backgroundColor: '#F6F9E5',
		fontFamily: 'Papyrus',
		fontSize: '22px',
		width: '100%',
		height: '60px',
		padding: '10px',
		textAlign: 'center',
	};

	const inputStyle = {
		width: '30%',
		margin: 'auto',
		height: '40px',
		textAlign: 'center',
	};

	const buttonStyle = {
		backgroundColor: '#5EA000',
		margin: 'auto',
		height: '40px',
		textAlign: 'center',
	};

	return (
		<div id="searchArea" className="well" style={style}>
			<span>
				<input type="" id="searchBar" style={inputStyle} />
			</span>
			<span>
				<button id="searchButton" style={buttonStyle}>
					Search
				</button>
			</span>
		</div>
	);
};

export default SearchBar;
