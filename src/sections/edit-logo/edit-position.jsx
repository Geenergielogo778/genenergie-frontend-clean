import React, { useEffect, useState } from 'react';
import Slider from '@mui/material/Slider';
import { Box, Button, Card, Typography } from '@mui/material';
import Iconify from 'src/components/iconify/iconify';
import { useDispatch, useSelector } from 'react-redux';
import { setPosition } from 'src/store/reducers/editor.reducer';

function EditPosition() {
  const position = useSelector((state) => state.editor.position);
  const dispatch = useDispatch();

  const handleSetPosition = (position) => {
    dispatch(setPosition(position));
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
          <Typography fontSize={14}>0</Typography>
        </Box>
      ),
    },
    {
      value: 25,
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
          <Typography fontSize={14}>25</Typography>
        </Box>
      ),
    },
    {
      value: 50,
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
          <Typography fontSize={14}>50</Typography>
        </Box>
      ),
    },
    {
      value: 75,
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
          <Typography fontSize={14}>75</Typography>
        </Box>
      ),
    },
    {
      value: 100,
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
          <Typography fontSize={14}>100</Typography>
        </Box>
      ),
    },
  ];

  // Define a state variable for the slider value
  const [value, setValue] = useState(0);

  // Define handlers for the plus and minus buttons
  const handleMinus = () => {
    handleSetPosition(Math.max(position - 25, 0));
  };

  const handlePlus = () => {
    handleSetPosition(Math.min(position + 25, 100));
  };

  return (
    <Box width={1}>
      <Card
        sx={{
          p: 3,
          boxShadow:
            '11px 11px 16.3px 0px rgba(0, 0, 0, 0.19) inset, 6px 6px 6.5px 0px rgba(0, 0, 0, 0.40), -11px -11px 16.3px 0px rgba(0, 0, 0, 0.19) inset',
        }}
      >
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" color="#000" textAlign="center">
            Position
          </Typography>
          <Button sx={{ color: '#6C6C6C', fontWeight: 400, fontSize: '18px' }}>Reset</Button>
        </Box>
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
            value={position} // Use the state variable here
            onChange={(event, newValue) => handleSetPosition(newValue)} // Update the state when the slider value changes
            aria-label="Custom thumb label"
            valueLabelDisplay="auto"
            step={0.1}
            marks={marks}
            min={0}
            max={100}
          />
          <Iconify
            sx={{ width: '36px', height: '36px', color: '#000', cursor: 'pointer' }}
            icon="ei:plus"
            onClick={handlePlus}
          />
        </Box>
      </Card>
    </Box>
  );
}

export default EditPosition;
