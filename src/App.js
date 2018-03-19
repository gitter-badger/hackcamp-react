import React, {Component} from 'react';
import axios from 'axios';

import {Header} from './components/Header';
import {Main} from './components/Main';
import {MovieDetail} from './components/MovieDetail';
import {Stats} from './components/Stats';
import {Cart} from './cart/Cart';
import {SERVER_URL} from './constants/config';

export class App extends Component {
  state = {
    selectedPage: null,
    movies: [],
    cart: []
  };

  componentDidMount() {
    axios
      .get(`${SERVER_URL}/movies`)
      .then(movies => movies.data)
      .then(movies => {
        this.setState({movies});
      });
  }

  selectPage = page => {
    this.setState({selectedPage: page});
  };

  isInCart = id =>
    this.state.cart.reduce(
      (result, nextId) => (result ? result : nextId === id),
      false
    );

  addToCart = id =>
    this.setState({
      cart: this.isInCart(id) ? this.state.cart : [...this.state.cart, id]
    });

  removeFromCart = id =>
    this.setState({
      cart: this.state.cart.filter(p => p !== id)
    });

  render() {
    const {selectedPage, movies, cart} = this.state;
    return (
      <div>
        <Header />
        {Number.isInteger(selectedPage)
          ? <MovieDetail selectMovie={this.selectPage} movieId={selectedPage} />
          : selectedPage === 'stats'
            ? <Stats selectPage={this.selectPage} movies={movies} />
            : <Main
                removeFromCart={this.removeFromCart}
                addToCart={this.addToCart}
                isInCart={this.isInCart}
                movies={movies}
                selectMovie={this.selectPage}
              />}
        <Cart
          removeFromCart={this.removeFromCart}
          products={cart}
          movies={movies}
        />
      </div>
    );
  }
}
