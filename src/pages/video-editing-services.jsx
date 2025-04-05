import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import BannerSection from 'src/sections/banner-section/banner';
import { useTranslation } from 'react-i18next';
import VideoEditingSection from 'src/sections/video-editing-section/video-editing';
import VideoEditingLastSection from 'src/sections/video-editing-section/video-editing-last-section';

// ----------------------------------------------------------------------

export default function VideoEditingServices() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title> Design Your Dream Logo: How GE Energie Logo Works </title>
        <link rel="canonical" href="https://www.geenergielogo.com/video-editing-services/" />
      </Helmet>

      <Box>
        <BannerSection
          image="/assets/banner/home-banner.png"
          heading={t('videoEditingHeading')}
          description={t('videoEditingDescription')}
          minHeight="760px"
          hideInput
        />
        <VideoEditingSection/>
        <VideoEditingLastSection hasShape/>
      </Box>
    </>
  );
}