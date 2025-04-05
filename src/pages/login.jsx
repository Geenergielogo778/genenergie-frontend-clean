import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { LoginView } from 'src/sections/login';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Login | GE Energie Logo </title>
      </Helmet>

      <LoginView />
    </>
  );
}
