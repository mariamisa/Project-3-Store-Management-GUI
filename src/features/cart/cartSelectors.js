
export const selectCartItems = (state) => state.cart.cart;
export const selectCartCount = (state) =>
	state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
export const selectCartTotalPrice = (state) =>
	state.cart.cart.reduce((price, item) => price + (item.quantity * item.price), 0);
