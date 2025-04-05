import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import API from 'src/utils/axios';
import { useDispatch, useSelector } from 'react-redux';
// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useState } from 'react';
import Iconify from 'src/components/iconify/iconify';
import { toast } from 'react-toastify';
// ----------------------------------------------------------------------

export default function ChangePasswordForm() {
  const { t } = useTranslation();
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const token = useSelector((state) => state.user.token);
  const theme = useTheme();
  console.log(token, 'token');

  return (
    <Box>
      <Formik
        initialValues={{
          oldPassword: '',
          newPassword: '',
          confirmPassword: '',
        }}
        validationSchema={Yup.object().shape({
          oldPassword: Yup.string().required('Old Password is required'),
          newPassword: Yup.string().max(255).required('New Password is required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('newPassword'), null], 'New Password and Confirm Password must match') // Ensure passwords match
            .required('Confirm Password is required'),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting, resetForm }) => {
          console.log('values', values);
          try {
            const response = await API.post(
              '/auth/change-password',
              {
                oldPassword: values.oldPassword,
                newPassword: values.newPassword,
              },
              {
                headers: {
                  'x-auth-token': `Bearer ${token}`,
                },
              }
            );
            console.log(response);
            if (response.status === 200) {
              toast.success('Password changed successfully');
              resetForm();
              return true;
            }
          } catch (error) {
            console.log(error);
            toast.error('Error: Try again later');
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Box width={1}>
              <FormControl
                fullWidth
                error={Boolean(touched.oldPassword && errors.oldPassword)}
                sx={{ mb: 3 }}
              >
                {/* <InputLabel htmlFor="oldPassword" sx={{ color: theme.palette.primary.main }}>
                    Old Password
                  </InputLabel> */}
                <OutlinedInput
                  id="oldPassword"
                  type={showOldPassword ? 'text' : 'password'}
                  value={values.oldPassword}
                  name="oldPassword"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowOldPassword(!showOldPassword)} edge="end">
                        <Iconify
                          sx={{
                            color:
                              errors.oldPassword && touched.oldPassword
                                ? theme.palette.error.main
                                : '#00000099',
                          }}
                          icon={showOldPassword ? 'mdi-light:eye' : 'mdi-light:eye-off'}
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
                  placeholder={t('currentpswd')}
                />
                {touched.oldPassword && errors.oldPassword && (
                  <FormHelperText error id="oldPassword">
                    {errors.oldPassword}
                  </FormHelperText>
                )}
              </FormControl>
            </Box>
            <Box width={1}>
              <FormControl
                fullWidth
                error={Boolean(touched.newPassword && errors.newPassword)}
                sx={{ mb: 3 }}
              >
                {/* <InputLabel htmlFor="newPassword" sx={{ color: theme.palette.primary.main }}>
                    New Password
                  </InputLabel> */}
                <OutlinedInput
                  id="newPassword"
                  type={showNewPassword ? 'text' : 'password'}
                  value={values.newPassword}
                  name="newPassword"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowNewPassword(!showNewPassword)} edge="end">
                        <Iconify
                          sx={{
                            color:
                              errors.newPassword && touched.newPassword
                                ? theme.palette.error.main
                                : '#00000099',
                          }}
                          icon={showNewPassword ? 'mdi-light:eye' : 'mdi-light:eye-off'}
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
                  placeholder={t('newpswd')}
                />
                {touched.newPassword && errors.newPassword && (
                  <FormHelperText error id="newPassword">
                    {errors.newPassword}
                  </FormHelperText>
                )}
              </FormControl>
            </Box>
            <Box width={1}>
              <FormControl
                fullWidth
                error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                sx={{ mb: 1 }}
              >
                {/* <InputLabel htmlFor="confirmPassword" sx={{ color: theme.palette.primary.main }}>
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
                          sx={{
                            color:
                              errors.confirmPassword && touched.confirmPassword
                                ? theme.palette.error.main
                                : '#00000099',
                          }}
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
            </Box>

            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 5, display: 'flex', justifyContent: 'space-between' }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                // onClick={() => navigate('/edit-logo')}
                sx={{
                  fontWeight: 500,
                  fontSize: '20px',
                  borderRadius: '12px',
                  px: '28px',
                  minWidth: '150px',
                  minHeight: '46px',
                  boxShadow:
                    '2px 2px 2.7px 0px rgba(0, 0, 0, 0.25), 3px 3px 2.3px 0px rgba(0, 0, 0, 0.25) inset, -3px 3px 2.7px 0px rgba(0, 0, 0, 0.25)',
                }}
              >
                {t('updatebtn')}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}
