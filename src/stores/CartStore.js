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
	},
};

CartStore.dispatchToken = CartDispatcher.register(action => {
	switch (action.type) {
		case CartActionTypes.CREATE_CART:
			cart = [];
			__emitter.emit(CHANGE_EVENT);
			break;

		case CartActionTypes.ADD_TO_CART:
			let productInCart = cart.find(
				cartItem => cartItem.product.id === action.payload.product.id
			);
			if (productInCart) {
				productInCart.quantity += 1;
			} else {
				cart = cart.concat(action.payload);
			}

			__emitter.emit(CHANGE_EVENT);
			break;

		case CartActionTypes.UPDATE_QUANTITY:
			productInCart = cart.find(
				cartItem => cartItem.product.id === action.payload.product.id
			);
			if (productInCart) {
				productInCart.quantity = Number(action.payload.quantity);
			} else {
				cart = cart.concat(action.payload);
			}
			__emitter.emit(CHANGE_EVENT);
			break;

		case CartActionTypes.REMOVE_FROM_CART:
			cart = cart.filter(cartItem => cartItem.product !== action.payload);
			__emitter.emit(CHANGE_EVENT);
			break;

		case CartActionTypes.CLEAR_CART:
			cart = [];
			__emitter.emit(CHANGE_EVENT);
			break;
	}
});

export default CartStore;
