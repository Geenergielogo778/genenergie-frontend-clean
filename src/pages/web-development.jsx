import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import BannerSection from 'src/sections/banner-section/banner';

import WebDevelopmentSection from 'src/sections/web-development-service-section/web-development';
import { useTranslation } from 'react-i18next';
import WebDevelopmentLastSection from 'src/sections/web-development-service-section/web-development-last-section';

// ----------------------------------------------------------------------

export default function WebDevelopmentPage() {
  const { t, i18n } = useTranslation();

 const webdevHeading = t('webdevHeading'); 
  const webDevDescription = t('webDevDescription'); 

  return (
    <>
      <Helmet>
        <title> Design Your Dream Logo: How GE Energie Logo Works </title>
        <link rel="canonical" href="https://www.geenergielogo.com/web-development-services/" />
      </Helmet>

      <Box>
        <BannerSection
          image="/assets/banner/home-banner.png"
          heading={webdevHeading} 
          description={webDevDescription} 
          minHeight="760px"
          hideInput
        />
        <WebDevelopmentSection />
        <WebDevelopmentLastSection hasShape/>
        
      </Box>
    </>
  );
}
