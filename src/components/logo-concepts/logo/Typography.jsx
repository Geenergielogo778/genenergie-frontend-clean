import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
const TextLogo = ({ colors, title, slogan, font, size = 3, position,iconColor }) => {
  return (
    <Box
      className={'logo-slide'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          color: colors.foregroundColor,
          minWidth: 'max-content',
          fontSize: title && title.length > 10 ? 20 * size : 30 * size,
          padding: 10,
        }}
        className={font}
      >
        {title ? title : 'Logo Name '}
      </div>
      <span style={{ marginTop: position, marginBottom: position }}></span>
      <p style={{ color: colors.foregroundColor, margin: 0, textTransform: 'capitalize' }}>
        {slogan && slogan}
      </p>
    </Box>
  );
};

export default TextLogo;
