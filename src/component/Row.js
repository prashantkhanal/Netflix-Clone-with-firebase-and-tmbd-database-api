import { Typography, makeStyles, Box } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import YouTube from 'react-youtube';
import movieTailer from 'movie-trailer';
import axios from '../api';
const base_url = 'https://image.tmdb.org/t/p/original/';
const useStyles = makeStyles((theme) => ({
  main: {
    marginLeft: theme.spacing(2.5),
    color: '#FFFFFF',
  },
  poster: {
    objectFit: 'contain',
    maxHeight: '110px',
    marginRight: theme.spacing(2),

    transition: 'transform 450ms',

    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  largePoster: {
    maxHeight: '250px',
    marginRight: theme.spacing(2),
    transition: 'transform 750ms',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  heading: {
    margin: theme.spacing(1.4, 0, 1.4, 0),
    fontWeight: 600,
    fontSize: '1rem',
  },
  rowPoster: {
    display: 'flex',
    overflowX: 'scroll',
    overflowY: 'hidden',
    '-ms-overflow-style': 'none',
    scrollbarWidth: 'none',
    paading: theme.spacing(2.5),
  },
}));
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(fetchUrl);
      setMovies(res.data.results);
      return res;
    };
    fetchMovies();
  }, [fetchUrl]);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTailer(movie?.name || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((err) => console.log(err));
    }
    //
  };

  return (
    <Box className={classes.main}>
      <Typography variant="h6" className={classes.heading}>
        {' '}
        {title}{' '}
      </Typography>

      <Box className={classes.rowPoster}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={isLargeRow ? classes.largePoster : classes.poster}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt="movies_poster"
          />
        ))}
      </Box>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </Box>
  );
};

export default Row;
