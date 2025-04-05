import React from 'react';
import { Box, Container, Grid, Slide, Typography, useMediaQuery } from '@mui/material';
import PricingCard from 'src/components/pricing-card';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setAction } from 'src/store/reducers/action.reducer';
import PACKAGES from 'src/utils/packages';

const PricingBannerSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery('(max-width:900px)');
  const packageExist = useSelector((state) => state.user?.subscription);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const currentPlan = {
    title: t('trial'),
    price: t('free'),
    features: [t('lowresolution'), t('unlimitedchanges')],
  };

  const handleFreePlan = () => {
    if (!user) {
      dispatch(
        setAction({
          action: null,
          path: null,
          packageName: null,
        })
      );
      navigate('/signup');
    } else {
      dispatch(
        setAction({
          action: null,
          path: null,
          packageName: null,
        })
      );
      toast.info('You are not allowed to perform this action');
    }
  };

  return (
    <Box height={1} color="white" pt={10}>
      <Container maxWidth="lg">
        <Box mb={2}>
          <Slide direction="bottom" in timeout={1000}>
            <Typography
              sx={{ textShadow: '5px 8px 4px rgba(0, 0, 0, 0.45)' }}
              fontSize={56}
              fontWeight={700}
              lineHeight={1.2}
              component="h1"
            >
              {t('Pricing')}
            </Typography>
          </Slide>
        </Box>
        <Grid container spacing={4} mb={isSmallScreen ? 4 : 0}>
          <Grid item xs={12} md={4} />
          <Grid item xs={12} md={4} className="slide-from-left">
            <PricingCard
              title={currentPlan.title}
              price={currentPlan.price}
              features={currentPlan.features}
              isCurrent={packageExist?.packageId === PACKAGES.FREE}
              handleClick={handleFreePlan}
            />
          </Grid>
          <Grid className="d-sm-none" item xs={12} md={4} textAlign="center">
            <img
              className="slide-from-right"
              src="/assets/banner/pricing-banner.png"
              alt="pricing-banner"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PricingBannerSection;
