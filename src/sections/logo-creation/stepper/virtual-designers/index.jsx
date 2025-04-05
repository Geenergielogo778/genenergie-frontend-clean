import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { Box, Card, Container, Fade, Grid, Slide, Typography } from '@mui/material';
import Iconify from 'src/components/iconify/iconify';
import API from 'src/utils/axios';
import { useDispatch, useSelector } from 'react-redux';
import { setLogoDesigner } from 'src/store/reducers/logoReducer';
import { useTranslation } from 'react-i18next';

export default function VirtualDesigners({ onNext, onBack }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const chosenDesigners = useSelector((state) => state.logo.value.logoDesigner);
  const [selectedDesigner, setSelectedDesigner] = React.useState([]);
  const [designers, setDesigner] = React.useState([]);

  const handleNext = () => {
    if (chosenDesigners.length === 0) {
      alert('Please select at least one designer');
      return;
    }
    onNext();
  };
  const fetchDesigners = async () => {
    try {
      const res = await API.get('/designers');
      console.log(res.data);
      setDesigner(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const chooseDesigners = (designer) => {
    if (chosenDesigners.includes(designer)) {
      // If the designer is already selected, remove them from the selection
      // dispatch(setLogoDesigner(chosenDesigners.filter((d) => d !== designer)));
      return;
    } else {
      // If the designer is not selected, add them to the selection
      dispatch(setLogoDesigner([...chosenDesigners, designer]));
    }
  };
  const removeDesigners = (designer) => {
    dispatch(setLogoDesigner(chosenDesigners.filter((d) => d !== designer)));
  };
  React.useEffect(() => {
    fetchDesigners();
  }, []);

  // const designers = [
  //   {
  //     id: 1,
  //     name: 'Isabella',
  //     description: `My name is Isabella.I would describe my style as simple, clean and modern. If this sounds good to you, I'd be happy to create some logos for your company.`,
  //     imageSrc: '/assets/designers/designer_1.svg',
  //   },
  //   {
  //     id: 2,
  //     name: 'Peter',
  //     description: `My name is Peter.I would describe my style as simple, clean and modern. If this sounds good to you, I'd be happy to create some logos for your company.`,
  //     imageSrc: '/assets/designers/designer_2.svg',
  //   },
  //   {
  //     id: 3,
  //     name: 'Fiona',
  //     description: `My name is Fiona.I would describe my style as simple, clean and modern. If this sounds good to you, I'd be happy to create some logos for your company.`,
  //     imageSrc: '/assets/designers/designer_3.svg',
  //   },
  //   {
  //     id: 4,
  //     name: 'Noah',
  //     description: `My name is Noah.I would describe my style as simple, clean and modern. If this sounds good to you, I'd be happy to create some logos for your company.`,
  //     imageSrc: '/assets/designers/designer_4.svg',
  //   },
  //   {
  //     id: 5,
  //     name: 'Kimberly',
  //     description: `My name is Kimberly.I would describe my style as simple, clean and modern. If this sounds good to you, I'd be happy to create some logos for your company.`,
  //     imageSrc: '/assets/designers/designer_5.svg',
  //   },
  //   {
  //     id: 6,
  //     name: 'Lucy',
  //     description: `My name is Lucy.I would describe my style as simple, clean and modern. If this sounds good to you, I'd be happy to create some logos for your company.`,
  //     imageSrc: '/assets/designers/designer_6.svg',
  //   },
  //   {
  //     id: 7,
  //     name: 'Leon',
  //     description: `My name is Leon.I would describe my style as simple, clean and modern. If this sounds good to you, I'd be happy to create some logos for your company.`,
  //     imageSrc: '/assets/designers/designer_7.svg',
  //   },
  // ];

  return (
    <Container sx={{ position: 'relative' }}>
      <Grid container justifyContent="center" mt={8}>
        <Fade in timeout={1000}>
          <Grid item md={7}>
            <Typography
              fontSize={40}
              fontWeight={700}
              color="white"
              mb={1}
              sx={{ textShadow: '5px 8px 4px rgba(0, 0, 0, 0.45)' }}
              textAlign="center"
            >
              {t('choosevirtualdesigners')}
            </Typography>
            <Typography fontSize={20} color="white" textAlign="center">
              {t('virtualsuggest')}
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
        <Grid container mt={8} mb={5} columnSpacing={5}>
          <Grid item xs={12} mb={1.5}>
            <Button
              onClick={() => setSelectedDesigner(null)}
              sx={{
                color: 'white',
                px: 2,
                fontWeight: !selectedDesigner ? 600 : 500,
              }}
            >
              {t('all')}
            </Button>
            {designers?.map((designer, index) => (
              <Button
                key={index}
                onClick={() => setSelectedDesigner(designer)}
                sx={{
                  color: 'white',
                  px: 2,
                  fontWeight: selectedDesigner?.name === designer?.name ? 600 : 500,
                }}
              >
                {designer.name}
              </Button>
            ))}
          </Grid>

          <Grid item md={8} xs={12}>
            {designers
              .filter(
                (designer) => !selectedDesigner?.name || designer?.name === selectedDesigner?.name
              )
              .map((designer, index) => (
                <Card
                  key={index}
                  sx={{
                    p: '36px',
                    mb: '50px',
                    boxShadow:
                      '8px 8px 7.2px 0px rgba(0, 0, 0, 0.25), 8px 8px 11px 0px rgba(0, 0, 0, 0.25) inset',
                  }}
                >
                  <Grid container alignItems="center" spacing={3}>
                    <Grid item md={3} xs={12}>
                      <Box>
                        <Box
                          sx={{
                            width: '100%',
                            border: '8px solid #E4002B',
                            borderRadius: '120px',
                          }}
                        >
                          <img
                            width="100%"
                            style={{ objectFit: 'cover', borderRadius: '120px' }}
                            src={designer?.image}
                            alt="Designer"
                          />
                        </Box>
                        <Typography mt={1} fontWeight={500} variant="h5" textAlign="center">
                          {designer?.name}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={9} xs={12}>
                      <Box>
                        <Typography fontSize="18px">{t(designer?.name)}</Typography>
                        <Button
                          variant="contained"
                          size="large"
                          onClick={() => chooseDesigners(designer)}
                          sx={{
                            mt: 2,
                            fontWeight: 500,
                            fontSize: '20px',
                            borderRadius: '12px',
                            minWidth: '140px',
                            minHeight: '46px',
                            boxShadow:
                              '2px 2px 2.7px 0px rgba(0, 0, 0, 0.25), 3px 3px 2.3px 0px rgba(0, 0, 0, 0.25) inset, -3px 3px 2.7px 0px rgba(0, 0, 0, 0.25)',
                          }}
                        >
                          {t('select')}
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid container rowSpacing={5} columnSpacing={2} my={1}>
                    {[1, 2, 3, 4].map((sample, i) => (
                      <Grid item key={i} md={4} xs={12}>
                        <img
                          style={{
                            objectFit: 'cover',
                            borderRadius: '16px',
                            boxShadow:
                              '2px 2px 2.7px 0px rgba(0, 0, 0, 0.25), 3px 3px 2.3px 0px rgba(0, 0, 0, 0.25) inset, -3px 3px 2.7px 0px rgba(0, 0, 0, 0.25)',
                          }}
                          width="100%"
                          src={`https://genergie-logo-bucket.s3.eu-north-1.amazonaws.com/designers-concpet/${designer?.name?.toLowerCase()}/${sample}.png`}
                          alt=""
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Card>
              ))}
          </Grid>
          <Grid item md={4} xs={12}>
            <Card
              sx={{
                p: '36px',
                mb: '50px',
                boxShadow:
                  '8px 8px 7.2px 0px rgba(0, 0, 0, 0.25), 8px 8px 11px 0px rgba(0, 0, 0, 0.25) inset',
              }}
            >
              <Typography fontSize="28px" fontWeight={500} textAlign="center">
                {t('selected')}
              </Typography>
              {chosenDesigners &&
                chosenDesigners.length > 0 &&
                chosenDesigners.map((item, index) => (
                  <Box key={index}>
                    <Box
                      sx={{
                        width: '150px',
                        mx: 'auto',
                        mt: 3,
                        border: '8px solid #E4002B',
                        borderRadius: '120px',
                        position: 'relative',
                      }}
                    >
                      <img
                        width="150px"
                        style={{ objectFit: 'cover', borderRadius: '120px' }}
                        src={item.image}
                        alt="Designer"
                      />
                      <Iconify
                        onClick={() => removeDesigners(item)}
                        icon="gridicons:cross-circle"
                        sx={{
                          color: '#E4002B',
                          background: 'white',
                          borderRadius: '50px',
                          width: '32px',
                          height: '32px',
                          position: 'absolute',
                          top: 0,
                          right: '-5px',
                        }}
                      />
                    </Box>
                    <Typography mt={1} fontWeight={500} variant="h5" textAlign="center">
                      {item.name}
                    </Typography>
                  </Box>
                ))}
              {/* <Box>
                <Box
                  sx={{
                    width: '150px',
                    mx: 'auto',
                    mt: 3,
                    border: '8px solid #E4002B',
                    borderRadius: '120px',
                    position: 'relative',
                  }}
                >
                  <img
                    width="150px"
                    style={{ objectFit: 'cover', borderRadius: '120px' }}
                    src="/assets/designers/designer_3.svg"
                    alt="Designer"
                  />
                  <Iconify
                    icon="gridicons:cross-circle"
                    sx={{
                      color: '#E4002B',
                      background: 'white',
                      borderRadius: '50px',
                      width: '32px',
                      height: '32px',
                      position: 'absolute',
                      top: 0,
                      right: '-5px',
                    }}
                  />
                </Box>
                <Typography mt={1} fontWeight={500} variant="h5" textAlign="center">
                  Lucy
                </Typography>
              </Box>
              <Box>
                <Box
                  sx={{
                    width: '150px',
                    mx: 'auto',
                    mt: 3,
                    border: '8px solid #E4002B',
                    borderRadius: '120px',
                    position: 'relative',
                  }}
                >
                  <img
                    width="150px"
                    style={{ objectFit: 'cover', borderRadius: '120px' }}
                    src="/assets/designers/designer_6.svg"
                    alt="Designer"
                  />
                  <Iconify
                    icon="gridicons:cross-circle"
                    sx={{
                      color: '#E4002B',
                      background: 'white',
                      borderRadius: '50px',
                      width: '32px',
                      height: '32px',
                      position: 'absolute',
                      top: 0,
                      right: '-5px',
                    }}
                  />
                </Box>
                <Typography mt={1} fontWeight={500} variant="h5" textAlign="center">
                  Peter
                </Typography>
              </Box> */}
            </Card>
          </Grid>
        </Grid>
      </Slide>

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
VirtualDesigners.propTypes = {
  onNext: PropTypes.func,
  onBack: PropTypes.func,
};
