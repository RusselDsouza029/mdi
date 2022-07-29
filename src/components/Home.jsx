import axios from "axios";
import React, { useEffect, useState } from "react";
import PopularMovies from "./PopularMovies";
import "./styles/Home.css";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  Grid,
  Box,
} from "@mui/material";
import PopularShows from "./PopularShows";

const Home = () => {
  let apiKey = process.env.REACT_APP_MDI_API_KEY;

  // state for popular movie
  const [popMovies, setPopmovies] = useState([]);

  // state for popular tv shows
  const [popShows, setPopShows] = useState([]);

  // popular movies api
  const POP_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

  // fetching data using axios for popular movies api
  const popularMovieData = () => {
    let fetchMovieData = axios
      .get(POP_MOVIES_URL)
      .then((res) => {
        setPopmovies(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // popular shows api
  const POP_SHOWS_URL = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`;

  // fetching data using axios for popular shows api
  const popularShowsData = () => {
    let fetchMovieData = axios
      .get(POP_SHOWS_URL)
      .then((res) => {
        setPopShows(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    popularMovieData();
    popularShowsData();
  }, []);

  return (
    <>
      <div>
        {/* popular movies api data fetch props */}
        <div>
          <div className="div-title">
            <h1>Popular Movies</h1>
            <hr className="hr-bottom" />
          </div>
          <Box>
            {/* props is send to the PopularMovies component */}
            <Grid spacing={6} container>
              {popMovies.map((movie, ind) => {
                return <PopularMovies movie={movie} key={ind} />;
              })}
            </Grid>
          </Box>
        </div>

        {/* popular series api data fetch with props */}
        <div>
          <div className="div-title">
            <h1>Popular Series</h1>
            <hr className="hr-bottom" />
          </div>
          <Box>
            {/* props is send to the PopularShowws component */}
            <Grid spacing={6} container>
              {popShows.map((shows, ind) => {
                return <PopularShows shows={shows} key={ind} />;
              })}
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Home;
