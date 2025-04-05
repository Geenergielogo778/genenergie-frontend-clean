import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import BannerSection from 'src/sections/banner-section/banner';
import { useTranslation } from 'react-i18next';
import GraphicDesignSection from 'src/sections/graphic-design-section/graphic-design';
import GraphicDesigningLastSection from 'src/sections/graphic-design-section/graphic-design-last-section';

// ----------------------------------------------------------------------

export default function GraphicDesignServices() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title> Design Your Dream Logo: How GE Energie Logo Works </title>
        <link rel="canonical" href="https://www.geenergielogo.com/graphic-design-services/" />
      </Helmet>

      <Box>
        <BannerSection
          image="/assets/banner/home-banner.png"
          heading={t('graphicDesignHeading')}
          description={t('graphicDesignDescription')}
          minHeight="760px"
          hideInput
        />
        <GraphicDesignSection/>
        <GraphicDesigningLastSection hasShape/>
      </Box>
    </>
  );
}