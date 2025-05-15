import React from "react";
import Header from "../components/headerMovieList";
import Grid from "@mui/material/Grid";
import { DiscoverMovies } from "../types/interfaces";
import TrendingMovieList from "../components/trendingMovieList";
import { useQuery } from "react-query";
import { getTrendingMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const styles = {
  root: {
    padding: "20px",
  },
};

const TrendingMoviePage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverMovies, Error>(
    "trendingmovies",
    getTrendingMovies
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error?.message}</h1>;
  }

  const movies = data ? data.results : [];

  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={"Trending Movies"} />
      </Grid>
      <Grid item container spacing={5}>
        <TrendingMovieList movies={movies} />
      </Grid>
    </Grid>
  );
};

export default TrendingMoviePage;
