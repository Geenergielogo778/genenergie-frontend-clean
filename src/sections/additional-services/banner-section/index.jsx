import React from 'react';
import { Box, Container, Fade, Grid, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const BannerSection = () => {
  const { t } = useTranslation();
  return (

  <Box
    height={1}
    color="white"
    display="flex"
    alignItems="center"
    minHeight="500px"
    // overflow="hidden"
    position="relative"
  >
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} lg={8}>
          <Fade in timeout={1000}>
            <Stack>
              <Typography fontSize={20} fontWeight={400}>
                {t('addservices')}
              </Typography>
              <Typography
                sx={{ textShadow: '5px 8px 4px rgba(0, 0, 0, 0.45)' }}
                fontSize={48}
                fontWeight={700}
                lineHeight={1.2}
                component="h1"
              >
               {t('logographics')}
              </Typography>
            </Stack>
          </Fade>
        </Grid>
        <Grid className="d-sm-none" item xs={12} lg={4} position="relative">
          <Box height={1} position="absolute" bottom={135} right={0}>
            <Fade in timeout={1200}>
              <img
                width="100%"
                src="/assets/banner/additional-services-banner.png"
                alt="additional-services-banner"
              />
            </Fade>
          </Box>
        </Grid>
      </Grid>
    </Container>
    <img
      width="100%"
      height="200px"
      style={{ position: 'absolute', bottom: '-170px' }}
      src="/assets/shape_downward_primary.png"
      alt="Background Image"
    />
  </Box>
);}

export default BannerSection;
