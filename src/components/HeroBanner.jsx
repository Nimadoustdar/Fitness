import { Box, Button, Typography } from "@mui/material";
import HeroBannerImages from "../assets/images/banner.png";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="26px"
    >
      <Typography color="#ff2625" fontSize="26px" fontWeight="600">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        mb="23px"
        mt="30px"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      >
        Sweat,Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3}>
        Check out the mose effictive exercises for your body
      </Typography>
      <Button
        variant="contained"
        color="error"
        sx={{
          background: "#ff2625",
          padding: "10px",
        }}
        href="#exercises"
      >
        Explore Excercises
      </Button>
      <Typography
        fontWeight={600}
        fontSize="200px"
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: {
            lg: "block",
            xs: "none",
          },
        }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImages} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
