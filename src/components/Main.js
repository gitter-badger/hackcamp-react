import React from 'react';
import PropTypes from 'prop-types';
import {MovieList} from './MovieList';
import {SideBarFilters} from './SideBarFilters';
import {FilterMenu} from './FilterMenu';

export class Main extends React.Component {
  state = {
    navClosed: true,
    counter: 0
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

  updateCounter = counter => this.setState({counter});

  render() {
    const {navClosed} = this.state;

    return (
      <main className="main-content">

        <FilterMenu
          counter={this.state.counter}
          selectTab={this.selectTab}
          selectPage={this.props.selectMovie}
        />

        <MovieList
          updateCounter={this.updateCounter}
          selectMovie={this.props.selectMovie}
          navClosed={navClosed}
        />

        <SideBarFilters
          navClosed={navClosed}
          closeSideBar={this.closeSideBar}
          openSideBar={this.openSideBar}
        />
      </main>
    );
  }
}

Main.propTypes = {
  selectMovie: PropTypes.func.isRequired
};
