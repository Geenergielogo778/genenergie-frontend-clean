import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import ContactUsPage from 'src/sections/contact-us-section/contact-us-page';

// ----------------------------------------------------------------------

export default function ContactUsPageView() {
  return (
    <>
      <Helmet>
        <title> Contact GE Energie Logo - Get in Touch with Our Design Team </title>
        <link rel="canonical" href="https://www.geenergielogo.com/contact-us/" />
      </Helmet>

      <Box>
        <ContactUsPage />
      </Box>
    </>
  );
}
