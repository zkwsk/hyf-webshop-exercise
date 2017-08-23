import React from 'react';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		const style = {
						backgroundColor: '#5EA000',
	 					color: '#FFFFFF',
	 					fontFamily: 'Garamond',
	 					fontSize: 16,
						width: '100%',
						height: '50px',
						padding: '10px',
						'text-align': 'center'
					};

		return (
			<div id="searchArea" className='well' style={style}>
      			<span><input type='' id='searchBar' width='80%' placeholder='Please enter the search term here'/></span>
      			<span><button id='searchButton' className='btn btn-primary btn-success'>Search</button></span>
      		</div>
			);
	}
};

export default SearchBar;