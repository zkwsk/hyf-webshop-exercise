import CartActionTypes from './CartActionTypes';
import CartDispatcher from '../dispatcher/CartDispatcher';


let CartActions = {
	
	createCart() {
		CartDispatcher.dispatch({
			type: CartActionTypes.CREATE_CART
		});
	},

	addToCart(product) {
		CartDispatcher.dispatch({
			type: CartActionTypes.ADD_TO_CART,
			product: product
		});
	},

	removeFromCart(product) {
		CartDispatcher.dispatch({
			type: CartActionTypes.REMOVE_FROM_CART,
			product: product
		});
	},

	clearCart()	{
		CartDispatcher.dispatch({
			type: CartActionTypes.CLEAR_CART
		});
	}	

};

export default CartActions;