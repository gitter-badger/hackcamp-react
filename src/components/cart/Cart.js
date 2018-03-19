import React from 'react';
import PropTypes from 'prop-types';

import '../../css/cart.css';
import {CartBody} from './CartBody';
import {connect} from 'react-redux';
import {CartCount} from "./CartCount";

const _Cart = props => {
  const {products, isOpen} = props;
  return (
    <div className={`cart-wrapper ${isOpen ? 'cart-open' : ''}`}>
      {!isOpen ? (
        <CartCount />
      ) : (
        <CartBody products={products} />
      )}
    </div>
  );
};

_Cart.propTypes = {
  products: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = ({cart}, {movies}) => ({
  isOpen: cart.isOpen,
  products: cart.products.map(id => movies.find(movie => movie.id === id)),
});

export const Cart = connect(mapStateToProps)(_Cart);
