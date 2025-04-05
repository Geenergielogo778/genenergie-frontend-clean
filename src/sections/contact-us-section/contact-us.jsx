import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUsSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box py="160px" sx={{ background: '#fff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent="space-between">
          <Grid item xs={12} md={7} data-aos="fade-right" data-aos-duration="1000">
            <Typography mb={0} color="primary" fontSize={56} fontWeight={700}>
            {t('ContactUs')}
            </Typography>
            <Typography mb={3} color="black" fontSize={20} fontWeight={500}>
            {t('HowContactUs')}            </Typography>

            <Button
              variant="contained"
              onClick={() => navigate('/contact-us')}
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
              {t('GetStarterdbtn')}
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              data-aos="fade-left"
              data-aos-duration={1000}
              src="/assets/contact-us/contact_us.png"
              alt="Contact Us"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUsSection;
