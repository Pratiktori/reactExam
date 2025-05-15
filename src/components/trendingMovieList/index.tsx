import React from "react";
import Grid from "@mui/material/Grid";
import TrendingMovieCard from "../trendingMovieCard";
import { BaseMovieProps } from "../../types/interfaces";

interface TrendingMovieListProps {
  movies: BaseMovieProps[];
  onAddToFavourites?: (movieId: number) => void;
}

const TrendingMovieList: React.FC<TrendingMovieListProps> = ({ movies, onAddToFavourites }) => {
  return (
    <Grid container spacing={2}>
      {movies.map(movie => (
        <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <TrendingMovieCard
            {...movie}
            onAddToFavourites={onAddToFavourites}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default TrendingMovieList;
