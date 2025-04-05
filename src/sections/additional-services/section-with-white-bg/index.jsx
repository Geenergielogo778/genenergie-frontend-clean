import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

const WhiteBgSection = ({ handleClick, ...otherProps }) => {
  const { title, headingSmallText, description, btnText, image, alt } = otherProps;
  return (
    <Box sx={{ py: '190px', background: '#fff' }}>
      {/* <img src="/assets/shape_downward.png" alt="" /> */}
      <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={7} className="slide-from-left">
            <Typography
              variant="h2"
              mb={0}
              color="primary"
              fontSize={{ xs: 36, md: 56 }}
              fontWeight={700}
            >
              {title}
              {headingSmallText && (
                <Typography component="span" fontSize={36} fontWeight={500}>
                  {headingSmallText}
                </Typography>
              )}
            </Typography>
            <Typography mb={3} color="black" fontSize={20} fontWeight={500}>
              {description}
            </Typography>

            <Button
              variant="contained"
              size="large"
              onClick={handleClick}
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
              {btnText}
            </Button>
          </Grid>
          <Grid item xs={12} md={4} className="slide-from-right">
            <img src={image} alt={alt} />
          </Grid>
        </Grid>
      </Container>
      {/* <img src="/assets/shape_upward.png" alt="" /> */}
    </Box>
  );
};

WhiteBgSection.propTypes = {
  title: PropTypes.string,
  headingSmallText: PropTypes.string,
  description: PropTypes.string,
  btnText: PropTypes.string,
  image: PropTypes.string,
  handleClick: PropTypes.func,
};

export default WhiteBgSection;
