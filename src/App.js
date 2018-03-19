import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Header} from './components/Header';
import {Main} from './components/Main';
import {MovieDetail} from './components/MovieDetail';
import {Stats} from './components/Stats';
import {Cart} from './components/cart/Cart';
import {connect} from 'react-redux';
import {fetchMovies} from './actions/moviesActions';

export class _App extends Component {
  state = {
    selectedPage: null
  };

  componentDidMount() {
    this.props.fetchMovies();
  }

  selectPage = page => {
    this.setState({selectedPage: page});
  };

  render() {
    const {selectedPage} = this.state;
    return (
      <div>
        <Header />
        {Number.isInteger(selectedPage) ? (
          <MovieDetail selectMovie={this.selectPage} movieId={selectedPage} />
        ) : selectedPage === 'stats' ? (
          <Stats selectPage={this.selectPage} />
        ) : (
          <Main selectMovie={this.selectPage} />
        )}
        <Cart removeFromCart={this.removeFromCart} />
      </div>
    );
  }
}

_App.propTypes = {
  fetchMovies: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  fetchMovies
};

export const App = connect(null, mapDispatchToProps)(_App);
