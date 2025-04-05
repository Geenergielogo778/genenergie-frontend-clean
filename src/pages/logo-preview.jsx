import { Helmet } from 'react-helmet-async';
import LogoPreview from 'src/sections/logo-preview/view';

// ----------------------------------------------------------------------

export default function LogoPreviewPage() {
  return (
    <>
      <Helmet>
        <title> Logo Preview | GE Energie Logo </title>
      </Helmet>

      <LogoPreview />
    </>
  );
}
