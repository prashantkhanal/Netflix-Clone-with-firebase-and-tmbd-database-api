import { Typography, makeStyles, Box, Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import axiosInstance from '../api';
import request from '../request';

const useStyles = makeStyles((theme) => ({
  banner: {
    objectFit: 'contain',
    height: '448px',
    color: '#FFFFFF',
  },
  bannerContents: {
    marginLeft: theme.spacing(3),
    paddingTop: theme.spacing(18),
    height: '190px',
  },
  bannerTitle: {
    fontSize: '3rem',
    fontWeight: 800,
    paddingBottom: '0.3rem',
  },
  bannerDesc: {
    width: '45rem',
    lineHeight: 1.3,
    paddingTop: '1rem',
    fontSize: '0.8rem',
    maxWidth: '330px',
    height: '80px',
  },
  bannerbtn: {
    color: '#fff',
    outline: 'none',
    border: 'none',
    fontWeight: 700,
    borderRadius: '0.2vw',
    padding: '0.5rem 1rem 0.5rem 1.2rem',
    marginRight: '1rem',
    backgroundColor: 'rgba(51, 51,51, 0.8)',
    '&:hover': {
      color: '#000',
      backgroundColor: '#e6e6e6',
      transition: 'all 0.2s',
    },
  },
  bannerBottom: {
    height: '7.4rem',
    backgroundImage:
      'linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111) ',
  },
}));

const Banner = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get(request.fetchNetflixOriginals);
      setMovies(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchData();
  }, []);

  console.log(movies);
  const classes = useStyles();
  return (
    <header
      className={classes.banner}
      style={{
        backgroundSize: 'cover',
        background: `url(https://image.tmdb.org/t/p/original/${movies?.backdrop_path})`,
        backgroundPosition: 'center center',
      }}
    >
      <Box className={classes.bannerContents}>
        {/* title */}

        <Typography className={classes.bannerTitle}>
          {movies?.name || movies?.title || movies?.original_name}
        </Typography>
        {/* button */}
        <Box>
          <Button className={classes.bannerbtn}>Play</Button>
          <Button x className={classes.bannerbtn}>
            My List
          </Button>
        </Box>
        {/* dispriptions */}
        <Typography variant="subtitle1" className={classes.bannerDesc}>
          {movies?.overview}
        </Typography>
      </Box>
      <div className={classes.bannerBottom} />
    </header>
  );
};

export default Banner;
