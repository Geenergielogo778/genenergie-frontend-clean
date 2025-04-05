import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Fade, Grid, Stack, Typography } from '@mui/material';
import CreateLogoInput from 'src/components/create-logo-input/create-logo-input';

const BannerSection = ({ image, headingTitle, heading, description, minHeight, hideInput }) => {
  
  return (
  <Box height={1} color="white" minHeight={minHeight}>
    <Container
      maxWidth="lg"
      sx={{
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        minHeight,
      }}
    >
      <Grid container>
        <Grid item xs={12} md={6}>
          <Stack>
            {headingTitle && (
              <Typography fontSize={20} fontWeight={400}>
                {headingTitle}
              </Typography>
            )}
            <Typography
              sx={{ textShadow: '5px 8px 4px rgba(0, 0, 0, 0.45)' }}
              fontSize={56}
              fontWeight={700}
              lineHeight={1.2}
              component="h1"
            >
              {heading}
            </Typography>
            <Typography fontSize={20} lineHeight={1.3} fontWeight={300} my={2}>
              {description}
            </Typography>
            {!hideInput && <CreateLogoInput />}
          </Stack>
        </Grid>
        {/* <Grid item xs={0} lg={1} /> */}
        <Grid item xs={12} md={6} className="d-sm-none">
          <Fade in timeout={1000}>
            <img
              style={{ position: 'absolute', top: 0, right: 0, width: '520px' }}
              src={image}
              alt={heading}
            />
          </Fade>
        </Grid>
      </Grid>
    </Container>
    <img
      className="d-sm-none"
      width="250px"
      height="auto"
      style={{ position: 'absolute', top: '40px', left: '35%' }}
      src="/assets/section-shapes/banner/top_center.png"
      alt="top center logo"
    />
    <img
      className="d-sm-none"
      width="130px"
      height="auto"
      style={{ position: 'absolute', left: 0, bottom: '-60px' }}
      src="/assets/section-shapes/banner/bottom_left.png"
      alt="bottom left logo"
    />
    <img
      className="d-sm-none"
      width="180px"
      height="250px"
      style={{ position: 'absolute', right: 0, bottom: '20px' }}
      src="/assets/section-shapes/banner/bottom_right.png"
      alt="bottom right logo"
    />
  </Box>
)};

BannerSection.propTypes = {
  image: PropTypes.string,
  headingTitle: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  minHeight: PropTypes.string,
  hideInput: PropTypes.bool,
};

export default BannerSection;
