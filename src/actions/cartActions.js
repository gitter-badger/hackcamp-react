import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  TOGGLE_CART,
  UNDO_CART_ACTION
} from '../constants/actions';

/**
 * @param itemId: id of the item you wish to add to your cart
 */
export const addToCart = itemId => ({
  type: ADD_ITEM_TO_CART,
  payload: itemId
});

/**
 * @param itemId: id of the item you wish to remove from your cart
 */
export const removeFromCart = itemId => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: itemId
});

export const toggleCart = () => ({
  type: TOGGLE_CART
});

export const undo = () => ({
  type: UNDO_CART_ACTION
});
