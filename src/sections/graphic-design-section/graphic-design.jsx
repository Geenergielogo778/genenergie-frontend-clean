import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
 
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
 
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
 
const GraphicDesignSection = ({ heading }) => {
  const { t } = useTranslation();
 
 
 
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {heading && (
        <Box py="60px" position="relative">
          <Box px={2}>
            <Typography
              lineHeight={1.5}
              mb={4}
              textAlign="center"
              color="white"
              fontSize={56}
              fontWeight={700}
            >
              {t('HowitWorks')}
            </Typography>
          </Box>
          <img
            className="d-sm-none"
            width="300px"
            height="300px"
            style={{ position: 'absolute', top: '-100px', right: '70px', zIndex: -1 }}
            src="/assets/section-shapes/how-it-works/top_right.png"
            alt="top right logo"
          />
          <img
            className="d-sm-none"
            width="180px"
            height="250px"
            style={{ position: 'absolute', left: 0, bottom: '-147px', zIndex: 1 }}
            src="/assets/section-shapes/how-it-works/bottom_left.png"
            alt="bottom left logo"
          />
        </Box>
      )}
      <Box
        sx={{
          background: 'white',
          pb: '130px',
          position: 'relative',
          backgroundImage: { lg: `url("/assets/how-it-works/how_it-works_bg.png")`, xs: 'none' },
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img
          width="100%"
          height="200px"
          style={{ position: 'absolute', top: '0' }}
          src="/assets/shape_downward_primary.png"
          alt="Background Image"
        />
       
        <Container maxWidth="lg">
          <Grid
            container
            columnSpacing={5}
            rowSpacing={8}
            alignItems="center"
            pt={{ md: '90px', xs: '120px' }}
          >
             <Grid item xs={12} md={12} >
            <Typography lineHeight={1} fontSize={44} fontWeight={700} color="primary"  sx={{ mt: 4 }} >
                  {t('graphicDesignMainHeading')}
                </Typography>
            </Grid>
            <Grid item xs={12} md={6} order={{ md: 1, xs: 2 }}>
              <img
                data-aos="fade-right"
                data-aos-duration="1000"
                src="/assets/additional-services/graphicDesign/logo.png"
                alt="logo-name"
              />
            </Grid>
            <Grid item xs={12} md={6} order={{ md: 2, xs: 1 }}>
              <Stack spacing={1} data-aos="fade-left" data-aos-duration="1000">
                <Typography lineHeight={1} fontSize={44} fontWeight={700} color="primary">
                  {t('graphicDesignOne')}
                </Typography>
                <Typography fontSize={20} fontWeight={400} mt={0}>
                  {t('graphicDesignOneContent')}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} order={{ md: 3, xs: 3 }}>
              <Stack spacing={1} data-aos="fade-right" data-aos-duration="1000">
                <Typography lineHeight={1.2} fontSize={44} fontWeight={700} color="primary">
                  {t('graphicDesignTwo')}
                </Typography>
                <Typography fontSize={20} fontWeight={400} mt={0}>
                  {t('graphicDesignTwoContent')}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} order={{ md: 4, xs: 4 }}>
              <img
                data-aos="fade-left"
                data-aos-duration="1000"
                src="/assets/additional-services/graphicDesign/g2.png"
                alt="logo-name"
              />
            </Grid>
            <Grid item xs={12} md={6} order={{ md: 5, xs: 6 }}>
              <img
                data-aos="fade-right"
                data-aos-duration="1000"
                src="/assets/additional-services/graphicDesign/g3.png"
                alt="logo-name"
              />
            </Grid>
            <Grid item xs={12} md={6} order={{ md: 6, xs: 5 }}>
              <Stack spacing={1} data-aos="fade-left" data-aos-duration="1000">
                <Typography lineHeight={1.2} fontSize={44} fontWeight={700} color="primary">
                  {t('graphicDesignThree')}
                </Typography>
                <Typography fontSize={20} fontWeight={400} mt={0}>
                  {t('graphicDesignThreeContent')}{' '}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} order={{ md: 7, xs: 7 }}>
              <Stack spacing={1} data-aos="fade-right" data-aos-duration="1000">
                <Typography lineHeight={1.2} fontSize={44} fontWeight={700} color="primary">
                  {t('graphicDesignFour')}{' '}
                </Typography>
                <Typography fontSize={20} fontWeight={400} mt={0}>
                  {t('graphicDesignFourContent')}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} order={{ md: 8, xs: 8 }}>
              <img
                data-aos="fade-left"
                data-aos-duration="1000"
                src="/assets/additional-services/graphicDesign/g4.png"
                alt="logo-name"
              />
            </Grid>
            <Grid item xs={12} md={6} order={{ md: 9, xs: 10 }}>
              <img
                data-aos="fade-right"
                data-aos-duration="1000"
                src="/assets/additional-services/graphicDesign/g5.png"
                alt="logo-name"
              />
            </Grid>
            <Grid item xs={12} md={6} order={{ md: 10, xs: 9 }}>
              <Stack spacing={1} data-aos="fade-left" data-aos-duration="1000">
                <Typography lineHeight={1.2} fontSize={44} fontWeight={700} color="primary">
                  {t('graphicDesignFive')}
                </Typography>
                <Typography fontSize={20} fontWeight={400} mt={0}>
                  {t('graphicDesignFiveContent')}{' '}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} order={{ md: 11, xs: 11 }}>
              <Stack spacing={1} data-aos="fade-right" data-aos-duration="1000">
                <Typography lineHeight={1.2} fontSize={44} fontWeight={700} color="primary">
                  {t('graphicDesignSix')}{' '}
                </Typography>
                <Typography fontSize={20} fontWeight={400} mt={0}>
                  {t('graphicDesignSixContent')}{' '}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} order={{ md: 12, xs: 12 }}>
              <img
                data-aos="fade-left"
                data-aos-duration="1000"
                src="/assets/additional-services/graphicDesign/g6.png"
                alt="logo-name"
              />
            </Grid>
            <Grid item xs={12} md={6} order={{ md: 13, xs: 14 }}>
              <img
                data-aos="fade-right"
                data-aos-duration="1000"
                src="/assets/additional-services/graphicDesign/g7.png"
                alt="logo-name"
              />
            </Grid>
            <Grid item xs={12} md={6} order={{ md: 14, xs: 13 }}>
              <Stack spacing={1} data-aos="fade-left" data-aos-duration="1000">
                <Typography lineHeight={1.2} fontSize={44} fontWeight={700} color="primary">
                  {t('graphicDesignSeven')}{' '}
                </Typography>
                <Typography fontSize={20} fontWeight={400} mt={0}>
                  {t('graphicDesignSevenContent')}{' '}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
 
GraphicDesignSection.propTypes = {
  heading: PropTypes.bool,
};
export default GraphicDesignSection;