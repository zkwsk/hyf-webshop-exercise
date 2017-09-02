import React from 'react';
import ReactDOM from 'react-dom';

import StoreName from './components/store_name';
import SearchBar from './components/search_bar';
import AllProducts from './components/all_products';
import Footer from './components/footer';

const App = () => {

    return (
        <div>
            <StoreName />
            <SearchBar />
            <AllProducts />
            <Footer />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('.container'));