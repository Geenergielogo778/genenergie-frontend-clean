import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import BannerSection from 'src/sections/banner-section/banner';
import DigitalMarketingServicesSection from 'src/sections/digital-marketing-services-section/digital-marketing';
import { useTranslation } from 'react-i18next';

// ----------------------------------------------------------------------

export default function DigitalMarketingServices() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title> Design Your Dream Logo: How GE Energie Logo Works </title>
        <link rel="canonical" href="https://www.geenergielogo.com/digital-marketing-services/" />
      </Helmet>

      <Box>
        <BannerSection
          image="/assets/banner/home-banner.png"
          heading={t('DigiMarkServ')}
          description={t('DigiMarkServDescription')}
          minHeight="760px"
          hideInput
        />
        <DigitalMarketingServicesSection/>
      </Box>
    </>
  );
}