import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Grid, Typography } from "@mui/material";
import "./styles/TvShows.css";

const TvShows = () => {
  let API_KEY = process.env.REACT_APP_MDI_API_KEY;

  // state for storing shows data from api
  const [showsData, setShowsData] = useState([]);

  // getting id from url using useParams from react router dom for getting data from api
  const { id } = useParams();

  // getting data from api with the help of id
  const URL = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`;

  // getting cast details from another api with the help of id
  const CAST_DETAILS_URL = `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${API_KEY}&language=en-US`;

  // getting image poster from below url
  const IMG_PATH = (path) => `https://image.tmdb.org/t/p/original/${path}`;

  const getshowsData = () => {
    axios
      .get(URL)
      .then((res) => {
        setShowsData(res.data);
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
    getshowsData(); // getting shows data
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
              src={IMG_PATH(showsData.poster_path)}
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
              {/* shows title */}
              <Typography variant="p" component="div" className="typo__text">
                <b>Title</b> : <span>{showsData.name}</span>
              </Typography>
              {/* shows vote */}
              <Typography variant="p" component="div" className="typo__text">
                <b>IMDB Rating</b> : <span>{showsData.vote_average} / 10</span>
              </Typography>
              {/* total vote count */}
              <Typography variant="p" component="div" className="typo__text">
                <b>Total vote Count</b> : <span>{showsData.vote_count}</span>
              </Typography>
              {/* Release Date */}
              <Typography variant="p" component="div" className="typo__text">
                <b>Release Date</b> : {showsData.first_air_date}
              </Typography>
              {/* shows Tagline */}
              <Typography variant="p" component="div" className="typo__text">
                <b>Tagline</b> : <span>{showsData.tagline}</span>
              </Typography>
              {/* shows overview */}
              <Typography variant="p" component="div" className="typo__text">
                <b>Overview</b> : <span>{showsData.overview}</span>
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

export default TvShows;
