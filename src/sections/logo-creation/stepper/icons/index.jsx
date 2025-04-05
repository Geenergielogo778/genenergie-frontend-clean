import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { Box, Card, Container, Fade, Grid, Slide, TextField, Typography } from '@mui/material';
import Iconify from 'src/components/iconify/iconify';
import API from 'src/utils/axios';
import { useDispatch, useSelector } from 'react-redux';
import { setLogoIcons } from 'src/store/reducers/logoReducer';
import { useTranslation } from 'react-i18next';
import { debounce } from 'lodash';

export default function Icons({ onNext, onBack }) {
  /***
   *
   * UseStates
   *
   */
  const [keyword, setKeyword] = React.useState('');
  const { t } = useTranslation();
  const [allIcons, setAllIcons] = React.useState([]);

  /***
   *
   * Redux Hooks
   *
   */
  const selectedIcons = useSelector((state) => state.logo.value.logoIcons);
  const keywords = useSelector((state) => state.logo.value.logoKeywords);
  const dispatch = useDispatch();

  /***
   *
   * Handle Selected Icons
   *
   *
   */
  const handleSelectIcons = (icons) => {
    if (selectedIcons.includes(icons)) {
      // If the designer is already selected, remove them from the selection
      dispatch(setLogoIcons(selectedIcons.filter((i) => i !== icons)));
      return;
    } else {
      // If the designer is not selected, add them to the selection
      dispatch(setLogoIcons([...selectedIcons, icons]));
    }
  };
  /**
   * Handle Remove Icons
   * @param {
   *
   * } icons
   */
  const handleRemoveIcons = (icons) => {
    dispatch(setLogoIcons(selectedIcons.filter((i) => i !== icons)));
  };
  /**
   * Fetch Icons on keywords
   * @param {
   *
   *
   * } keyword
   */
  const fetchAllIcons = async (keyword) => {
    try {
      // const response = await API.get(`/icon`);
      const response = await API.get(`/icon/noun-icons?keywords=${keyword ? keyword : keywords}`);
      console.log(response.data);
      setAllIcons(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Create a debounced version of the fetchAllIcons function
  const debouncedFetchAllIcons = React.useCallback(
    debounce((newKeyword) => {
      fetchAllIcons(newKeyword);
    }, 500),
    [] // Ensure debounce function is only created once
  );

  // Handle the input change and call the debounced function
  const handleChange = (event) => {
    const newKeyword = event.target.value;
    setKeyword(newKeyword);
    debouncedFetchAllIcons(newKeyword);
  };
  React.useEffect(() => {
    fetchAllIcons(keywords);
  }, []);
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
              {t('chooseicon')}
            </Typography>
            <Typography fontSize={20} color="white" textAlign="center">
              {t('iconsuggest')}
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
        <Grid container mb={5} mt={13} columnSpacing={5}>
          <Grid item md={8} xs={12}>
            <Card
              sx={{
                p: 0,
                pb: '36px',
                mb: '50px',
                boxShadow:
                  '8px 8px 7.2px 0px rgba(0, 0, 0, 0.25), 8px 8px 11px 0px rgba(0, 0, 0, 0.25) inset',
                borderRadius: '12px',
              }}
            >
              {/* Card Header */}

              <Box
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                gap={2}
                alignItems="center"
                p="20px 32px"
                boxShadow="8px 8px 7.2px 0px rgba(0, 0, 0, 0.25), 8px 8px 11px 0px rgba(0, 0, 0, 0.25) inset"
                borderRadius="12px"
              >
                <Typography variant="h4" fontWeight={300}>
                  {t('abstract')}
                </Typography>
                <TextField
                  id="search"
                  variant="outlined"
                  placeholder={t('search')}
                  size="small"
                  value={keyword}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <Iconify
                        icon="mingcute:search-line"
                        sx={{ width: '24px', height: '24px', color: '#575757', mr: '5px' }}
                      />
                    ),
                  }}
                  sx={{
                    background: 'white',
                    width: '170px',
                    borderRadius: '12px',
                    fontSize: '16px',
                    py: 0.5,
                    boxShadow:
                      '8px 8px 7.2px 0px rgba(0, 0, 0, 0.25), 8px 8px 11px 0px rgba(0, 0, 0, 0.25) inset',
                    '& .MuiInputBase-root.MuiInputBase-root': {
                      paddingRight: '8px',
                    },
                  }}
                />
              </Box>

              {/* Card Header */}

              <Grid container alignItems="center" spacing={4} padding="32px">
                {allIcons.length > 0 &&
                  allIcons.map((icon, index) => (
                    <Grid key={index} item md={2.4} sm={3} xs={6}>
                      <Box
                        onClick={() => handleSelectIcons(icon)}
                        display="flex"
                        alignItems="center"
                        width="100%"
                        height="105px"
                        p="16px"
                        bgcolor="white"
                        borderRadius="12px"
                        boxShadow="8px 8px 7.2px 0px rgba(0, 0, 0, 0.25), 8px 8px 11px 0px rgba(0, 0, 0, 0.25) inset"
                      >
                        <img
                          style={{ width: '100%', objectFit: 'contain' }}
                          src={icon.url}
                          alt=""
                        />
                      </Box>
                    </Grid>
                  ))}
              </Grid>
            </Card>
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
              <Typography fontSize="28px" fontWeight={500} textAlign="center" mb={4}>
                {t('favourites')}
              </Typography>
              <Grid container justifyContent="center" spacing={2}>
                {selectedIcons.length > 0 &&
                  selectedIcons.map((icon, index) => (
                    <Grid key={index} item md={4} sm={4} xs={6}>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        width="100%"
                        height="100px"
                        p="16px"
                        bgcolor="white"
                        borderRadius="12px"
                        border="1px solid #00000063"
                        position="relative"
                      >
                        <img
                          style={{ width: '70px', objectFit: 'contain' }}
                          src={icon.url}
                          alt=""
                        />
                        <Iconify
                          onClick={() => handleRemoveIcons(icon)}
                          icon="gridicons:cross-circle"
                          sx={{
                            color: '#E4002B',
                            background: 'white',
                            borderRadius: '50px',
                            width: '22px',
                            height: '22px',
                            position: 'absolute',
                            top: '-5px',
                            right: '-5px',
                          }}
                        />
                      </Box>
                    </Grid>
                  ))}
              </Grid>
            </Card>
          </Grid>
        </Grid>
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
Icons.propTypes = {
  onNext: PropTypes.func,
  onBack: PropTypes.func,
};
