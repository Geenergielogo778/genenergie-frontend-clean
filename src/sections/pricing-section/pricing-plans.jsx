import { Box, Container, Grid, Slide } from '@mui/material';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import PricingCard from 'src/components/pricing-card';
import API from 'src/utils/axios';
import PACKAGES from 'src/utils/packages';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { setAction } from 'src/store/reducers/action.reducer';
const PricingPlansSection = () => {
  /**
   *
   * HOOKS
   *
   *
   */
  const [allPackages, setPackages] = useState([]);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const packageId = useSelector((state) => state.user.subscription?.packageId);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  /**
   *
   *
   * HANDLERS
   *
   *
   */

  const fetchAllPackages = async () => {
    try {
      const result = await API.get('/packages');
      const packages = result.data;
      console.log(packages);
      setPackages(packages);
    } catch (error) {
      console.log(error);
      toast.error('Error while fetching packages');
    }
  };

  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

  // Initiate to checkout
  const createCheckout = async (id) => {
    try {
      const stripe = await stripePromise;
      const { data } = await API.post('/payment/create-payment-intent', { id });
      console.log(data);
      const checkout = await stripe.redirectToCheckout({
        sessionId: data.id,
      });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  /**
   * Handle The Payment Flow
   * @param {*} planId
   */
  const handlePaymentFlow = (planId) => {
    if (user) {
      createCheckout(planId);
    } else {
      // action: string,
      // path: string
      // packageName: string
      dispatch(
        setAction({
          action: 'PAYMENT',
          path: null,
          packageName: planId,
        })
      );
      navigate('/signup');
    }
  };

  /**
   *
   *
   * LIFECYCLE
   *
   *
   */

  useEffect(() => {
    fetchAllPackages();
  }, []);

  /**
   *
   *
   * Component Rendering here
   *
   */
  return (
    <Box>
      <Container maxWidth="lg">
        <Slide direction="up" in timeout={1000}>
          <Grid container spacing={4}>
            {allPackages.length > 0 &&
              allPackages.map((plan, index) => (
                <Grid item xs={12} md={6} lg={4}>
                  <PricingCard
                    key={index}
                    title={plan.name}
                    price={plan.price}
                    features={plan.description}
                    icon={plan.icon}
                    id={plan.id}
                    isCurrent={plan.packageSku === packageId}
                    handleClick={
                      plan.packageSku === packageId ? null : () => handlePaymentFlow(plan._id)
                    }
                  />
                </Grid>
              ))}
          </Grid>
        </Slide>
      </Container>
    </Box>
  );
};

export default PricingPlansSection;
