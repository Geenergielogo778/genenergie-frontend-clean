import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
// import { Helmet } from 'react-helmet-async';
import BannerSection from 'src/sections/banner-section/banner';
import FaqsSection from 'src/sections/faqs-section/faqs';
import API from 'src/utils/axios';
import i18n from 'src/utils/i18n';
// import { useTranslation } from 'react-i18next';

const TwoParagraphs = () => {
  // const { t } = useTranslation();
  const [content, setContent] = useState('');
  const [langCode, setLangCode] = useState(i18n.language);
  const fetchContent = async () => {
    try {
      const res = await API.get('/pages/single/terms-conditions');
      console.log(res.data);
      setContent(res.data);
    } catch (error) {
      console.log(error);
      toast.error('Error while fetching content');
    }
  };
  useEffect(() => {
    fetchContent();
  }, []);
  useEffect(() => {
    i18n.on('languageChanged', (lng) => {
      setLangCode(i18n.language);
    });
  }, []);
  return (
    <Box>
      <BannerSection
        image="/assets/banner/faqs-banner.png"
        headingTitle=""
        heading="Terms & Conditions"
        // description="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        minHeight="620px"
        hideInput
      />
      <Box width={1}>
        <img width="100%" src="/assets/faqs-wave.png" alt="" />
      </Box>
      <Container p={4}>
        <Box
          sx={{
            color: 'white',
          }}
          dangerouslySetInnerHTML={{ __html: content[langCode] }}
        />
      </Container>
    </Box>
  );
};

export default TwoParagraphs;
