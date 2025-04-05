import { Box, Button, Container, Grid, Slide, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSelector } from 'react-redux';
import { COLORCHECK, renderLogos } from 'src/utils/logo-concepts';

import logoConcepts from 'src/utils/logo-concepts';
import { FirstLetterSingle, LogoTitleOnly } from 'src/components/logo-concepts';
import { useTranslation } from 'react-i18next';
import Watermark from 'src/components/watermark';
const AboutLogoSection = () => {
  const { t } = useTranslation();
  const user = useSelector((state) => state.user.user);
  const logo = useSelector((state) => state.generatedLogos.value.selectedLogoConcept);

  const navigate = useNavigate();
  const handlePreviewFlow = () => {};
  useEffect(() => {
    AOS.init();
    if (!logo) {
      navigate('/logo-creation');
    }
  }, []);
  return (
    <Box position="relative" pb="50px">
      <Container>
        <Slide direction="up" in timeout={1000}>
          <Grid container my={8}>
            <Grid item xs={12}>
              <Box
                id="logo-preview"
                p={7}
                width={1}
                height={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                bgcolor={
                  logo.logotype == logoConcepts.GRADIENT_TEXT ? 'white' : logo.color.backgroundColor
                }
                borderRadius="13px 13px 0px 0px"
                boxShadow="8px 1px 11px 0px rgba(0, 0, 0, 0.25) inset"
              >
                <Box
                  component={'span'}
                  sx={{ position: 'relative' }}
                  id="logo-preview-download"
                  style={{ padding: 10 }}
                >
                  <Watermark />
                  {renderLogos[logo.logotype]({
                    title: logo.title,
                    font: logo.font,
                    colors: logo.color,
                    slogan: logo.tagline,
                    svgCode: logo.iconCode,
                    fontSvg: logo.fontSvg,
                    iconColor: COLORCHECK.includes(logo?.logotype)
                      ? logo?.color?.backgroundColor
                      : logo.color.foregroundColor,
                  })}
                </Box>
              </Box>
            </Grid>
            {/* <Grid item xs={12} md={4}>
              <Box
                p={5}
                width={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                bgcolor={logo.color.backgroundColor}
                borderRadius="0px 13px 0px 0px"
                boxShadow="8px 8px 11px 0px rgba(0, 0, 0, 0.25) inset"
              >
                <LetterSingle
                  title={logo.title}
                  font={logo.font}
                  colors={logo.color}
                  slogan={logo.tagline}
                />
               
              </Box>
              <Box
                p={5}
                width={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                bgcolor={logo.color.foregroundColor}
              >
                <TitleLogo
                  title={logo.title}
                  font={logo.font}
                  colors={logo.color}
                  slogan={logo.tagline}
                />
              </Box>
            </Grid> */}
            <Grid item xs={12}>
              <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="space-between"
                alignItems="center"
                px={5}
                py={3}
                bgcolor="white"
                borderRadius="0px 0px 13px 13px"
                boxShadow="8px 8px 7.2px 0px rgba(0, 0, 0, 0.25)"
                gap={2}
              >
                <Box display="flex" flexWrap="wrap" gap="15px">
                  <Box display="flex">
                    <Box
                      width="46px"
                      height="36px"
                      bgcolor={logo.color?.foregroundColor}
                      borderRadius="5px 0px 0px 5px"
                    />
                    <Box width="46px" height="36px" bgcolor={logo.color?.backgroundColor} />
                  </Box>
                  <Typography
                    whiteSpace="nowrap"
                    fontSize="24px"
                    fontWeight={600}
                    className={logo.font}
                  >
                    A B C D E F G H
                  </Typography>
                </Box>
                {user ? (
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => navigate('/edit-logo')}
                    sx={{
                      '&:hover': { border: '2px solid black' },
                      border: '2px solid black',
                      color: 'black',
                      fontWeight: 600,
                      fontSize: '18px',
                      borderRadius: '12px',
                      minWidth: '170px',
                      minHeight: '46px',
                      // boxShadow:
                      //   '8px 8px 7.2px 0px rgba(0, 0, 0, 0.25), 8px 8px 11px 0px rgba(0, 0, 0, 0.25) inset',
                    }}
                  >
                    {t('previewedit')}
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => navigate('/pricing')}
                    sx={{
                      '&:hover': { border: '2px solid black' },
                      border: '2px solid black',
                      color: 'black',
                      fontWeight: 600,
                      fontSize: '18px',
                      borderRadius: '12px',
                      minWidth: '170px',
                      minHeight: '46px',
                      // boxShadow:
                      //   '8px 8px 7.2px 0px rgba(0, 0, 0, 0.25), 8px 8px 11px 0px rgba(0, 0, 0, 0.25) inset',
                    }}
                  >
                    {t('Buy')}
                  </Button>
                )}
              </Box>
            </Grid>
          </Grid>
        </Slide>

        <Box my={8}>
          <Typography
            data-aos="zoom-in"
            data-aos-duration="5000"
            variant="h1"
            textAlign="center"
            fontSize="56px !important"
            fontWeight={700}
            color="white"
            sx={{ textShadow: '5px 8px 4px rgba(0, 0, 0, 0.45)' }}
          >
            {t('aboutlogo')}
          </Typography>
        </Box>
        <Grid container alignItems="center" spacing={8} mb={1}>
          <Grid
            data-aos="fade-right"
            data-aos-duration="1000"
            item
            xs={12}
            md={6}
            order={{ md: 1, xs: 2 }}
          >
            <Box
              p={7}
              width={1}
              height={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgcolor={
                logo.logotype == logoConcepts.GRADIENT_TEXT ? 'white' : logo.color.backgroundColor
              }
              borderRadius="13px"
              boxShadow="11px 11px 16.3px 0px rgba(0, 0, 0, 0.19) inset, 6px 6px 6.5px 0px rgba(0, 0, 0, 0.40), -11px -11px 16.3px 0px rgba(0, 0, 0, 0.19) inset"
              minHeight="320px"
            >
              <span style={{ transform: 'scale(0.5)' }}>
                {renderLogos[logo.logotype]({
                  title: logo.title,
                  font: logo.font,
                  colors: logo.color,
                  slogan: logo.tagline,
                  svgCode: logo.iconCode,
                })}
              </span>
            </Box>
          </Grid>
          <Grid
            data-aos="fade-left"
            data-aos-duration="1000"
            item
            xs={12}
            md={6}
            order={{ md: 2, xs: 1 }}
          >
            <Box>
              <Typography
                variant="h1"
                fontSize="46px !important"
                fontWeight={700}
                color="white"
                sx={{ textShadow: '5px 8px 4px rgba(0, 0, 0, 0.45)' }}
              >
                {t('aboutlogo')}
              </Typography>
              <Typography fontSize="24px" fontWeight={400} color="white">
                {t('aboutlogodescription')}
              </Typography>
            </Box>
          </Grid>
          <Grid
            data-aos="fade-right"
            data-aos-duration="1000"
            item
            xs={12}
            md={6}
            order={{ md: 3, xs: 3 }}
          >
            <Box>
              <Typography
                variant="h1"
                fontSize="46px !important"
                fontWeight={700}
                color="white"
                sx={{ textShadow: '5px 8px 4px rgba(0, 0, 0, 0.45)' }}
              >
                {t('yourcolor')}
              </Typography>
              <Typography fontSize="24px" fontWeight={400} color="white">
                {t('colorselection')}
              </Typography>
            </Box>
          </Grid>
          <Grid
            data-aos="fade-left"
            data-aos-duration="1000"
            item
            xs={12}
            md={6}
            order={{ md: 4, xs: 4 }}
          >
            <Grid
              container
              p={5}
              spacing={1}
              justifyContent="space-between"
              alignItems="center"
              bgcolor="#E2E2E2"
              borderRadius="13px"
              boxShadow="11px 11px 16.3px 0px rgba(0, 0, 0, 0.19) inset, 6px 6px 6.5px 0px rgba(0, 0, 0, 0.40), -11px -11px 16.3px 0px rgba(0, 0, 0, 0.19) inset"
              minHeight="320px"
            >
              <Grid item md={5.5} xs={12}>
                <Box bgcolor={logo.color.foregroundColor} borderRadius="10px" height="170px" />
                <Typography fontSize="24px" color="#000">
                  {logo.color.foregroundColor}
                </Typography>
              </Grid>
              <Grid item md={5.5} xs={12}>
                <Box bgcolor={logo.color.backgroundColor} borderRadius="10px" height="170px" />
                <Typography fontSize="24px" color="#000">
                  {logo.color.backgroundColor}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            data-aos="fade-right"
            data-aos-duration="1000"
            item
            xs={12}
            md={6}
            order={{ md: 5, xs: 6 }}
          >
            <Box
              p={7}
              width={1}
              height={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgcolor={logo.color.backgroundColor}
              borderRadius="13px"
              boxShadow="11px 11px 16.3px 0px rgba(0, 0, 0, 0.19) inset, 6px 6px 6.5px 0px rgba(0, 0, 0, 0.40), -11px -11px 16.3px 0px rgba(0, 0, 0, 0.19) inset"
              minHeight="320px"
            >
              <FirstLetterSingle
                title={logo.title}
                font={logo.font}
                colors={logo.color}
                slogan={logo.tagline}
              />
            </Box>
          </Grid>
          <Grid
            data-aos="fade-left"
            data-aos-duration="1000"
            item
            xs={12}
            md={6}
            order={{ md: 6, xs: 5 }}
          >
            <Box>
              <Typography
                variant="h1"
                fontSize="46px !important"
                fontWeight={700}
                color="white"
                sx={{ textShadow: '5px 8px 4px rgba(0, 0, 0, 0.45)' }}
              >
                {t('youricon')}
              </Typography>
              <Typography fontSize="24px" fontWeight={400} color="white">
                {t('iconselection')}.
              </Typography>
            </Box>
          </Grid>
          <Grid
            data-aos="fade-right"
            data-aos-duration="1000"
            item
            xs={12}
            md={6}
            order={{ md: 7, xs: 7 }}
          >
            <Box>
              <Typography
                variant="h1"
                fontSize="46px !important"
                fontWeight={700}
                color="white"
                sx={{ textShadow: '5px 8px 4px rgba(0, 0, 0, 0.45)' }}
              >
                {t('typography')}
              </Typography>
              <Typography fontSize="24px" fontWeight={400} color="white">
                {t('typographyselection')}
              </Typography>
            </Box>
          </Grid>
          <Grid
            data-aos="fade-left"
            data-aos-duration="1000"
            item
            xs={12}
            md={6}
            order={{ md: 8, xs: 8 }}
          >
            <Box
              p={5}
              width={1}
              height={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgcolor="#E2E2E2"
              borderRadius="13px"
              boxShadow="11px 11px 16.3px 0px rgba(0, 0, 0, 0.19) inset, 6px 6px 6.5px 0px rgba(0, 0, 0, 0.40), -11px -11px 16.3px 0px rgba(0, 0, 0, 0.19) inset"
              minHeight="320px"
            >
              <Box>
                <Typography
                  lineHeight={1.2}
                  textAlign="center"
                  fontSize={56}
                  fontWeight={600}
                  color="#000"
                  className={logo.font}
                >
                  <span className={logo.font}> a b c d e f g h</span>
                </Typography>
                <Typography
                  lineHeight={1.2}
                  textAlign="center"
                  fontSize={56}
                  fontWeight={600}
                  color="#000"
                  className={logo.font}
                >
                  <span className={logo.font}> A B C D E F G H</span>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <img
        width="100%"
        height="200px"
        style={{ position: 'absolute', bottom: '-150px' }}
        src="/assets/shape_downward_primary.png"
        alt=""
      />
    </Box>
  );
};

export default AboutLogoSection;
