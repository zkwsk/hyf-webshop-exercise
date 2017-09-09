import { Dispatcher } from 'flux';

class CartDispatcher extends Dispatcher {
	dispatch(action= {}) {
		console.log('Dispatched', action);
		super.dispatch(action);
	}
}

export default new CartDispatcher();