import "./styles/Footer.css";
import { Button, Tooltip, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { Box } from "@mui/system";

const Footer = () => {
  return (
    <footer className="footer--parent">
      {/* typography component with logo */}
      <Box className="Box__p__foot" sx={{ textAlign: "center" }}>
        <Typography variant="p" component="div" className="typo__mdi__logo">
          MDI
        </Typography>
      </Box>
      {/* button link to portfolio */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 2,
        }}
      >
        <a href="https://russel-portfolio.web.app/" target="_blank">
          <Button
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "white",
              "&:hover": {
                color: "white",
                borderColor: "white",
              },
            }}
          >
            My Portfolio
          </Button>
        </a>
      </Box>
      {/* icons */}
      <Box
        className="Box__foot__in"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {/* instagram link and icon */}
        <Tooltip title="Instagram">
          <a
            href="https://www.instagram.com/russeldsouza2002/?hl=en"
            target="_blank"
          >
            <InstagramIcon
              className="icons"
              sx={{
                fontSize: "30px",
              }}
            />
          </a>
        </Tooltip>
        {/* linkedin icon and link */}
        <Tooltip title="Linkedin">
          <a
            href="https://www.linkedin.com/in/russel-dsouza-7aa065231/"
            target="_blank"
          >
            <LinkedInIcon
              className="icons"
              sx={{
                fontSize: "30px",
                ml: 2,
              }}
            />
          </a>
        </Tooltip>
        {/* github icon and link */}
        <Tooltip title="Github">
          <a href="https://github.com/RusselDsouza029" target="_blank">
            <GitHubIcon
              className="icons"
              sx={{
                fontSize: "30px",
                ml: 2,
              }}
            />
          </a>
        </Tooltip>
        {/* email icon and email id */}
        <Tooltip title="Email">
          <a href="mailto: russeldsouza456@gmail.com" target="_blank">
            <EmailIcon
              className="icons"
              sx={{
                fontSize: "30px",
                ml: 2,
              }}
            />
          </a>
        </Tooltip>
      </Box>
    </footer>
  );
};

export default Footer;
