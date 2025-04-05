import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import AdditionalServicesView from 'src/sections/additional-services/view/additional-services';

// ----------------------------------------------------------------------

export default function AdditionalServicesPage() {
  return (
    <>
      <Helmet>
        <title> Design Your Brand: Logo, Graphics & Custom Solutions </title>
        <link rel="canonical" href="https://www.geenergielogo.com/additional-services/" />
      </Helmet>

      <Box>
        <AdditionalServicesView />
      </Box>
    </>
  );
}
