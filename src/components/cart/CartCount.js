import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {toggleCart} from "../../actions/cartActions";
import shopping_cart from '../../images/shopping-cart.svg';

const _CartCount = ({count, openCart}) =>
  <div onClick={openCart}>
    <img src={shopping_cart} alt="" />
    <span className="counter">{count}</span>
  </div>;

_CartCount.propTypes = {
  count: PropTypes.number.isRequired,
  openCart: PropTypes.func.isRequired,
};

const mapStateToProps = (reduxState) => ({
  count: reduxState.cart.count
});

const mapDispatchToProps = ({
  openCart: toggleCart
});

export const CartCount = connect(mapStateToProps, mapDispatchToProps)(_CartCount);
