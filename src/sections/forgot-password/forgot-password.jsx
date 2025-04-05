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
import { setLoggeInUser, setLoggedInToken } from 'src/store/reducers/userReducer';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

// ----------------------------------------------------------------------

export default function ForgotPasswordView() {
  const { t } = useTranslation();
  // const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(0);

  const handleCodeSender = async (email) => {
    try {
      const response = await API.post('/auth/forgot-password', { email });
      if (response.status == 200) return true;
    } catch (e) {
      console.log(e);
      toast.error('Error while sending OTP');
    }
  };
  const handlePasswordReset = async (email, otpToken, password) => {
    try {
      const response = await API.post('/auth/reset-password', {
        email,
        otpToken: parseInt(otpToken),
        password,
      });
      if (response.status === 200) {
        toast.success('Password changed successfully');
        setStep(0);
        navigate('/login');
        return true;
      }
    } catch (error) {
      console.log(error);
      toast.error('Error while resetting password');
    }
  };

  const renderForm = (
    <Formik
      initialValues={{
        email: '',
        otp: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Must be a valid email').max(255).required(t('emailrequired')),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        console.log(values);
        try {
          if (step === 0) {
            const sendOTP = handleCodeSender(values.email);
            if (sendOTP) return setStep(1);
          }
          if (step === 1) {
            if (!values.otp) {
              setErrors({ otp: 'Enter OTP' });
              return;
            }
            const changePassword = handlePasswordReset(values.email, values.otp, values.password);
          }
        } catch (e) {
          console.log(e);
          toast.error(e);
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
                disabled={step === 1}
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

            {step === 1 && (
              <>
                <FormControl fullWidth error={Boolean(touched.password && errors.otp)}>
                  {/* <InputLabel htmlFor="password" sx={{ color: 'white' }}>
                Password
              </InputLabel> */}
                  <OutlinedInput
                    id="otp"
                    type={'number'}
                    value={values.otp}
                    name="otp"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <Iconify sx={{ color: '#00000099' }} icon={'ph:password-light'} />
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
                    placeholder={t('otp')}
                  />
                  {touched.otp && errors.otp && (
                    <FormHelperText error id="otp">
                      {errors.otp}
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
                      mt: 3,
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
                    placeholder="Password"
                  />
                  {touched.password && errors.password && (
                    <FormHelperText error id="password">
                      {errors.password}
                    </FormHelperText>
                  )}
                </FormControl>
              </>
            )}
            {/* <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 1 }}>
              <Link variant="subtitle2" underline="hover">
                Login
              </Link>
            </Stack> */}
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              {step === 0 && (
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
                  {t('sendcode')}
                </LoadingButton>
              )}
              {step === 1 && (
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
                  {t('resetpswd')}
                </LoadingButton>
              )}

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
          alt=""
        />
      </Grid>
      <Grid item md={6} sm={12}>
        <img
          className="d-sm-none"
          style={{ height: '100%', position: 'absolute', left: '45%', top: 0 }}
          src="/assets/auth_page_shape.png"
          alt=""
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
            {t('forgotpswd')}
          </Typography>

          <Box height={1}>{renderForm}</Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
