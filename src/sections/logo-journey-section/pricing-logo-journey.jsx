import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import CreateLogoInput from 'src/components/create-logo-input/create-logo-input';
import { useTranslation } from 'react-i18next';

const PricingJourneySection = () =>{ 
  const { t } = useTranslation();
  return  (

  <Box pt="60px" pb="180px" position="relative">
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
  </Box>
)};

export default PricingJourneySection;
