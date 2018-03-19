import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {PICTURES_CDN_URL} from '../constants/urls';
import '../css/movie.css';
import {MovieBody} from './MovieBody';

export class Movie extends Component {
  state = {
    showBody: false
  };

  hideBody = () => this.setState({showBody: false});
  showBody = () => this.setState({showBody: true});

  render() {
    const {data, selectMovie, addToCart, isInCart, removeFromCart} = this.props;
    const {showBody} = this.state;
    return (
      <div
        onMouseLeave={this.hideBody}
        onMouseEnter={this.showBody}
        className="movie"
      >
        <img
          alt={`${data.title}'s cover`}
          src={PICTURES_CDN_URL + data.poster_path}
        />
        <MovieBody
          isInCart={isInCart}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
          data={data}
          showBody={showBody}
          selectMovie={selectMovie}
        />
      </div>
    );
  }
}

Movie.propTypes = {
  removeFromCart: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  selectMovie: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  isInCart: PropTypes.func.isRequired
};
