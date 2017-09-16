import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../style/index.css';

import Header from './components/Header';
import App from './components/App';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

class Root extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Header />
					<Switch>
						<Route exact path="/" component={App} />
						<Route path="/cart" component={Cart} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

ReactDOM.render(<Root />, document.getElementById('container'));
