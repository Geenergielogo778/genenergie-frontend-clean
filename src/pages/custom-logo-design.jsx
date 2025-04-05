import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import BannerSection from 'src/sections/banner-section/banner';
// import GetStartedSection from 'src/sections/get-started-section/get-started';
import CustomLogoSection from 'src/sections/custom-logo-design/custom-logo';
import { useTranslation } from 'react-i18next';

// ----------------------------------------------------------------------

export default function customLogoDesign() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title> Design Your Dream Logo: How GE Energie Logo Works </title>
        <link rel="canonical" href="https://www.geenergielogo.com/custom-logo-design/" />
      </Helmet>

      <Box>
        <BannerSection
          image="/assets/banner/home-banner.png"
          heading={t('customLogo')}
          description={t('customLogoDescription')}
          minHeight="760px"
          hideInput
        />
        <CustomLogoSection/>
      </Box>
    </>
  );
}
