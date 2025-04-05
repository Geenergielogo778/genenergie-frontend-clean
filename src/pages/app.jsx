import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import BannerSection from 'src/sections/banner-section/banner';
import ContactUsSection from 'src/sections/contact-us-section/contact-us';
import CustomersSection from 'src/sections/customers-section/customers';
import GetStartedSection from 'src/sections/get-started-section/get-started';
import HowItWorksSection from 'src/sections/how-it-works-section/how-it-works';
import LogoCollectionSection from 'src/sections/logo-collection-section/logo-collection';
import LogoJourneySection from 'src/sections/logo-journey-section/logo-journey';
import OurFeaturesSection from 'src/sections/our-features-section/our-features';
import PricingSection from 'src/sections/pricing-section/pricing';
import { useTranslation } from 'react-i18next';
// import { AppView } from 'src/sections/overview/view';

// ----------------------------------------------------------------------

export default function AppPage() {
 const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title> Online Business and Company Logo Generator | GE Energie LOGO </title>
      </Helmet>
      <Box>
        <BannerSection
          image="/assets/banner/home-banner.png"
          headingTitle={t('easyWayto')}
          heading={t('makeLogo')}
          description={t('transformYourBrand')}
          minHeight="700px"
        />
        <OurFeaturesSection />
        <HowItWorksSection heading />
        <LogoJourneySection />
        <ContactUsSection />
        <CustomersSection />
        <PricingSection />
        <LogoCollectionSection />
        <GetStartedSection />
      </Box>
      {/* <AppView /> */}
    </>
  );
}
