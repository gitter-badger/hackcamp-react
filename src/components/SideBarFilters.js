import React from 'react';
import PropTypes from 'prop-types';

export const SideBarFilters = ({
  navClosed,
  onChange,
  closeSideBar,
  openSideBar
}) => {
  return (
    <div>
      <div className={!navClosed ? 'filter filter-is-visible' : 'filter'}>
        <form onSubmit={e => e.preventDefault()}>
          <div className="filter-block">
            <h4>Search</h4>
            <div className="filter-content">
              <input type="search" placeholder="title" onChange={onChange} />
            </div>
          </div>
        </form>
        <a className="hand-cursor close-f" onClick={closeSideBar}>Close</a>
      </div>

      <a className="hand-cursor filter-trigger" onClick={openSideBar}>
        Filters
      </a>
    </div>
  );
};

SideBarFilters.propTypes = {
  navClosed: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  closeSideBar: PropTypes.func.isRequired,
  openSideBar: PropTypes.func.isRequired
};
