import { Helmet } from 'react-helmet-async';
import LogoCreation from 'src/sections/logo-creation/view/logo-creation';

// ----------------------------------------------------------------------

export default function LogoCreationPage() {
  return (
    <>
      <Helmet>
        <title>Create Your Logo Online - Geenergie Logo Maker</title>
        <link rel="canonical" href="https://www.geenergielogo.com/logo-creation/" />
      </Helmet>

      <LogoCreation />
    </>
  );
}
