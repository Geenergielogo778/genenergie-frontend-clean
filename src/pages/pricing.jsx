import { Box } from '@mui/material';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import CustomersSection from 'src/sections/customers-section/customers';
import PricingJourneySection from 'src/sections/logo-journey-section/pricing-logo-journey';
import PricingBannerSection from 'src/sections/pricing-banner-section/pricing-banner';
import PricingPlansSection from 'src/sections/pricing-section/pricing-plans';
import { setAction } from 'src/store/reducers/action.reducer';
import { setSubscription } from 'src/store/reducers/userReducer';
import API from 'src/utils/axios';

// ----------------------------------------------------------------------

export default function PricingPage() {
  const router = useLocation();
  const query = new URLSearchParams(router.search);
  const session_id = query.get('session_id');
  const package_id = query.get('package_id');
  const user = useSelector((state) => state.user?.user?._id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const verifyPayment = async () => {
    console.log({ session_id, package_id, user });
    const result = await API.post('/payment/confirm-payment', {
      session_id,
      package_id,
      user,
    });
    const subscription = result.data;
    dispatch(setSubscription(subscription));
    dispatch(
      setAction({
        action: null,
        path: null,
        packageName: null,
      })
    );
    navigate('/profile');
  };

  useEffect(() => {
    if (session_id && package_id) {
      verifyPayment();
    }
  }, []);

  return (
    <>
      <Helmet>
        <title> Logo Pricing: Find the Perfect Plan for Your Budget </title>
        <link rel="canonical" href="https://www.geenergielogo.com/pricing/" />
      </Helmet>

      <Box>
        <PricingBannerSection />
        <PricingPlansSection />
        <PricingJourneySection />
        <CustomersSection backgroundColor="white" />
      </Box>
    </>
  );
}
