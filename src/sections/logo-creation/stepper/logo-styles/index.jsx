import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { Box, Card, Container, Fade, Grid, Slide, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setLogoStyle } from 'src/store/reducers/logoReducer';
import API from 'src/utils/axios';
import { setLogoConcepts, setSelectedLogoConcept } from 'src/store/reducers/generatedLogosReducer';
import GenerateLogo from '../../../../components/generate-logo';
import { useTranslation } from 'react-i18next';

const labels = ['Icon', 'Monogram', 'Typography'];
export default function LogoStyles({ onNext, onBack }) {
  const { t } = useTranslation();
  const selectedLogoStyle = useSelector((state) => state.logo.value.logoStyle);
  const allStyles = useSelector((state) => state.logo.value);
  const [Loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const fetchLogoStyles = async () => {
    try {
      setLoading(true);
      console.log('fetching logo styles', allStyles);
      // if (generatedLogos.length > 0) {
      //   console.log(generatedLogos, 'from redux');
      //   return;
      // }
      const res = await API.post('/logoconcept/generate', allStyles);
      const { data } = res;
      console.log(data, 'data from logos');
      dispatch(setLogoConcepts(data));

      // localStorage.setItem('logoStyles', JSON.stringify(data));

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  const handleNext = async () => {
    if (selectedLogoStyle.length === 0) {
      alert('Please select at least one logo style');
      return;
    }
    await fetchLogoStyles();

    onNext();
  };

  const handleSelectLogoStyles = (logoStyle) => {
    if (selectedLogoStyle.includes(logoStyle)) {
      dispatch(setLogoStyle(selectedLogoStyle.filter((style) => style !== logoStyle)));
    } else {
      dispatch(setLogoStyle([...selectedLogoStyle, logoStyle]));
    }
  };
  return (
    <Container sx={{ position: 'relative' }}>
      {!Loading && (
        <>
          <Grid container justifyContent="center" mt={8}>
            <Fade in timeout={1000}>
              <Grid item md={8}>
                <Typography
                  fontSize={36}
                  fontWeight={700}
                  color="white"
                  mb={1}
                  sx={{ textShadow: '5px 8px 4px rgba(0, 0, 0, 0.45)' }}
                  textAlign="center"
                >
                  {t('selectlogostyle')}
                </Typography>
                <Typography width="70%" mx="auto" fontSize={20} color="white" textAlign="center">
                  {t('chooselogostyle')}
                </Typography>
              </Grid>
            </Fade>
            <Slide direction="up" in timeout={1200}>
              <img
                className="d-sm-none"
                style={{ position: 'absolute', right: 0, top: '0', width: '230px', zIndex: -1 }}
                src="/assets/logo-creation/avatars/next_four_steps_avatar.svg"
                alt=""
              />
            </Slide>
          </Grid>
          <Slide direction="up" in timeout={1000}>
            <Grid container mb={5} my={14} columnSpacing={5}>
              <Grid item xs={12}>
                <Card
                  sx={{
                    p: '48px',
                    mb: '50px',
                    boxShadow:
                      '8px 8px 7.2px 0px rgba(0, 0, 0, 0.25), 8px 8px 11px 0px rgba(0, 0, 0, 0.25) inset',
                  }}
                >
                  <Grid container alignItems="center" spacing={4}>
                    {[1, 2, 3].map((style, index) => (
                      <Grid key={index} item md={4} xs={6}>
                        <Box
                          onClick={() => handleSelectLogoStyles(index)}
                          sx={{
                            cursor: 'pointer',
                            border: selectedLogoStyle.includes(index)
                              ? '  3px dotted #ff6c0e'
                              : 'none',
                          }}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexDirection={'column'}
                          width="100%"
                          bgcolor="white"
                          borderRadius="12px"

                          // boxShadow="8px 8px 7.2px 0px rgba(0, 0, 0, 0.25), 8px 8px 11px 0px rgba(0, 0, 0, 0.25) inset"
                        >
                          <img
                            style={{ width: '100%', objectFit: 'contain' }}
                            src={`/assets/logo-styles/style_${index + 1}.png`}
                            alt=""
                          />
                          <Typography
                            sx={{ textAlign: 'center', fontWeight: 700, fontSize: '16px' }}
                          >
                            {labels[index]}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Slide>
        </>
      )}
      {Loading && <GenerateLogo />}

      {/* Fixed buttons for steps controlling */}

      <Box
        position="fixed"
        bottom="0"
        left={0}
        width={1}
        display="flex"
        justifyContent="center"
        bgcolor="#fffffff2"
        boxShadow="0px -5px 15.3px 0px #FFF"
        py="6px"
        gap={2}
      >
        <Button
          variant="outlined"
          size="small"
          onClick={onBack}
          sx={{
            '&:hover': { border: '3px solid' },
            border: '3px solid',
            // color: 'white',
            fontWeight: 500,
            fontSize: '12px',
            borderRadius: '12px',
            minWidth: '90px',
            minHeight: '40px',
            // boxShadow:
            //   '8px 8px 7.2px 0px rgba(0, 0, 0, 0.25), 8px 8px 11px 0px rgba(0, 0, 0, 0.25) inset',
          }}
        >
          {t('backbtn')}
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={handleNext}
          sx={{
            fontWeight: 500,
            fontSize: '12px',
            borderRadius: '12px',
            // px: '36px0,
            minWidth: '100px',
            minHeight: '40px',
            boxShadow:
              '2px 2px 2.7px 0px rgba(0, 0, 0, 0.25), 3px 3px 2.3px 0px rgba(0, 0, 0, 0.25) inset, -3px 3px 2.7px 0px rgba(0, 0, 0, 0.25)',
          }}
        >
          {t('contbtn')}
        </Button>
      </Box>
    </Container>
  );
}
LogoStyles.propTypes = {
  onNext: PropTypes.func,
  onBack: PropTypes.func,
};
