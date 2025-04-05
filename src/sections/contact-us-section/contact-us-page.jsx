import { Box, Button, Container, Grid, Typography,TextField } from '@mui/material';
import { Form, Formik, } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import API from 'src/utils/axios';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const ContactUsPage = () => {
  const { t } = useTranslation();
  const initialValues = {
    name: '',
    subject: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .min(2, 'Name must be at least 2 characters'),
    subject: Yup.string()
      .required('Subject is required')
      .min(2, 'Subject must be at least 2 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Invalid email address'),
    message: Yup.string()
      .required('Message is required')
      .min(10, 'Message must be at least 10 characters'),
  });

  const handleSubmit = async (values, { setSubmitting,resetForm }) => {
   try {
     setSubmitting(true);
     const result = await API.post('/contact/create', values);
     
     if(result.status === 200) {
       toast.success("Thank you for contacting us");
     }
     resetForm();
     setSubmitting(false);
   } catch (error) {
    toast.error("Something went wrong");
    console.log(error);
   }
  };

  return (
    <Box py="100px">
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form>
              <Grid container spacing={5} justifyContent="space-between">
                <Grid item xs={12} md={7} className="slide-from-left">
                  <Typography
                    variant="h1"
                    sx={{ textShadow: '5px 8px 4px rgba(0, 0, 0, 0.45)' }}
                    mb={4}
                    color="white"
                    fontSize={56}
                    fontWeight={700}
                  >
                    {t('ContactUs')}
                  </Typography>
                  <TextField
                    id="name"
                    name="name"
                    variant="outlined"
                    placeholder={t('name')}
                    fullWidth
                    sx={{
                      background: 'white',
                      borderRadius: '10px',
                      fontSize: '24px',
                      mb: 3,
                      py: 1,
                      px: 1,
                      boxShadow:
                        '8px 8px 7.2px 0px rgba(0, 0, 0, 0.25), 8px 8px 11px 0px rgba(0, 0, 0, 0.25) inset',
                      '& .MuiInputBase-root.MuiInputBase-root': {
                        paddingRight: '8px',
                      },
                    }}

                    {...formik.getFieldProps('name')}
                  />
                  {formik.errors.name && formik.touched.name && (
                    <Typography variant="body1" color="red">
                      {formik.errors.name}
                    </Typography>
                  )}
                  <TextField
                    id="subject"
                    name="subject"
                    variant="outlined"
                    placeholder={t('subject')}
                    fullWidth
                    sx={{
                      background: 'white',
                      borderRadius: '10px',
                      fontSize: '24px',
                      mb: 3,
                      py: 1,
                      px: 1,
                      boxShadow:
                        '8px 8px 7.2px 0px rgba(0, 0, 0, 0.25), 8px 8px 11px 0px rgba(0, 0, 0, 0.25) inset',
                      '& .MuiInputBase-root.MuiInputBase-root': {
                        paddingRight: '8px',
                      },
                    }}
                    {...formik.getFieldProps('subject')}
                  />
                  {formik.errors.subject && formik.touched.subject && (
                    <Typography variant="body1" color="red">
                      {formik.errors.subject}
                    </Typography>
                  )}
                  <TextField
                    id="email"
                    name="email"
                    type="email"
                    variant="outlined"
                    placeholder={t('email')}
                    fullWidth
                    sx={{
                      background: 'white',
                      borderRadius: '10px',
                      fontSize: '24px',
                      mb: 3,
                      py: 1,
                      px: 1,
                      boxShadow:
                        '8px 8px 7.2px 0px rgba(0, 0, 0, 0.25), 8px 8px 11px 0px rgba(0, 0, 0, 0.25) inset',
                      '& .MuiInputBase-root.MuiInputBase-root': {
                        paddingRight: '8px',
                      },
                    }}
                    {...formik.getFieldProps('email')}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <Typography variant="body1" color="red">
                      {formik.errors.email}
                    </Typography>
                  )}
                  <TextField
                    id="message"
                    name="message"
                    variant="outlined"
                    placeholder={t('message')}
                    multiline
                    minRows={6}
                    fullWidth
                    sx={{
                      background: 'white',
                      borderRadius: '10px',
                      fontSize: '24px',
                      mb: 3,
                      py: 1,
                      px: 1,
                      boxShadow:
                        '8px 8px 7.2px 0px rgba(0, 0, 0, 0.25), 8px 8px 11px 0px rgba(0, 0, 0, 0.25) inset',
                      '& .MuiInputBase-root.MuiInputBase-root': {
                        paddingRight: '8px',
                      },
                    }}
                    {...formik.getFieldProps('message')}
                  />
                  {formik.errors.message && formik.touched.message && (
                    <Typography variant="body1" color="red">
                      {formik.errors.message}
                    </Typography>
                  )}
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      fontWeight: 500,
                      fontSize: '22px',
                      borderRadius: '12px',
                      // px: '36px',
                      minWidth: '170px',
                      minHeight: '46px',
                      boxShadow:
                        '2px 2px 2.7px 0px rgba(0, 0, 0, 0.25), 3px 3px 2.3px 0px rgba(0, 0, 0, 0.25) inset, -3px 3px 2.7px 0px rgba(0, 0, 0, 0.25)',
                    }}
                  >
                    {t('submitbtn')}
                  </Button>
                </Grid>
              </Grid>
              <Box className="d-sm-none" position="absolute" right="0" bottom="-200px">
                <img
                  className="slide-from-right"
                  width="80%"
                  src="/assets/contact-us/contact-us.png"
                  alt="Contact Us Avatar"
                />
              </Box>
            </Form>
          )}
        </Formik>
      </Container>
    </Box>
  );
};

export default ContactUsPage;

