import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const SecondIconLogo = ({
  colors,
  title,
  slogan,
  font,
  size = 1,
  position,
  iconColor,
  iconRotation,
}) => {
  const findIndex = () => {
    if (title) {
      const index = title.indexOf(' ');
      console.log(index, 'INDEX');
      return index + 1;
    }
  };
  const index = findIndex();

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
      }}
    >
      <div
        style={{
          color: colors?.foregroundColor,
          fontSize: 50,
          minWidth: 'max-content',
          // Negative margin to bring the first letter closer
        }}
        className={font}
      >
        <span
          style={{
            marginRight: `2%`,
          }}
        >
          {title ? title.slice(0, index) : 'L'}
        </span>
        <span
          style={{
            color: colors?.foregroundColor,
            fontSize: 200,
            marginRight: `-${firstLetterMargin + 5}%`,
          }}
        >
          {title ? title.charAt(index) : 'L'}
        </span>
        <span>{title ? title.slice(index + 1, title.length) : 'ogo'}</span>
      </div>
      <span style={{ marginTop: position, marginBottom: position }}></span>
      <p style={{ color: colors?.foregroundColor, margin: 0 }}>{slogan && slogan}</p>
    </Box>
  );
};

export default SecondIconLogo;
