import CartActionTypes from './CartActionTypes';
import CartDispatcher from '../dispatcher/CartDispatcher';

let CartActions = {
	createCart() {
		CartDispatcher.dispatch({
			type: CartActionTypes.CREATE_CART,
		});
	},

	addToCart(product) {
		CartDispatcher.dispatch({
			type: CartActionTypes.ADD_TO_CART,
			payload: {
				product: product,
				quantity: 1,
			},
		});
	},

	updateQuantity(product, quantity) {
		CartDispatcher.dispatch({
			type: CartActionTypes.UPDATE_QUANTITY,
			payload: {
				product: product,
				quantity: quantity,
			},
		});
	},

	removeFromCart(product) {
		CartDispatcher.dispatch({
			type: CartActionTypes.REMOVE_FROM_CART,
			payload: product,
		});
	},

	clearCart() {
		CartDispatcher.dispatch({
			type: CartActionTypes.CLEAR_CART,
		});
	},
};

export default CartActions;
