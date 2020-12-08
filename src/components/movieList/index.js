
import React from "react";
import Movie from "../movieCard/";
import useTrending from '../../hooks/useTrending'
import "./movieList.css";

const MovieList = ({movies, action}) => {
  const [trending] = useTrending()
  const movieCards = movies.map(m => (
    <Movie key={m.id} movie={m} action={action} hot={trending.indexOf(m.id) !== -1}/>
  ));
  return <div className="row movies bg-info">{movieCards}</div>;
};

export default MovieList;

