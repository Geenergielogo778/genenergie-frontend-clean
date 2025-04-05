import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
const TopEachOther = ({ colors, title, slogan, font, size = 5, position,iconColor }) => {
  const findIndex = () => {
    if (title) {
      const index = title.indexOf(' ');
      console.log(index, 'INDEX');
      return index + 1;
    }
  };
  const index = findIndex();
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
          fontSize: title && title.length > 10 ? 20 * size : 20 * size,
        }}
        className={font}
      >
        {title ? title.slice(0, index) : 'Logo Name '}
      </div>
      <span style={{ marginTop: position, marginBottom: position }}></span>
      <div
        style={{
          color: colors.foregroundColor,
          fontSize: title && title.length > 2 ? 20 * size : 20 * size,
          paddingBottom: 10,
        }}
        className={font}
      >
        {title ? title.slice(index) : 'Logo Name '}
      </div>
      <span style={{ marginTop: position, marginBottom: position }}></span>
      <p style={{ color: colors.foregroundColor, margin: 0, textTransform: 'capitalize' }}>
        {slogan && slogan}
      </p>
    </Box>
  );
};

export default TopEachOther;
