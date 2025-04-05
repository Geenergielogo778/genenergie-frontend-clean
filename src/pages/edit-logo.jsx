import { Helmet } from 'react-helmet-async';
import EditLogo from 'src/sections/edit-logo/view';

// ----------------------------------------------------------------------

export default function EditLogoPage() {
  return (
    <>
      <Helmet>
        <title> Edit Logo | GE Energie Logo </title>
      </Helmet>

      <EditLogo />
    </>
  );
}
