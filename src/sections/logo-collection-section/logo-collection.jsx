import {
  Box,
  Container,
  //   Grid,
  ImageList,
  ImageListItem,
  //   Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';


const LogoCollectionSection = () => {
  const { t } = useTranslation();
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const columns = isSmallScreen ? 1 : 3;

  const logos = [
    {
      img: '/assets/logos/logo_1.png',
      title: 'Logo_1',
    },
    {
      img: '/assets/logos/logo_2.png',
      title: 'Logo_2',
    },
    {
      img: '/assets/logos/logo_3.png',
      title: 'Logo_3',
    },
    {
      img: '/assets/logos/logo_4.png',
      title: 'Logo_4',
    },
    {
      img: '/assets/logos/logo_5.png',
      title: 'Logo_5',
    },
    {
      img: '/assets/logos/logo_6.jpg',
      title: 'Logo_6',
    },
    {
      img: '/assets/logos/logo_7.png',
      title: 'Logo_7',
    },
    {
      img: '/assets/logos/logo_8.png',
      title: 'Logo_8',
    },
    {
      img: '/assets/logos/logo_9.png',
      title: 'Logo_9',
    },
  ];
  return (
    <Box pt="20px" pb="50px" position="relative" sx={{
      backgroundImage: `url("/assets/section-shapes/logo-collections/logo_collection_bg.png")`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <img
        width="100%"
        height="200px"
        style={{ position: 'absolute', top: '-190px' }}
        src="/assets/shape_upward_primary.png"
        alt="Background Image"
      />
      <img
        className="d-sm-none"
        width="180px"
        height="250px"
        style={{ position: 'absolute', top: '-190px', right: 0 }}
        src="/assets/section-shapes/logo-collections/top_right.png"
        alt="top right logo"
      />
      <img
        className="d-sm-none"
        width="180px"
        height="auto"
        style={{ position: 'absolute', left: '220px', top: '-140px' }}
        src="/assets/section-shapes/logo-collections/top_left.png"
        alt="top left logo"
      />
      <Box
        color="black"
        py="32px"
        textAlign="center"
        sx={{
          background: 'white',
          boxShadow:
            '0px 17px 15px 0px rgba(0, 0, 0, 0.25) inset, 0px 19px 14.8px 0px rgba(0, 0, 0, 0.25)',
        }}
      >
        <Typography fontSize={32} color="primary" fontWeight={400} lineHeight={1}>
        {t('Explore')}
        </Typography>
        <Typography fontSize={56} color="primary" fontWeight={700} lineHeight={1.3}>
        {t('LogoCollection')}
        </Typography>
      </Box>
      <Container maxWidth="lg">
        <Box pt={10}>
          <ImageList variant="masonry" cols={columns} gap={8}>
            {logos.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Container>
    </Box>
  );
};

export default LogoCollectionSection;
