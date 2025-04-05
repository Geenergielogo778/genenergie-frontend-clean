import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Typography } from '@mui/material';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const CustomersSection = ({ backgroundColor }) => {
  const { t } = useTranslation();
  const customers = [
    '/assets/customers/customer_1.png',
    '/assets/customers/customer_2.png',
    '/assets/customers/customer_3.png',
    '/assets/customers/customer_4.png',
    '/assets/customers/customer_5.png',
    '/assets/customers/customer_6.png',
    '/assets/customers/customer_7.png',
    '/assets/customers/customer_8.png',
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box
      py="50px"
      mb={backgroundColor ? 20 : 0}
      bgcolor={backgroundColor ?? 'transparent'}
      position="relative"
      sx={{
        backgroundImage: `url("/assets/customers/customers_bg.png")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {backgroundColor ? (
        <img
          width="100%"
          height="200px"
          style={{ position: 'absolute', top: '-160px' }}
          src="/assets/shape_upward.png"
          alt=""
        />
      ) : (
        <img
          width="100%"
          height="200px"
          style={{ position: 'absolute', top: '-170px' }}
          src="/assets/shape_upward_primary.png"
          alt="Background Image"
        />
      )}
      <Container maxWidth="lg">
        <Box mb={5}>
          <Typography color={backgroundColor ? 'primary' : 'white'} fontSize={32} fontWeight={400}>
            {t('Loveto')}
          </Typography>
          <Typography
            lineHeight={1}
            color={backgroundColor ? 'black' : 'white'}
            fontSize={44}
            fontWeight={700}
          >
            {t('SmilingCustomers')}
          </Typography>
        </Box>
        <Grid container justifyContent="space-between" spacing={4}>
          {customers.map((customer, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              // eslint-disable-next-line no-nested-ternary
              mt={{ md: index % 2 !== 0 ? (index === 6 ? 10 : 8) : 0, sm: 3 }}
            >
              <Box
                width={180}
                mx="auto"
                height={180}
                sx={{ border: '10px solid #327810', borderRadius: '120px' }}
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <img
                  width="100%"
                  height="100%"
                  style={{ objectFit: 'cover', borderRadius: '120px' }}
                  src={customer}
                  alt={`Customer ${index + 1}`}
                />
              </Box>
            </Grid>
          ))}
          <Grid item xs={12} mt={5} data-aos="zoom-in-up" data-aos-duration="1000">
            <Grid container spacing={3} alignItems="flex-start">
              <Grid item xs={12} lg={3}>
                <Box
                  sx={{
                    width: { md: '240px', xs: '140px' },
                    height: { md: '240px', xs: '140px' },
                    border: '10px solid #E4002B',
                    borderRadius: '120px',
                  }}
                >
                  <img
                    width="100%"
                    height="100%"
                    style={{ objectFit: 'cover', borderRadius: '120px' }}
                    src="/assets/customers/customer_7.png"
                    alt="Customer"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} lg={9} color="white">
                <Grid container spacing={3}>
                  <Grid item xs={1}>
                    <Box width={1}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="67"
                        viewBox="0 0 74 67"
                        fill="none"
                      >
                        <path
                          d="M18.4997 67C21.7707 67 24.9077 65.4325 27.2207 62.6422C29.5336 59.852 30.833 56.0677 30.833 52.1217V29.8042H9.24965C9.25454 24.8735 10.8804 20.1465 13.7705 16.66C16.6606 13.1735 20.5791 11.2122 24.6663 11.2063V0.0475311C18.1266 0.0563889 11.8568 3.19431 7.23246 8.77284C2.60814 14.3514 0.00697708 21.9149 -0.000368118 29.8042V67H18.4997Z"
                          fill={backgroundColor ? 'black' : 'white'}
                        />
                        <path
                          d="M61.6666 67C64.9377 67 68.0747 65.4325 70.3876 62.6422C72.7006 59.852 74 56.0677 74 52.1217V29.8042H52.4166C52.4215 24.8735 54.0474 20.1465 56.9375 16.66C59.8276 13.1735 63.7461 11.2122 67.8333 11.2063V0.0475311C61.2936 0.0563889 55.0238 3.19431 50.3994 8.77284C45.7751 14.3514 43.174 21.9149 43.1666 29.8042V67H61.6666Z"
                          fill={backgroundColor ? 'black' : 'white'}
                        />
                      </svg>
                    </Box>
                  </Grid>
                  <Grid item xs={10}>
                    <Box>
                      <Typography
                        color={backgroundColor ? 'black' : 'white'}
                        // fontSize={isSmallScreen ? 16 : 28}
                        fontSize={{ xs: 16, md: 22 }}
                        fontWeight={500}
                        mb={2}
                        lineHeight={1.2}
                      >
                        {t('EthanReview')}
                      </Typography>
                      <Typography
                        color={backgroundColor ? 'primary' : 'white'}
                        // fontSize={isSmallScreen ? 20 : 30}
                        fontSize={{ xs: 20, md: 28 }}
                        fontWeight={700}
                      >
                        {t('Ethan')}
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={1} display="flex" justifyContent="flex-end" alignItems="end">
                    <Box width={1}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="67"
                        viewBox="0 0 74 67"
                        fill="none"
                      >
                        <path
                          d="M55.5003 0C52.2293 0 49.0923 1.56753 46.7793 4.35776C44.4664 7.14799 43.167 10.9323 43.167 14.8783V37.1958H64.7504C64.7455 42.1265 63.1196 46.8535 60.2295 50.34C57.3394 53.8265 53.4209 55.7878 49.3337 55.7937V66.9525C55.8734 66.9436 62.1432 63.8057 66.7675 58.2272C71.3919 52.6486 73.993 45.0851 74.0004 37.1958V0H55.5003Z"
                          fill={backgroundColor ? 'black' : 'white'}
                        />
                        <path
                          d="M12.3334 0C9.06234 0 5.92531 1.56753 3.61235 4.35776C1.2994 7.14799 0 10.9323 0 14.8783V37.1958H21.5834C21.5785 42.1265 19.9526 46.8535 17.0625 50.34C14.1724 53.8265 10.2539 55.7878 6.16668 55.7937V66.9525C12.7064 66.9436 18.9762 63.8057 23.6006 58.2272C28.2249 52.6486 30.826 45.0851 30.8334 37.1958V0H12.3334Z"
                          fill={backgroundColor ? 'black' : 'white'}
                        />
                      </svg>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} mt={5} data-aos="zoom-in-up" data-aos-duration="1000">
            <Grid container spacing={3} alignItems="flex-start">
              <Grid item xs={12} lg={3}>
                <Box
                  sx={{
                    width: { md: '240px', xs: '140px' },
                    height: { md: '240px', xs: '140px' },
                    border: '10px solid #E4002B',
                    borderRadius: '120px',
                  }}
                >
                  <img
                    width="100%"
                    height="100%"
                    style={{ objectFit: 'cover', borderRadius: '120px' }}
                    src="/assets/customers/customer_1.png"
                    alt="Customer"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} lg={9} color="white">
                <Grid container spacing={3}>
                  <Grid item xs={1}>
                    <Box width={1}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="67"
                        viewBox="0 0 74 67"
                        fill="none"
                      >
                        <path
                          d="M18.4997 67C21.7707 67 24.9077 65.4325 27.2207 62.6422C29.5336 59.852 30.833 56.0677 30.833 52.1217V29.8042H9.24965C9.25454 24.8735 10.8804 20.1465 13.7705 16.66C16.6606 13.1735 20.5791 11.2122 24.6663 11.2063V0.0475311C18.1266 0.0563889 11.8568 3.19431 7.23246 8.77284C2.60814 14.3514 0.00697708 21.9149 -0.000368118 29.8042V67H18.4997Z"
                          fill={backgroundColor ? 'black' : 'white'}
                        />
                        <path
                          d="M61.6666 67C64.9377 67 68.0747 65.4325 70.3876 62.6422C72.7006 59.852 74 56.0677 74 52.1217V29.8042H52.4166C52.4215 24.8735 54.0474 20.1465 56.9375 16.66C59.8276 13.1735 63.7461 11.2122 67.8333 11.2063V0.0475311C61.2936 0.0563889 55.0238 3.19431 50.3994 8.77284C45.7751 14.3514 43.174 21.9149 43.1666 29.8042V67H61.6666Z"
                          fill={backgroundColor ? 'black' : 'white'}
                        />
                      </svg>
                    </Box>
                  </Grid>
                  <Grid item xs={10}>
                    <Box>
                      <Typography
                        color={backgroundColor ? 'black' : 'white'}
                        // fontSize={isSmallScreen ? 16 : 28}
                        fontSize={{ xs: 16, md: 22 }}
                        fontWeight={500}
                        mb={2}
                        lineHeight={1.2}
                      >
                        {t('OliviaReview')}
                      </Typography>
                      <Typography
                        color={backgroundColor ? 'primary' : 'white'}
                        // fontSize={isSmallScreen ? 20 : 30}
                        fontSize={{ xs: 20, md: 28 }}
                        fontWeight={700}
                      >
                        {t('Olivia')}
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={1} display="flex" justifyContent="flex-end" alignItems="end">
                    <Box width={1}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="67"
                        viewBox="0 0 74 67"
                        fill="none"
                      >
                        <path
                          d="M55.5003 0C52.2293 0 49.0923 1.56753 46.7793 4.35776C44.4664 7.14799 43.167 10.9323 43.167 14.8783V37.1958H64.7504C64.7455 42.1265 63.1196 46.8535 60.2295 50.34C57.3394 53.8265 53.4209 55.7878 49.3337 55.7937V66.9525C55.8734 66.9436 62.1432 63.8057 66.7675 58.2272C71.3919 52.6486 73.993 45.0851 74.0004 37.1958V0H55.5003Z"
                          fill={backgroundColor ? 'black' : 'white'}
                        />
                        <path
                          d="M12.3334 0C9.06234 0 5.92531 1.56753 3.61235 4.35776C1.2994 7.14799 0 10.9323 0 14.8783V37.1958H21.5834C21.5785 42.1265 19.9526 46.8535 17.0625 50.34C14.1724 53.8265 10.2539 55.7878 6.16668 55.7937V66.9525C12.7064 66.9436 18.9762 63.8057 23.6006 58.2272C28.2249 52.6486 30.826 45.0851 30.8334 37.1958V0H12.3334Z"
                          fill={backgroundColor ? 'black' : 'white'}
                        />
                      </svg>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      {backgroundColor ? (
        <img
          width="100%"
          height="200px"
          style={{ position: 'absolute', bottom: '-160px' }}
          src="/assets/shape_downward.png"
          alt=""
        />
      ) : (
        <img
          width="100%"
          height="200px"
          style={{ position: 'absolute', bottom: '-170px' }}
          src="/assets/shape_downward_primary.png"
          alt="Background Image"
        />
      )}
    </Box>
  );
};
CustomersSection.propTypes = {
  backgroundColor: PropTypes.string,
};

export default CustomersSection;
