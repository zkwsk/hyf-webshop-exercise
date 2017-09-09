import { EventEmitter } from 'fbemitter';
import CartDispatcher from '../dispatcher/CartDispatcher';
import CartActionTypes from '../actions/CartActionTypes';

const CHANGE_EVENT = 'change';
let __emitter = new EventEmitter();
let cart = [];

let CartStore = {
	
	getState() {
		return cart;
	},

	addListener(callback) {
		return __emitter.addListener(CHANGE_EVENT, callback);
	}
};

CartStore.dispatchToken = CartDispatcher.register((action) => {
	switch (action.type) {
		case CartActionTypes.CREATE_CART:
			cart = [];
			__emitter.emit(CHANGE_EVENT);
			break;

		case CartActionTypes.ADD_TO_CART:
			cart = cart.concat(action.product);
			__emitter.emit(CHANGE_EVENT);
			break;

		case CartActionTypes.REMOVE_FROM_CART:
			cart = cart.filter(product => product !== action.product);
			__emitter.emit(CHANGE_EVENT);
			break;

		case CartActionTypes.CLEAR_CART:
			cart = [];
			__emitter.emit(CHANGE_EVENT);
			break;
	}
});

export default CartStore;
