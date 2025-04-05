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

const LogosInActionSection = () => {
  const { t } = useTranslation();
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const columns = isSmallScreen ? 1 : 2;

  const logos = [
    {
      img: '/assets/logo-preview/logos-in-action/display_1.png',
      title: 'Logo_1',
    },
    {
      img: '/assets/logo-preview/logos-in-action/display_4.png',
      title: 'Logo_2',
    },
    {
      img: '/assets/logo-preview/logos-in-action/display_6.png',
      title: 'Logo_3',
    },
    {
      img: '/assets/logo-preview/logos-in-action/display_2.png',
      title: 'Logo_4',
    },
    {
      img: '/assets/logo-preview/logos-in-action/display_3.png',
      title: 'Logo_5',
    },
    {
      img: '/assets/logo-preview/logos-in-action/display_5.png',
      title: 'Logo_6',
    },
    {
      img: '/assets/logo-preview/logos-in-action/display_7.png',
      title: 'Logo_7',
    },
    {
      img: '/assets/logo-preview/logos-in-action/display_8.png',
      title: 'Logo_8',
    },
  ];
  return (
    <Box py="150px" bgcolor="white" width={1}>
      <Typography lineHeight={1.2} textAlign="center" fontSize={56} color="primary" fontWeight={700}>
        {t('seelogoinaction')}
      </Typography>
      <Container maxWidth="xl">
      <Box pt={10}>
        <ImageList variant="masonry" cols={columns} gap={0}>
          {logos.map((item) => (
            <ImageListItem key={item.img}>
              <img
                width="100%"
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

export default LogosInActionSection;
