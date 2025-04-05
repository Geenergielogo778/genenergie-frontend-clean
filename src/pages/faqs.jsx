import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import BannerSection from 'src/sections/banner-section/banner';
import FaqsSection from 'src/sections/faqs-section/faqs';
import { useTranslation } from 'react-i18next';

// ----------------------------------------------------------------------

export default function FaqsPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title> GE Energie Logo FAQs: Get Answers to Your Logo Design Questions </title>
        <link rel="canonical" href="https://www.geenergielogo.com/faqs/" />
      </Helmet>

      <Box>
        <BannerSection
          image="/assets/banner/faqs-banner.png"
          headingTitle={t('frequently')}
          heading={t('askedquestions')}
          description={t('findanswers')}
          minHeight="620px"
          hideInput
        />
        <FaqsSection />
      </Box>
    </>
  );
}
