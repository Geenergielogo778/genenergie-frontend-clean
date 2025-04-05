import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import BannerSection from 'src/sections/banner-section/banner';
import { useTranslation } from 'react-i18next';
import CopyWritingSection from 'src/sections/copy-writing-services/copy-writing-services-section';
import CopyWritingLastSection from 'src/sections/copy-writing-services/copy-writing-last-section';

// ----------------------------------------------------------------------

export default function CopyWritingServices() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title> Design Your Dream Logo: How GE Energie Logo Works </title>
        <link rel="canonical" href="https://www.geenergielogo.com/copy-writing-services/" />
      </Helmet>

      <Box>
        <BannerSection
          image="/assets/banner/home-banner.png"
          heading={t('copyWritingServiceHeading')}
          description={t('copyWritingServiceDescription')}
          minHeight="760px"
          hideInput
        />
        <CopyWritingSection/>
        <CopyWritingLastSection hasShape />
      </Box>
    </>
  );
}