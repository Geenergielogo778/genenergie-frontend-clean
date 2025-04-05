import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CreateLogoInput from 'src/components/create-logo-input/create-logo-input';

const LogoJourneySection = () => {
  const { t } = useTranslation();

  return(
  <Box py="60px" position="relative">
    <img
      width="100%"
      height="200px"
      style={{ position: 'absolute', top: '-140px' }}
      src="/assets/shape_upward_primary.png"
      alt="Background Image"
    />
    <Container maxWidth="lg">
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6} textAlign="center">
          <Typography textAlign="center" color="white" fontSize={32} fontWeight={400}>
          {t('GetStartedon')}
          </Typography>
          <Typography
            lineHeight={1}
            mb={4}
            textAlign="center"
            color="white"
            fontSize={44}
            fontWeight={700}
          >
           {t('LogoJourney')}
          </Typography>

          <CreateLogoInput />
        </Grid>
      </Grid>
    </Container>
    <img
      width="100%"
      height="200px"
      style={{ position: 'absolute', bottom: '-155px' }}
      src="/assets/shape_downward_primary.png"
      alt="Background Image"
    />
    <img
      className="d-sm-none"
      width="180px"
      height="250px"
      style={{ position: 'absolute', top: '-120px', right: 0 }}
      src="/assets/section-shapes/logo-journey/top_right.png"
      alt="top right logo"
    />
    <img
      className="d-sm-none"
      width="180px"
      height="250px"
      style={{ position: 'absolute', left: 0, top: '40px' }}
      src="/assets/section-shapes/logo-journey/left.png"
      alt="bottom left logo"
    />
  </Box>
);
};

export default LogoJourneySection;
