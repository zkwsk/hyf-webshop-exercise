import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

class Root extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={App} />
					<Route exact path="/cart" component={Cart} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		);
	}
}

ReactDOM.render(<Root />, document.getElementById('container'));
