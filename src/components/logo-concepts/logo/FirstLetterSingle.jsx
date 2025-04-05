import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const TextLogo = ({ colors, title, slogan, font, size = 1, position, iconColor, iconRotation }) => {
  return (
    <Box
      className="logo-slide"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <div
        style={{ color: colors?.foregroundColor, fontSize: 100 * size, padding: 10 }}
        className={font}
      >
        {title ? title.charAt(0) : 'L '}
      </div>
      <p style={{ color: colors.foregroundColor, margin: 0 }}>{slogan ? slogan : ''}</p>
    </Box>
  );
};

export default TextLogo;
