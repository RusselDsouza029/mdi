import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Grid, Typography } from "@mui/material";
import "./styles/Movie.css";

const Movie = () => {
  let API_KEY = process.env.REACT_APP_MDI_API_KEY;

  // state for storing movie data from api
  const [movieData, setMovieData] = useState([]);

  // getting id from url using useParams from react router dom for getting data from api
  const { id } = useParams();

  // getting data from api with the help of id
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

  // getting cast details from another api with the help of id
  const CAST_DETAILS_URL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;

  // getting image poster from below url
  const IMG_PATH = (path) => `https://image.tmdb.org/t/p/original/${path}`;

  const getMovieData = () => {
    axios
      .get(URL)
      .then((res) => {
        setMovieData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // state for cast details
  const [castDetails, setCastDetails] = useState([]);

  // fetch cast data with below function
  const getCastData = () => {
    axios
      .get(CAST_DETAILS_URL)
      .then((res) => {
        setCastDetails(res.data.cast);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getMovieData(); // getting movie data
    getCastData(); // getting cast data
  }, []);

  return (
    <>
      <Box>
        {/* grid parent container component */}
        <Grid container spacing={6}>
          {/* grid item component */}
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* img poster */}
            <img
              src={IMG_PATH(movieData.poster_path)}
              width="250"
              className="img__poster"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Box
              sx={{
                paddingLeft: 5,
                paddingRight: 5,
                paddingBottom: 5,
                fontSize: 27,
              }}
            >
              {/* movie title */}
              <Typography variant="p" component="div" className="typo__text">
                <b>Title</b> : <span>{movieData.title}</span>
              </Typography>
              {/* movie vote */}
              <Typography variant="p" component="div" className="typo__text">
                <b>IMDB Rating</b> : <span>{movieData.vote_average} / 10</span>
              </Typography>
              {/* total vote count */}
              <Typography variant="p" component="div" className="typo__text">
                <b>Total vote Count</b> : <span>{movieData.vote_count}</span>
              </Typography>
              {/* Release Date */}
              <Typography variant="p" component="div" className="typo__text">
                <b>Release Date</b> : {movieData.release_date}
              </Typography>
              {/* movie Tagline */}
              <Typography variant="p" component="div" className="typo__text">
                <b>Tagline</b> : <span>{movieData.tagline}</span>
              </Typography>
              {/* movie overview */}
              <Typography variant="p" component="div" className="typo__text">
                <b>Overview</b> : <span>{movieData.overview}</span>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        {/* mapping cast data with castDetails state */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            overflowX: "hidden",
            marginBottom: 5,
            marginTop: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              overflowX: "scroll",
              paddingBottom: 2,
            }}
          >
            {castDetails.map((cast, ind) => {
              return (
                <Box key={cast.id} sx={{ marginLeft: 2, marginRight: 2 }}>
                  <Box>
                    <img
                      src={IMG_PATH(cast.profile_path)}
                      width="200"
                      height="280"
                      className="img__cast"
                    />
                  </Box>
                  <Box>
                    {/* cast name */}
                    <Typography
                      variant="p"
                      component="div"
                      sx={{ paddingBottom: 1 }}
                    >
                      <b>{cast.name}</b>
                    </Typography>
                    {/* cast character name */}
                    <Typography variant="p" component="div">
                      {cast.character}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Movie;
