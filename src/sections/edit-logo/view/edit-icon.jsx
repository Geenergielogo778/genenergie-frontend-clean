import React, { useEffect, useState } from 'react';
import Slider from '@mui/material/Slider';
import { Box, Card, Grid, IconButton, TextField, Typography } from '@mui/material';
import Iconify from 'src/components/iconify/iconify';
import { useDispatch, useSelector } from 'react-redux';
import { setSize, setIconCode, setIconRotation } from 'src/store/reducers/editor.reducer';
import API from 'src/utils/axios';
import { cachedIcons } from 'src/_mock/demo';
import { useTranslation } from 'react-i18next';
import { debounce } from 'lodash';

function EditIcon() {
  const size = useSelector((state) => state.editor.size);
  const keywords = useSelector((state) => state.logo.value.logoKeywords);
  const iconRotation = useSelector((state) => state.editor.iconRotation);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [allIcons, setAllIcons] = useState(cachedIcons);
  const [keywordName, setKeywordsName] = useState(keywords);
  // const [iconRotation, setIconRotation] = useState(0);
  const handelUpdateSize = (value) => {
    dispatch(setSize(value));
  };
  // Define the marks for the Slider
  const marks = [
    {
      value: 0,
      label: (
        <Box textAlign="center" mt={1}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="27"
            viewBox="0 0 6 27"
            fill="none"
          >
            <path
              d="M3.5 1C3.5 0.723858 3.27614 0.5 3 0.5C2.72386 0.5 2.5 0.723858 2.5 1H3.5ZM3 27L5.88675 22H0.113249L3 27ZM2.5 1V22.5H3.5V1H2.5Z"
              fill="currentColor"
            />
          </svg>
          <Typography fontSize={14}>0&deg;</Typography>
        </Box>
      ),
    },
    {
      value: 90,
      label: (
        <Box textAlign="center" mt={1}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="27"
            viewBox="0 0 6 27"
            fill="none"
          >
            <path
              d="M3.5 1C3.5 0.723858 3.27614 0.5 3 0.5C2.72386 0.5 2.5 0.723858 2.5 1H3.5ZM3 27L5.88675 22H0.113249L3 27ZM2.5 1V22.5H3.5V1H2.5Z"
              fill="currentColor"
            />
          </svg>
          <Typography fontSize={14}>90&deg;</Typography>
        </Box>
      ),
    },
    {
      value: 180,
      label: (
        <Box textAlign="center" mt={1}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="27"
            viewBox="0 0 6 27"
            fill="none"
          >
            <path
              d="M3.5 1C3.5 0.723858 3.27614 0.5 3 0.5C2.72386 0.5 2.5 0.723858 2.5 1H3.5ZM3 27L5.88675 22H0.113249L3 27ZM2.5 1V22.5H3.5V1H2.5Z"
              fill="currentColor"
            />
          </svg>
          <Typography fontSize={14}>180&deg;</Typography>
        </Box>
      ),
    },
    {
      value: 270,
      label: (
        <Box textAlign="center" mt={1}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="27"
            viewBox="0 0 6 27"
            fill="none"
          >
            <path
              d="M3.5 1C3.5 0.723858 3.27614 0.5 3 0.5C2.72386 0.5 2.5 0.723858 2.5 1H3.5ZM3 27L5.88675 22H0.113249L3 27ZM2.5 1V22.5H3.5V1H2.5Z"
              fill="currentColor"
            />
          </svg>
          <Typography fontSize={14}>270&deg;</Typography>
        </Box>
      ),
    },
    {
      value: 360,
      label: (
        <Box textAlign="center" mt={1}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="27"
            viewBox="0 0 6 27"
            fill="none"
          >
            <path
              d="M3.5 1C3.5 0.723858 3.27614 0.5 3 0.5C2.72386 0.5 2.5 0.723858 2.5 1H3.5ZM3 27L5.88675 22H0.113249L3 27ZM2.5 1V22.5H3.5V1H2.5Z"
              fill="currentColor"
            />
          </svg>
          <Typography fontSize={14}>360&deg;</Typography>
        </Box>
      ),
    },
  ];

  // Define a state variable for the slider value

  // Define handlers for the plus and minus buttons
  const handleMinus = () => {
    if (iconRotation <= 0) return;
    dispatch(setIconRotation(iconRotation - 25));
  };

  const handlePlus = () => {
    if (iconRotation >= 100) return;
    dispatch(setIconRotation(iconRotation + 25));
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

  const handleClickToChangeIcon = async (id) => {
    try {
      const enpoint = `/editor/${id}`;
      const response = await API.get(enpoint);
      const iconCode = response.data;
      // console.log(iconCode);

      dispatch(setIconCode(iconCode));
    } catch (error) {
      console.log(error);
    }
  };

  const debouncedFetchAllIcons = React.useCallback(
    debounce((newKeyword) => {
      fetchAllIcons(newKeyword);
    }, 500),
    [] // Ensure debounce function is only created once
  );

  // Handle the input change and call the debounced function
  const handleChange = (event) => {
    const newKeyword = event.target.value;
    setKeywordsName(newKeyword);
    debouncedFetchAllIcons(newKeyword);
  };

  useEffect(() => {
    // fetchAllIcons();
  }, []);

  return (
    <Box width={1}>
      <Card
        sx={{
          p: 3,
          boxShadow:
            '11px 11px 16.3px 0px rgba(0, 0, 0, 0.19) inset, 6px 6px 6.5px 0px rgba(0, 0, 0, 0.40), -11px -11px 16.3px 0px rgba(0, 0, 0, 0.19) inset',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h4" color="#000" textAlign="center">
            Icons Customization
          </Typography>
          <Typography variant="p" color="#000" textAlign="center" sx={{ mt: 5 }}>
            Rotate
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box display="flex" alignItems="baseline">
              <Iconify
                sx={{ width: '36px', height: '36px', color: '#000', cursor: 'pointer' }}
                icon="ei:minus"
                onClick={handleMinus}
              />
              <Slider
                sx={{
                  mx: '20px',
                  mb: '50px',
                  width: { sm: '300px', xs: '150px' },
                  color: '#000',
                  height: 12,
                  '& .MuiSlider-thumb': {
                    height: 24,
                    width: 24,
                    backgroundColor: '#000',
                    border: '2px solid currentColor',
                    '&:hover': {
                      boxShadow: '0 0 0 8px rgba(0, 0, 0, 0.16)',
                    },
                    '& .MuiSlider-valueLabel': {
                      background: 'transparent',
                      top: -10,
                      '& *': {
                        background: 'transparent',
                        color: '#000',
                      },
                    },
                  },
                  '& .MuiSlider-mark': {
                    backgroundColor: 'transparent',
                  },
                }}
                value={iconRotation} // Use the state variable here
                onChange={(event, newValue) => dispatch(setIconRotation(newValue))} // Update the state when the slider value changes
                aria-label="Custom thumb label"
                valueLabelDisplay="auto"
                step={15}
                marks={marks}
                min={0}
                max={360}
              />
              <Iconify
                sx={{ width: '36px', height: '36px', color: '#000', cursor: 'pointer' }}
                icon="ei:plus"
                onClick={handlePlus}
              />
            </Box>
          </Box>
        </Box>
        <Box
          textAlign="center"
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          mb={4}
        >
          <Typography variant="h5" color="#000" textAlign="center">
            Select Icons
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <TextField
              id="search"
              variant="outlined"
              placeholder={t('search')}
              size="small"
              value={keywordName}
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
        </Box>

        <Box display="flex" alignItems="baseline" sx={{ mb: 2, height: 200, overflowY: 'auto' }}>
          <Grid container spacing={1}>
            {allIcons.map((item, index) => (
              <Grid item xs={3} md={2}>
                <Box
                  key={index}
                  onClick={() => handleClickToChangeIcon(item._id)}
                  component="img"
                  sx={{
                    width: 60,
                    cursor: 'pointer',
                    border: '1px solid #e6e6e6',
                    p: 1,
                    borderRadius: 1,
                    transition: 'all 0.3s ease',
                    backgroundColor: '#e6e6e6',
                    '&:hover': {
                      backgroundColor: 'white',
                      boxShadow: '0 3px 5px rgba(0, 0, 0, 0.3)',
                      transform: 'scale(1.1)',
                    },
                  }}
                  src={item.url}
                  alt={item.name}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Card>
    </Box>
  );
}
export default EditIcon;
