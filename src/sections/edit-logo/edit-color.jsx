import React, { useEffect, useState } from 'react';
import { Box, Stack, TextField, Typography } from '@mui/material';
import ColorPicker from 'react-pick-color';
import { useDispatch } from 'react-redux';
import {
  setBackgroundColor,
  setForegroundColor,
  setTernaryColor,
} from 'src/store/reducers/editor.reducer';

function EditColor({ color }) {
  const colorConfig = {
    FOREGROUND: 'foregroundColor',
    BACKGROUND: 'backgroundColor',
    TERNARY: 'ternaryColor',
  };
  const dispatch = useDispatch();
  const { foregroundColor, backgroundColor, ternaryColor } = color;

  // const [colors, setColors] = useState([color.foregroundColor, '#00ff00', '#0000ff']);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(colorConfig.FOREGROUND);
  // const [changeColor, setChangeColor] = useState({
  //   foregroundColor,
  //   backgroundColor,
  // });

  const handleColorChange = (newColor) => {
    if (selectedColor == colorConfig.FOREGROUND) {
      dispatch(setForegroundColor(newColor.hex));
    }
    if (selectedColor == colorConfig.BACKGROUND) {
      dispatch(setBackgroundColor(newColor.hex));
    }
    if (selectedColor == colorConfig.TERNARY) {
      dispatch(setTernaryColor(newColor.hex));
    }
    console.log(selectedColor, newColor.hex, 'Selected Color');
  };

  const handelSelectedColors = (colors) => {
    setSelectedColor(colors);

    console.log(color[selectedColor]);
  };

  const handleInputChange = (event) => {
    if (selectedColorIndex !== null) {
      // Validate the color input
      const isValidColor =
        /^#([0-9A-F]{3}){1,2}$/i.test(event.target.value) ||
        /^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/i.test(event.target.value) ||
        /^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),(\d*(?:\.\d+)?)\)$/i.test(event.target.value) ||
        typeof event.target.value === 'string';
      if (isValidColor) {
        // setColors(
        //   colors.map((color, index) => (index === selectedColorIndex ? event.target.value : color))
        // );
        if (selectedColor == colorConfig.FOREGROUND) {
          dispatch(setForegroundColor(event.target.value));
        }
        if (selectedColor == colorConfig.BACKGROUND) {
          dispatch(setBackgroundColor(event.target.value));
        }
      }
    }
  };

  return (
    <Stack alignItems="center">
      <div>
        <ColorPicker
          hideInputs
          hideAlpha
          theme={{
            background: 'transparent',
            borderRadius: '10px',
            borderColor: 'transparent',
            boxShadow: 'none',
          }}
          color={color[selectedColor]}
          onChange={handleColorChange}
        />
      </div>
      <TextField
        onChange={handleInputChange}
        size="small"
        sx={{
          background: 'white',
          width: '120px',
          textAlign: 'center',
          borderRadius: '12px',
          '& .MuiInputBase-input': {
            textAlign: 'center', // Center the text content
            fontWeight: 600,
            color: '#000',
          },
        }}
        value={color[selectedColor]}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          marginTop: '20px',
          gap: { xs: '20px', sm: 0 },
        }}
      >
        <span
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'white',
            margin: 5,
          }}
        >
          <Typography
            sx={{
              marginBottom: 2,
              fontWeight: 700,
              fontSize: 10,
            }}
          >
            {'Color # 1'}
          </Typography>

          <Box
            border={selectedColor == colorConfig.FOREGROUND ? '2px solid black' : ''}
            mr={2}
            padding={2}
            style={{
              width: '100px',
              borderRadius: '10px',
              height: '50px',
              background: foregroundColor ? foregroundColor : 'white',
            }}
            onClick={() => handelSelectedColors(colorConfig.FOREGROUND)}
          />
        </span>
        <span
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'white',
            margin: 5,
          }}
        >
          <Typography
            sx={{
              marginBottom: 2,
              fontWeight: 700,
              fontSize: 10,
            }}
          >
            {'Color # 2'}
          </Typography>

          <Box
            border={selectedColor == colorConfig.BACKGROUND ? '2px solid black' : ''}
            mr={2}
            padding={2}
            style={{
              width: '100px',
              borderRadius: '10px',
              height: '50px',
              background: backgroundColor ? backgroundColor : 'white',
            }}
            onClick={() => handelSelectedColors(colorConfig.BACKGROUND)}
          />
        </span>
        <span
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'white',
            margin: 5,
          }}
        >
          <Typography
            sx={{
              marginBottom: 2,
              fontWeight: 700,
              fontSize: 10,
            }}
          >
            {' Color # 3'}
          </Typography>

          <Box
            border={selectedColor == colorConfig.TERNARY ? '2px solid black' : ''}
            mr={2}
            padding={2}
            style={{
              width: '100px',
              borderRadius: '10px',
              height: '50px',
              background: ternaryColor ? ternaryColor : 'white',
            }}
            onClick={() => handelSelectedColors(colorConfig.TERNARY)}
          />
        </span>
      </Box>
    </Stack>
  );
}

export default EditColor;
