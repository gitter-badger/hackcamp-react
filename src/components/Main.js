import React from 'react';
import PropTypes from 'prop-types';
import filters from '../mocks/filters';
import {MovieList} from './MovieList';
import {SideBarFilters} from './SideBarFilters';
import {FilterMenu} from './FilterMenu';
import {movie} from '../types/movie';
import {getGenreId, movieContainsGenre} from '../libs/utils';

export class Main extends React.Component {
  state = {
    filters,
    searchValue: null,
    navClosed: true,
    selectedFilter: 'All',
    counter: 0,
    filteredMovies: []
  };

  componentDidMount() {
    const {selectedFilter, searchValue} = this.state;
    const {movies} = this.props;
    this.filterMovies({selectedFilter, searchValue, movies});
  }

  componentWillReceiveProps({movies}) {
    const {selectedFilter, searchValue} = this.state;
    this.filterMovies({selectedFilter, searchValue, movies});
  }

  selectTab = category => {
    this.setState(
      {
        filters: filters.map(filter => {
          filter.selected = filter.category === category;
          return filter;
        }),
        selectedFilter: category
      },
      () => {
        const {selectedFilter, searchValue} = this.state;
        const {movies} = this.props;
        this.filterMovies({selectedFilter, searchValue, movies});
      }
    );
  };

  filterMovies = ({searchValue, selectedFilter, movies}) => {
    const filteredMovies = movies.filter(
      movie =>
        (selectedFilter === 'All' ||
          movieContainsGenre(movie, getGenreId(selectedFilter))) &&
        (!searchValue ||
          movie.title.toLowerCase().includes(searchValue.toLowerCase()))
    );
    this.setState({
      filteredMovies
    });
  };

  closeSideBar = () => {
    this.setState({
      navClosed: true
    });
  };

  openSideBar = () =>
    this.setState({
      navClosed: false
    });

  search = event => {
    this.setState({searchValue: event.target.value}, () => {
      const {selectedFilter, searchValue} = this.state;
      const {movies} = this.props;
      this.filterMovies({selectedFilter, searchValue, movies});
    });
  };

  render() {
    const {
      filters,
      navClosed,
      selectedFilter,
      searchValue,
      filteredMovies
    } = this.state;

    const {addToCart, isInCart, removeFromCart} = this.props;
    return (
      <main className="main-content">
        <FilterMenu
          counter={filteredMovies.length}
          filters={filters}
          selectTab={this.selectTab}
          selectPage={this.props.selectMovie}
        />

        <MovieList
          count={filteredMovies.length}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
          isInCart={isInCart}
          selectMovie={this.props.selectMovie}
          movies={filteredMovies}
          selectedFilter={selectedFilter}
          searchValue={searchValue}
          navClosed={navClosed}
        />

        <SideBarFilters
          navClosed={navClosed}
          closeSideBar={this.closeSideBar}
          onChange={this.search}
          openSideBar={this.openSideBar}
        />
      </main>
    );
  }
}

Main.propTypes = {
  movies: PropTypes.arrayOf(movie).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  selectMovie: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  isInCart: PropTypes.func.isRequired
};
