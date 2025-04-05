import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Typography } from '@mui/material';
 
import { useTranslation } from 'react-i18next';
 
const SeoServiceLastSection = ({ hasShape }) => {
  const { t } = useTranslation();
  return (
    <Box pt="50px" pb="100px" position="relative">
      {hasShape && (
        <img
          width="100%"
          height="200px"
          style={{ position: 'absolute', top: '-150px' }}
          src="/assets/shape_upward_primary.png"
          alt="Background Image"
        />
      )}
      <Container maxWidth={false}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8} textAlign="center">
            <Typography
              variant="h2"
              lineHeight={1.2}
              sx={{ textShadow: '5px 8px 4px rgba(0, 0, 0, 0.45)' }}
              mb={4}
              textAlign="center"
              color="white"
              fontSize={56}
              fontWeight={700}
            >
              {t('SeoLastSectionHeading')}
            </Typography>
            <Typography
              variant="body1"
              lineHeight={1.5}
              mb={4}
              textAlign="center"
              color="white"
              fontSize={20}
              fontWeight={500}
            >
              {t('SeoLastSectionDescription')}
            </Typography>
 
            {/* <CreateLogoInput /> */}
          </Grid>
        </Grid>
      </Container>
      <img
        className="d-sm-none"
        width="250px"
        height="auto"
        style={{ position: 'absolute', bottom: '-160px', right: 0 }}
        src="/assets/section-shapes/get-started/bottom_right.png"
        alt="bottom right logo"
      />
    </Box>
  );
};
 
SeoServiceLastSection.propTypes = {
  hasShape: PropTypes.bool,
};
 
export default SeoServiceLastSection;
 