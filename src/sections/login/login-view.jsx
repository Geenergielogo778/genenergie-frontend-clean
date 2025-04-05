import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
// import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

// import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import API from 'src/utils/axios';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import { FormControl, FormHelperText, Grid, OutlinedInput } from '@mui/material';
import { RouterLink } from 'src/routes/components';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoggeInUser, setLoggedInToken, setSubscription } from 'src/store/reducers/userReducer';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { loadStripe } from '@stripe/stripe-js';

// ----------------------------------------------------------------------

export default function LoginView() {
  const { t } = useTranslation();
  // const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const actions = useSelector((state) => state.action);

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

  const renderForm = (
    <Formik
      initialValues={{
        email: '',
        password: '',
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        password: Yup.string().max(255).required('Password is required'),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          setSubmitting(true);
          const response = await API.post('/auth/login', values);

          if (response.status == 200) {
            const user = response.data.user;
            const token = response.data.token;
            const subscription = response.data.user.subscription;
            dispatch(setLoggeInUser(user));
            dispatch(setLoggedInToken(token));
            dispatch(setSubscription(subscription));
            const previousRoute = localStorage.getItem('previousRoute');

            if (actions.action === 'PAYMENT' && actions.packageName !== subscription.packageId) {
              createCheckout(actions.packageName);
            } else if (previousRoute) {
              navigate(previousRoute);
            } else {
              navigate('/profile');
            }
          }
        } catch (e) {
          console.log(e.response.data.error);
          toast.error(e.response.data.error);
        }
      }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Box width={{ md: '60%', sm: '70%', xs: '100%' }} mx="auto" px={3}>
            <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ mb: 3 }}>
              {/* <InputLabel htmlFor="email" sx={{ color: '#00000099' }}>
                Email
              </InputLabel> */}
              <OutlinedInput
                id="email"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder={t('email')}
                fullWidth
                endAdornment={
                  <InputAdornment position="end">
                    <Iconify sx={{ color: '#00000099' }} icon="ph:envelope-thin" />
                  </InputAdornment>
                }
                // sx={{ color: 'white' }}
                sx={{
                  color: '#00000099',
                  background: 'white',
                  boxShadow:
                    '5px 5px 7.2px 0px rgba(0, 0, 0, 0.25), 5px 5px 11px 0px rgba(0, 0, 0, 0.25) inset',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                  },
                  // '&:hover .MuiOutlinedInput-notchedOutline': {
                  //   borderColor: 'white',
                  // },
                  // '&:focused .MuiOutlinedInput-notchedOutline': {
                  //   borderColor: 'white',
                  // },
                }}
              />
              {touched.email && errors.email && (
                <FormHelperText error id="email">
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth error={Boolean(touched.password && errors.password)}>
              {/* <InputLabel htmlFor="password" sx={{ color: 'white' }}>
                Password
              </InputLabel> */}
              <OutlinedInput
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      <Iconify
                        sx={{ color: '#00000099' }}
                        icon={showPassword ? 'mdi-light:eye' : 'mdi-light:eye-off'}
                      />
                    </IconButton>
                  </InputAdornment>
                }
                sx={{
                  color: '#00000099',
                  background: 'white',
                  boxShadow:
                    '5px 5px 7.2px 0px rgba(0, 0, 0, 0.25), 5px 5px 11px 0px rgba(0, 0, 0, 0.25) inset',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                  },
                  // '&:hover .MuiOutlinedInput-notchedOutline': {
                  //   borderColor: 'white',
                  // },
                  // '&:focused .MuiOutlinedInput-notchedOutline': {
                  //   borderColor: 'white',
                  // },
                }}
                placeholder={t('password')}
              />
              {touched.password && errors.password && (
                <FormHelperText error id="password">
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>
            <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 1 }}>
              <Link
                onClick={() => navigate('/forgot-password')}
                variant="subtitle2"
                underline="hover"
              >
                {t('forgotpassword')}
              </Link>
            </Stack>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                // color="inherit"
                loading={isSubmitting}
                sx={{
                  borderRadius: '12px',
                  fontSize: '20px',
                  fontWeight: '600',
                  background: '#E4002B',
                  py: 1.5,
                  boxShadow:
                    '8px 6px 7.3px 0px rgba(75, 14, 14, 0.25) inset, -7px -6px 7.5px 0px rgba(74, 17, 17, 0.25) inset',
                }}
              >
                {t('login')}
              </LoadingButton>

              <Typography color="white" variant="body2" textAlign="center" sx={{ mt: 2, mb: 5 }}>
                {t('donthaveaccount')}
                <Link component={RouterLink} href="/signup" variant="subtitle2" sx={{ ml: 0.5 }}>
                  {t('signup')}
                </Link>
              </Typography>
            </Box>
          </Box>
        </form>
      )}
    </Formik>
  );

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Grid container alignItems="center" minHeight="100vh">
      <Grid
        className="d-sm-none"
        item
        md={5.5}
        bgcolor="white"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <img
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          src="/assets/auth_page_avatar.svg"
          alt="login avatar"
        />
      </Grid>
      <Grid item md={6} sm={12}>
        <img
          className="d-sm-none"
          style={{ height: '100%', position: 'absolute', left: '45%', top: 0 }}
          src="/assets/auth_page_shape.png"
          alt="Background Image"
        />
        <Stack height={1} data-aos="zoom-in-up" data-aos-duration="1000">
          <Typography
            variant="h2"
            lineHeight={1}
            color="white"
            fontSize={56}
            fontWeight={700}
            my={5}
            textAlign="center"
            px={3}
          >
            {t('welcomeback')}
          </Typography>

          <Box height={1}>{renderForm}</Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
