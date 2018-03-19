import React from 'react';
import PropTypes from 'prop-types';
import {MovieCommentForm} from './MovieCommentForm';
import {SERVER_URL} from '../constants/config';
import axios from 'axios';
import {MovieComment} from './MovieComment';
import '../css/MovieComments.css';

export class MovieComments extends React.Component {
  state = {
    comments: []
  };

  static propTypes = {
    movieId: PropTypes.number.isRequired
  };

  fetchComments = () => {
    axios
      .get(`${SERVER_URL}/movies/${this.props.movieId}/comments`)
      .then(response => this.setState({comments: response.data}));
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <div className="comments-block">
        <h2>Comments</h2>

        <MovieCommentForm
          movieId={this.props.movieId}
          updateComments={this.fetchComments}
        />

        <div className="movie-comments">
          {this.state.comments.map(c => (
            <MovieComment
              key={c.id}
              data={c}
              updateComments={this.fetchComments}
            />
          ))}
        </div>
      </div>
    );
  }
}
