import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import BannerSection from 'src/sections/banner-section/banner';
import { useTranslation } from 'react-i18next';
import AnimationServicesSection from 'src/sections/animation-services-section/animation-services';
import AnimationLastSection from 'src/sections/animation-services-section/animation-service-last-section';

// ----------------------------------------------------------------------

export default function AnimationServices() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title> Design Your Dream Logo: How GE Energie Logo Works </title>
        <link rel="canonical" href="https://www.geenergielogo.com/animation-services/" />
      </Helmet>

      <Box>
        <BannerSection
          image="/assets/banner/home-banner.png"
          heading={t('AnimationHeading')}
          description={t('AnimationDescription')}
          minHeight="760px"
          hideInput
        />
        <AnimationServicesSection/>
        <AnimationLastSection hasShape/>
      </Box>
    </>
  );
}