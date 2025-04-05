import { Box, Container, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import Iconify from 'src/components/iconify/iconify';
import API from 'src/utils/axios';

const Footer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [profiles, setProfiles] = useState(undefined);
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  const fetchProfiles = async () => {
    try {
      const result = await API.get('/profile');
      if (result.status === 200) {
        setProfiles(result.data);
      }
      return result.data;
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchProfilesMemo = useMemo(() => fetchProfiles(), []);

  return (
    <>
      <Box
        sx={{
          color: (theme) => theme.palette.primary.main,
          background: 'white',
          borderRadius: '100px 100px 0 0',
          boxShadow:
            '0px 8px 7.2px 0px rgba(0, 0, 0, 0.25), 0px 8px 11px 0px rgba(0, 0, 0, 0.25) inset',
          borderBottom: `2px solid #FF6C0F `,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5} sx={{ pt: 5, pb: 3 }}>
            <Grid item md={2} sm={6} xs={12}>
              <Stack>
                <Typography fontSize="18px" fontWeight={700} mb={1}>
                  {t('Destination')}
                </Typography>
                <Typography fontSize="16px" fontWeight={500}>
                  {t('Canada')}
                </Typography>
                <Typography fontSize="16px" fontWeight={500}>
                  {t('Alaska')}
                </Typography>
                <Typography fontSize="16px" fontWeight={500}>
                  {t('France')}
                </Typography>
                <Typography fontSize="16px" fontWeight={500}>
                  {t(' Iceland ')}
                </Typography>
              </Stack>
            </Grid>
            <Grid item md={2} sm={6} xs={12}>
              <Stack>
                <Typography fontSize="18px" fontWeight={700} mb={1}>
                  {t('Aboutus')}
                </Typography>
                <Typography fontSize="16px" fontWeight={500}>
                  {t('Story')}
                </Typography>
                <Typography fontSize="16px" fontWeight={500}>
                  {t('Workwithus')}
                </Typography>
              </Stack>
            </Grid>
            {isSmallScreen ? (
              <Grid item md={4} sm={12} order={-1}>
                <Box width={1} textAlign="center">
                  <img width={265} src="/assets/logo.svg" alt="Logo" />
                </Box>
              </Grid>
            ) : (
              <Grid item md={4} sm={12}>
                <Box width={1} textAlign="center">
                  <img width={265} src="/assets/logo.svg" alt="Logo" />
                </Box>
              </Grid>
            )}
            <Grid item md={2} sm={6} xs={12}>
              <Stack>
                <Typography fontSize="18px" fontWeight={700} mb={1}>
                  {t('ContactUs')}
                </Typography>
                <Typography
                  onClick={() => navigate('/privacy-policy')}
                  fontSize="16px"
                  fontWeight={500}
                  sx={{ cursor: 'pointer' }}
                >
                  {t('privacypolicy')}
                </Typography>
                <Typography
                  onClick={() => navigate('/terms-conditions')}
                  fontSize="16px"
                  fontWeight={500}
                  sx={{ cursor: 'pointer' }}
                >
                  {t('termsconditions')}
                </Typography>
              </Stack>
            </Grid>
            <Grid item md={2} sm={6} xs={12}>
              <Stack>
                <Typography fontSize="18px" fontWeight={700} mb={1}>
                  {t('OurActivities')}
                </Typography>
                <Typography fontSize="16px" fontWeight={500}>
                  {t('Makinglogos')}
                </Typography>
                <Typography fontSize="16px" fontWeight={500}>
                  {t('BrandingServices')}
                </Typography>
                <Typography fontSize="16px" fontWeight={500}>
                  {t('Multiactivities')}
                </Typography>
                <Typography fontSize="16px" fontWeight={500}>
                  {t('DesignPackage')}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ background: 'white' }}>
        <Container>
          {profiles && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: { xs: 'center', md: 'space-between' },
                alignItems: 'center',
              }}
              pt="22px"
              pb="16px"
            >
              <Typography variant="body2">
                Designed and Developed by{' '}
                <a
                  style={{ textDecoration: 'none' }}
                  href="https://code-xperts.com/"
                  target="_blank"
                  title="Code Xperts - Quality Conscious Developers"
                  rel="noopener noreferrer"
                >
                  <Typography
                    component="span"
                    sx={{ color: 'primary.main', textDecoration: 'none' }}
                  >
                    Code Xperts
                  </Typography>
                </a>
              </Typography>
              <Box>
                <a target="_blank" href={profiles?.facebook}>
                  <Iconify
                    sx={{ color: (theme) => theme.palette.primary.main, mr: 1 }}
                    icon="ic:baseline-facebook"
                  />
                </a>
                <a target="_blank" href={profiles?.twitter}>
                  <Iconify
                    sx={{ color: (theme) => theme.palette.primary.main, mr: 1 }}
                    icon="mdi:twitter"
                  />
                </a>
                <a target="_blank" href={profiles?.youtube}>
                  <Iconify
                    sx={{ color: (theme) => theme.palette.primary.main, mr: 1 }}
                    icon="mdi:youtube"
                  />
                </a>
                <a target="_blank" href={profiles?.instagram}>
                  <Iconify
                    sx={{ color: (theme) => theme.palette.primary.main }}
                    icon="ri:instagram-fill"
                  />
                </a>
              </Box>
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
};

export default Footer;
