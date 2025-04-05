import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import BannerSection from 'src/sections/banner-section/banner';
import GetStartedSection from 'src/sections/get-started-section/get-started';
import HowItWorksSection from 'src/sections/how-it-works-section/how-it-works';
import { useTranslation } from 'react-i18next';

// ----------------------------------------------------------------------

export default function HowItWorksPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title> Design Your Dream Logo: How GE Energie Logo Works </title>
        <link rel="canonical" href="https://www.geenergielogo.com/how-it-works/" />
      </Helmet>

      <Box>
        <BannerSection
          image="/assets/banner/how-it-works.png"
          heading={t('HowitWorks')}
          description={t('brandvision')}
          minHeight="760px"
        />

        <HowItWorksSection />

        <GetStartedSection hasShape />
      </Box>
    </>
  );
}
