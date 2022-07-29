import React from "react";
import "./styles/PopularShows.css";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { Card, CardContent, Typography, CardMedia, Grid } from "@mui/material";

// popular Shows data cames from Home component with props
const PopularShows = ({ shows }) => {
  // below api is for fetching image poster
  const getImgPath = (path) => `https://image.tmdb.org/t/p/original/${path}`;

  return (
    <Grid
      item
      lg
      md
      sm
      xs
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Link to={`shows/${shows.id}`}>
        {/* card component from material ui */}
        <Card
          style={{
            width: 280,
            height: 400,
            marginTop: 10,
            marginBottom: 10,
            position: "relative",
            transition: "all .5s",
          }}
        >
          {/* card media with img from API */}
          <CardMedia
            component="img"
            height="400"
            width="250"
            image={getImgPath(shows.poster_path)}
            className="card__media"
          />
          <CardContent
            style={{
              position: "absolute",
              top: 0,
              right: 0,
            }}
          >
            <Typography component="div" className="div__star">
              <StarIcon
                sx={{
                  color: "yellow",
                  position: "relative",
                }}
              />
              {shows.vote_average} / 10
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

export default PopularShows;
