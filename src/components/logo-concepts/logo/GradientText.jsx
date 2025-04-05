import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
const GradientText = ({
  colors,
  title,
  slogan,
  font,
  size = 3,
  position,
  iconColor,
  iconRotation,
}) => {
  return (
    <Box
      className={'logo-slide'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        // width: '10%',
      }}
    >
      <div
        style={{
          color: 'transparent',
          minWidth: 'fit-content',
          backgroundImage: `linear-gradient(to right, ${colors?.backgroundColor}, ${colors?.foregroundColor}) `,
          fontSize: title && title.length > 10 ? 20 * size : 20 * size,
          padding: 10,
          backgroundClip: 'text',
          transform: `rotate(${iconRotation}deg)`,
        }}
        className={font}
      >
        {title ? title : 'Logo Name '}
      </div>
      <span style={{ marginTop: position, marginBottom: position }}></span>

      <p style={{ color: colors?.backgroundColor, margin: 0, textTransform: 'capitalize' }}>
        {slogan && slogan}
      </p>
    </Box>
  );
};

export default GradientText;
