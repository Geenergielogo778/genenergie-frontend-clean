import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import BannerSection from 'src/sections/banner-section/banner';
import { useTranslation } from 'react-i18next';
import SeoServiceSection from 'src/sections/seo-services-section/seo-services';
import SeoServiceLastSection from 'src/sections/seo-services-section/seo-service-last-section';

// ----------------------------------------------------------------------

export default function SeoServices() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title> Design Your Dream Logo: How GE Energie Logo Works </title>
        <link rel="canonical" href="https://www.geenergielogo.com/seo-services/" />
      </Helmet>

      <Box>
        <BannerSection
          image="/assets/banner/home-banner.png"
          heading={t('SeoHeading')}
          description={t('SeoDescription')}
          minHeight="760px"
          hideInput
        />
        <SeoServiceSection/>
        <SeoServiceLastSection hasShape />
      </Box>
    </>
  );
}