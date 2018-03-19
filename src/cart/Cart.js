import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../css/cart.css';
import {movie} from '../types/movie';
import {CartBody} from './CartBody';
import shopping_cart from '../images/shopping-cart.svg';

export class Cart extends Component {
  state = {
    open: false,
    count: 42,
    products: []
  };

  componentDidMount() {
    this.getProducts(this.props.products);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.products !== nextProps.products) {
      this.getProducts(nextProps.products);
    }
  }

  getProducts = (ids = [285]) => {
    const products = ids.map(id =>
      this.props.movies.find(movie => movie.id === id)
    );
    this.setState({products});
  };

  toggleCart = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const {open, products} = this.state;
    const {removeFromCart} = this.props;
    return (
      <div className={`cart-wrapper ${open ? 'cart-open' : ''}`}>
        {!open ? (
          <div onClick={this.toggleCart}>
            <img src={shopping_cart} alt="" />
            <span className="counter">{products.length}</span>
          </div>
        ) : (
          <CartBody
            removeFromCart={removeFromCart}
            closeCart={this.toggleCart}
            products={products}
          />
        )}
      </div>
    );
  }
}

Cart.propTypes = {
  products: PropTypes.array.isRequired,
  movies: PropTypes.arrayOf(movie).isRequired,
  removeFromCart: PropTypes.func.isRequired
};
