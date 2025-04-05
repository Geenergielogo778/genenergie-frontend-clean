import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const PricingSection = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box py="170px" sx={{ background: '#fff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent="space-between">
          <Grid item xs={12} md={7} data-aos="fade-right" data-aos-duration="1000">
            <Typography mb={0} color="primary" fontSize={44} fontWeight={700}>
            {t('Pricing')}
            </Typography>
            <Typography mb={3} color="black" fontSize={20} fontWeight={500}>
            {t('PricingDetail')}            </Typography>

            <Button
              variant="contained"
              onClick={() => navigate('/pricing')}
              sx={{
                fontWeight: 500,
                fontSize: '18px',
                borderRadius: '12px',
                // px: '36px',
                minWidth: '170px',
                minHeight: '46px',
                boxShadow:
                  '2px 2px 2.7px 0px rgba(0, 0, 0, 0.25), 3px 3px 2.3px 0px rgba(0, 0, 0, 0.25) inset, -3px 3px 2.7px 0px rgba(0, 0, 0, 0.25)',
              }}
            >
              {t('LetBeginbtn')}
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              data-aos="fade-left"
              data-aos-duration="1000"
              src="/assets/pricing/pricing.png"
              alt="Pricing"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PricingSection;
