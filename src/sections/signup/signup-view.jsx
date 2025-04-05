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

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import { FormControl, FormHelperText, Grid, OutlinedInput } from '@mui/material';
import { RouterLink } from 'src/routes/components';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from '../../utils/axios';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

// ----------------------------------------------------------------------

export default function SignUpView() {
  const { t } = useTranslation();
  // const theme = useTheme();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const renderForm = (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().max(255).required(t('namerequired')),
        email: Yup.string().email('Must be a valid email').max(255).required(t('emailrequired')),
        password: Yup.string().max(255).required(t('pswdrequired')),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match') // Ensure passwords match
          .required(t('confirmpswdrequired')),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        console.log('values', values);
        try{
          setSubmitting(true);
          const response = await axios.post('/auth/register', values);
          if(response.status == 200){
            console.log("User Created Success")
            toast.success("User Created Success");
            window.location.href = "/login";
          }
          setSubmitting(false);

        }catch(e){
          console.log(e.response.data.error,"error");
          toast.error(e.response.data.error);
        }
        // try {
        //   if (scriptedRef.current) {
        //     setStatus({ success: true });
        //     setSubmitting(false);
        //   }
        // } catch (err) {
        //   console.error(err);
        //   if (scriptedRef.current) {
        //     setStatus({ success: false });
        //     setErrors({ submit: err.message });
        //     setSubmitting(false);
        //   }
        // }
      }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Box width={{ md: '60%', sm: '70%', xs: '100%' }} mx="auto" px={3}>
            <FormControl fullWidth error={Boolean(touched.name && errors.name)} sx={{ mb: 3 }}>
              {/* <InputLabel htmlFor="name" sx={{ color: 'white' }}>
                Name
              </InputLabel> */}
              <OutlinedInput
                id="name"
                type="text"
                value={values.name}
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder={t('name')}
                endAdornment={
                  <InputAdornment position="end">
                    <Iconify sx={{ color: '#00000099' }} icon="octicon:person-24" />
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
              {touched.name && errors.name && (
                <FormHelperText error id="name">
                  {errors.name}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ mb: 3 }}>
              {/* <InputLabel htmlFor="email" sx={{ color: 'white' }}>
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

            <FormControl
              fullWidth
              error={Boolean(touched.password && errors.password)}
              sx={{ mb: 3 }}
            >
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
            <FormControl
              fullWidth
              error={Boolean(touched.confirmPassword && errors.confirmPassword)}
              sx={{ mb: 1 }}
            >
              {/* <InputLabel htmlFor="confirmPassword" sx={{ color: 'white' }}>
                Confirm Password
              </InputLabel> */}
              <OutlinedInput
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                value={values.confirmPassword}
                name="confirmPassword"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      edge="end"
                    >
                      <Iconify
                        sx={{ color: '#00000099' }}
                        icon={showConfirmPassword ? 'mdi-light:eye' : 'mdi-light:eye-off'}
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
                placeholder={t('confirmpswd')}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <FormHelperText error id="confirmPassword">
                  {errors.confirmPassword}
                </FormHelperText>
              )}
            </FormControl>
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
                {t('signup')}
              </LoadingButton>

              <Typography color="white" variant="body2" textAlign="center" sx={{ mt: 2, mb: 5 }}>
                {t('alreadyaccount')}
                <Link component={RouterLink} href="/login" variant="subtitle2" sx={{ ml: 0.5 }}>
                  {t('login')}
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
      <Grid item md={6} xs={12}>
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
            {t('createaccount')}
          </Typography>

          <Box height={1}>{renderForm}</Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
