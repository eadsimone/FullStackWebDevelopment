import React from 'react';
import { connect } from 'react-redux';

import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';
import { MovieCard } from '../movie-card/movie-card';
import {Row} from "react-bootstrap";

function MoviesList(props) {
  const { movies, visibilityFilter } = props;
  let filteredMovies = movies;

  if (visibilityFilter !== '') {
    filteredMovies = movies.filter(m => m.Title.includes(visibilityFilter));
  }

  if (!movies) return <div className="main-view"/>;

  return <div className="movies-list">
    <VisibilityFilterInput visibilityFilter={visibilityFilter} />
    <Row>{filteredMovies.map(m => <MovieCard key={m._id} movie={m}/>)}</Row>
  </div>;
}
const mapStateToProps = state => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

export default connect(mapStateToProps)(MoviesList);
