import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import BannerSection from 'src/sections/banner-section/banner';
import { useTranslation } from 'react-i18next';
import SocialMediaManagementSection from 'src/sections/social-media-management-section/social-media-management';
import SocialMediaLastSection from 'src/sections/social-media-management-section/social-media-last-section';

// ----------------------------------------------------------------------

export default function SocialMediaManagement() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title> Design Your Dream Logo: How GE Energie Logo Works </title>
        <link rel="canonical" href="https://www.geenergielogo.com/social-media-management/" />
      </Helmet>

      <Box>
        <BannerSection
          image="/assets/banner/home-banner.png"
          heading={t('SocialMediaHeading')}
          description={t('SocialMediaDescription')}
          minHeight="760px"
          hideInput
        />
        <SocialMediaManagementSection/>
        <SocialMediaLastSection hasShape/>
      </Box>
    </>
  );
}