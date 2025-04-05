import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Card, CardContent, Container, Fade, Grid, Slide, Typography } from '@mui/material';
import { setLogoColours } from 'src/store/reducers/logoReducer';
import { toast } from 'react-toastify';
import axios from 'axios';
import API from 'src/utils/axios';
import { useTranslation } from 'react-i18next';

const ColorCard = ({ title, description, image, colorShades, colorId }) => {

 
  // const [isChecked, setChecked] = React.useState(false);
  const checked = useSelector((state) => state.logo.value.logoColours);
  const dispatch = useDispatch();
  const handleCardClick = (color) => {
    console.log(color);

    dispatch(setLogoColours(color));
  };
  
  return (

    <Card
      onClick={() => handleCardClick(colorId)}
      sx={{
        p: 0,
        boxShadow: 'none',
        borderRadius: '12px',
        position: 'relative',
      }}
    >
      <CardContent
        sx={{
          p: 0,
          pb: 0,
          transition: 'ease all 0.5s',
          '&:hover': {
            color: 'white !important',
          },
          '&:hover::before': {
            content: '""',
            position: 'absolute',
            bottom: '24px',
            left: 0,
            right: 0,
            height: '50%',
            background: colorShades[2],
            zIndex: 1,
            borderRadius: '0 0 12px 12px',
            transition: 'ease all 0.5s',
          },
        }}
      >
        {checked.includes(colorId) && (
          <span style={{ position: 'absolute', right: '16px', top: '16px' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="48"
              viewBox="0 0 49 48"
              fill="none"
            >
              <path
                d="M48.5037 23.998C48.5037 30.6281 45.8184 36.6271 41.4711 40.9707C37.1308 45.3143 31.1285 48 24.5016 48C11.248 48 0.5 37.2553 0.5 23.9984C0.5 17.3715 3.18525 11.3724 7.53253 7.02885C11.8729 2.68525 17.8752 0 24.502 0C31.1289 0 37.1312 2.68525 41.4716 7.02885C45.8184 11.372 48.5037 17.3707 48.5037 23.998Z"
                fill="#4FC646"
              />
              <path
                d="M38.5266 9.96641L20.9812 38.3713C20.6275 38.9443 19.8042 38.9717 19.4129 38.4241L10.4938 25.9397C10.1727 25.4902 10.6925 24.9214 11.169 25.2007L19.6157 30.1541L37.705 9.36114C38.118 8.88715 38.857 9.43148 38.5266 9.96641Z"
                fill="white"
              />
            </svg>
          </span>
        )}
        {/* <img width="100%" src={image} alt={title} /> */}
        <div
          style={{ backgroundColor: colorShades[1], backgroundSize: 'cover', minHeight: '200px' }}
        ></div>
        <Box p={3} pb={5} bgcolor="#D9D9D9" borderRadius="0 0 12px 12px">
          <Box display="flex" alignItems="center" justifyContent="end" gap={1} zIndex={2}>
            <Box width="26px" height="26px" borderRadius="30px" bgcolor={colorShades[0]} />
            <Box width="26px" height="26px" borderRadius="30px" bgcolor={colorShades[1]} />
            <Box width="26px" height="26px" borderRadius="30px" bgcolor={colorShades[2]} />
          </Box>
          <Box zIndex={2} position="relative">
            <Typography fontWeight={500} variant="h4" component="div">
              {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
ColorCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  colorShades: PropTypes.array,
};

export default function BrandColors({ onNext, onBack }) {
  const [colors, setColors] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const { t } = useTranslation();
  React.useEffect(() => {
    const fetchColors = async () => {
      try {
        setLoading(true);
        const data = await API.get('/color');
        console.log(data);
        setColors(data.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        toast.error(err.message);
      }
    };
    fetchColors();
  }, []);
  return (
    <Container sx={{ mt: 5, position: 'relative' }}>
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
              {t('choosecolor')}
            </Typography>
            <Typography fontSize={20} color="white" textAlign="center">
              {t('suggestcolor')}
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
        <Card
          sx={{
            p: '36px',
            my: '68px',
            boxShadow:
              '8px 8px 7.2px 0px rgba(0, 0, 0, 0.25), 8px 8px 11px 0px rgba(0, 0, 0, 0.25) inset',
          }}
        >
          <Grid container my={1} spacing={4}>
            {!loading &&
              colors.length > 0 &&
              colors.map((item, index) => (
                <Grid item md={4} xs={12}>
                  <ColorCard
                    title={item.name}
                    description={item.description}
                    image="/assets/brand-colors/red_color.png"
                    colorId={item._id}
                    colorShades={[item.accentColor, item.foregroundColor, item.backgroundColor]}
                  />
                </Grid>
              ))}
          </Grid>
        </Card>
      </Slide>

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
          onClick={onNext}
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
BrandColors.propTypes = {
  onNext: PropTypes.func,
  onBack: PropTypes.func,
};
