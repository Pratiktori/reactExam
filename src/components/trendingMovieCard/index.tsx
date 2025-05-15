import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import img from '../../images/film-poster-placeholder.png';
import { BaseMovieProps } from "../../types/interfaces";

const styles = {
  card: { maxWidth: 400 },
  media: { height: 400 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

interface TrendingMovieCardProps extends BaseMovieProps {
  onAddToFavourites?: (movieId: number) => void;
}

const TrendingMovieCard: React.FC<TrendingMovieCardProps> = ({
  id,
  title,
  poster_path,
  release_date,
  vote_average,
  onAddToFavourites,
  favourite,
}) => {
  return (
    <Card sx={styles.card}>
      <CardHeader title={title} />
      <CardMedia
        sx={styles.media}
        image={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : img
        }
        title={title}
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p" sx={{ display: 'flex', alignItems: 'center' }}>
              <CalendarIcon fontSize="small" sx={{ mr: 0.5 }} />
              {release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p" sx={{ display: 'flex', alignItems: 'center' }}>
              <StarRateIcon fontSize="small" sx={{ mr: 0.5 }} />
              {vote_average}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={() => onAddToFavourites && onAddToFavourites(id)}
          color={favourite ? "error" : "default"}
        >
          <FavoriteIcon fontSize="large" />
        </IconButton>
        <Button variant="outlined" size="medium" color="primary">
          More Info ...
        </Button>
      </CardActions>
    </Card>
  );
};

export default TrendingMovieCard;
