import React, {useContext} from "react";
import AddToWatchListButton from '../components/buttons/addToWatchList'
import {MoviesContext} from '../contexts/moviesContext'
import PageTemplate from "../components/templateMovieListPage";

const UpComingMoviesPage = props => {
  const context = useContext(MoviesContext);
  const upComingMovies = context.upcoming
  return (
    <PageTemplate
      movies={upComingMovies}
      title={"Upcoming Movies"}
      action={(movie) => {
        return <AddToWatchListButton movie={movie}/>;
      }}
    />
  );
};

export default UpComingMoviesPage;