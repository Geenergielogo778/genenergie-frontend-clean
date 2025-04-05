import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const FirstLetterTop = ({
  colors,
  title,
  slogan,
  font,
  size = 1,
  position,
  iconColor,
  iconRotation,
}) => {
  // Calculate negative margin for the first letter
  const firstLetterMargin = title ? title.length / (title.length / 2) : 0;
  return (
    <Box
      className={'logo-slide'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        // height: '100%',
      }}
    >
      <div
        style={{
          color: colors?.foregroundColor,
          fontSize: 50,
          // Negative margin to bring the first letter closer
        }}
        className={font}
      >
        <span
          style={{
            color: colors?.foregroundColor,
            fontSize: 200,
            marginRight: `-${firstLetterMargin}%`,
          }}
        >
          {title ? title.charAt(0) : 'L'}
        </span>
        <span>{title ? title.slice(1) : 'ogo'}</span>
      </div>
      <p style={{ color: colors?.foregroundColor, margin: 0 }}>{slogan ? slogan : 'slogan here'}</p>
    </Box>
  );
};

export default FirstLetterTop;
