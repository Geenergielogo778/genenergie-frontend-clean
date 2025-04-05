import { Box } from '@mui/material';
import React from 'react';

const Watermark = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: 0.2,
        background: 'url(/assets/watermark.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '300px',
      }}
    ></Box>
  );
};

export default Watermark;
