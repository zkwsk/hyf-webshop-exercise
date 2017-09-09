import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import App from './components/App';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

const Root = () => {

    return (
        <BrowserRouter>
			<div>
				<Match exactly pattern='/' component={App} />
				<Match exactly pattern='/cart' component={Cart} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById('container'));