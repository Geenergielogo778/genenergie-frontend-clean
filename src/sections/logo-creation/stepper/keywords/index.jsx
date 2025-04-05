import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { Box, Chip, Container, Fade, Grid, OutlinedInput, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setLogoKeywords } from 'src/store/reducers/logoReducer';
import { useTranslation } from 'react-i18next';

export default function Keywords({ onNext, onBack }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [keywords, setKeywords] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');
  const handleNext = () => {
    if (keywords.length < 1) {
      alert('Please fill the required fields');
    } else {
      dispatch(setLogoKeywords(keywords));
      onNext();
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && inputValue) {
      if (keywords.length < 3) {
        setKeywords([...keywords, inputValue]);
        setInputValue('');
      } else {
        alert('You can only add up to 3 keywords.');
      }
    }
  };

  const handleDelete = (chipToDelete) => () => {
    setKeywords((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  // ... step logic here

  return (
    <Container sx={{ position: 'relative' }}>
      <Grid container justifyContent="center" mt={5}>
        <Fade in timeout={1000}>
          <Grid item md={8}>
            <Typography
              fontSize={40}
              fontWeight={700}
              color="white"
              mb={1}
              sx={{ textShadow: '5px 8px 4px rgba(0, 0, 0, 0.45)' }}
              textAlign="center"
            >
              {t('chooseindustrykeywords')}
            </Typography>
            <Typography fontSize={20} color="white" textAlign="center">
              {t('industrykeywords')}
            </Typography>
            <Box sx={{}}>
              <Typography sx={{ textAlign: 'center', fontSize: 20, color: 'white', pt: 2 }}>
              {t('enterbuttonindustry')}
              </Typography>
            </Box>
            <Box
              display="flex"
              flexWrap="wrap"
              alignItems="center"
              gap={2}
              mb={4}
              bgcolor="white"
              maxWidth={{ md: '80%', xs: '100%' }}
              mx="auto"
              boxShadow="8px 8px 7.2px 0px rgba(0, 0, 0, 0.25), 8px 8px 11px 0px rgba(0, 0, 0, 0.25) inset"
              borderRadius="12px"
              p="20px"
            >
              {keywords.map((keyword) => (
                <Chip
                  sx={{
                    background: '#E4002B',
                    boxShadow:
                      '7px 7px 4px 0px #BBB, 8px 6px 7.3px 0px rgba(75, 14, 14, 0.25) inset, -5px 0px 9.3px 0px rgba(0, 0, 0, 0.25), -7px -6px 7.5px 0px rgba(74, 17, 17, 0.25) inset',
                    fontSize: '18px',
                    color: 'white',
                    p: 0.5,
                    height: '36px',
                    borderRadius: '100px',
                    '& .MuiChip-deleteIcon': { color: 'white' },
                    '& .MuiChip-deleteIcon:hover': { color: 'white' },
                  }}
                  key={keyword}
                  label={keyword}
                  onDelete={handleDelete(keyword)}
                />
              ))}

              <OutlinedInput
                sx={{
                  '& .MuiInputBase-input.MuiOutlinedInput-input': {
                    p: 0,
                  },
                  fontSize: '18px',
                  color: '#00000099',
                  fontWeight: 600,
                }}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t('industry')}
              />
            </Box>
            <Box display="flex" flexWrap="wrap-reverse" justifyContent="center" my={5} gap={2}>
              <Button
                variant="outlined"
                size="large"
                onClick={onBack}
                sx={{
                  '&:hover': { border: '3px solid #FFF' },
                  border: '3px solid #FFF',
                  color: 'white',
                  fontWeight: 500,
                  fontSize: '22px',
                  borderRadius: '12px',
                  minWidth: '170px',
                  minHeight: '46px',
                  boxShadow:
                    '8px 8px 7.2px 0px rgba(0, 0, 0, 0.25), 8px 8px 11px 0px rgba(0, 0, 0, 0.25) inset',
                }}
              >
                {t('backbtn')}
              </Button>
              <Button
                variant="contained"
                size="large"
                onClick={handleNext}
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
                {t('contbtn')}
              </Button>
            </Box>
          </Grid>
        </Fade>
        <img
          className="d-sm-none slide-from-right"
          style={{ position: 'absolute', right: 0, bottom: '-200px', width: '250px', zIndex: -1 }}
          src="/assets/logo-creation/avatars/first_two_steps_avatar.svg"
          alt="logo creation"
        />
      </Grid>
    </Container>
  );
}
Keywords.propTypes = {
  onNext: PropTypes.func,
  onBack: PropTypes.func,
};
