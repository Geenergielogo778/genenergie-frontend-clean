import React from 'react';
import { Box, Typography, keyframes } from '@mui/material';
import { useTranslation } from 'react-i18next';

const blink = keyframes`
  0%, 80%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
`;

const App = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'full',
        height: '100vh',
        backgroundColor: '#FF6C0F', // Orange background
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background images */}
      <Box
        component="img"
        src="/assets/background1.svg"
        alt="Background 1"
        sx={{
          position: 'absolute',
          top: 180,
          left: '30px',
          width: { xs: 50, sm: 70, md: 100 },
          height: 'auto',
          zIndex: 0,
        }}
      />
      <Box
        component="img"
        src="/assets/background2.svg"
        alt="Background 2"
        sx={{
          position: 'absolute',
          bottom: '30px',
          left: '30%',
          width: { xs: 50, sm: 70, md: 100 },
          height: 'auto',
          zIndex: 0,
        }}
      />
      <Box
        component="img"
        src="/assets/background3.svg"
        alt="Background 3"
        sx={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          width: { xs: 50, sm: 70, md: 100 },
          height: 'auto',
          zIndex: 0,
        }}
      />
      <Box sx={{ zIndex: 1 }}>
        <Typography
          variant="h4"
          sx={{
            mb: 2,
            fontWeight: 700,
            color: 'white',
            fontSize: { xs: '30px', md: '40px' },
            textShadow: '5px 8px 4px rgba(0, 0, 0, 0.45)',
          }}
        >
          {t('logogenerating')}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            pt: '20px',
            fontSize: '40px',
            '& span': {
              display: 'block',
              width: '30px', // Size of the loading dots
              height: '30px',
              backgroundColor: 'white',
              borderRadius: '50%',
              animation: `${blink} 1.4s infinite both`,
              '&:nth-of-type(2)': {
                animationDelay: '0.2s',
              },
              '&:nth-of-type(3)': {
                animationDelay: '0.4s',
              },
            },
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Box>
      </Box>
      <Box
        component="img"
        src="/assets/girlcharacter.svg"
        alt="Character"
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: { xs: 150, sm: 250, md: 350, lg: 450 }, // Adjust the size as needed
          height: 'auto',
          zIndex: 0,
        }}
      />
    </Box>
  );
};

export default App;
