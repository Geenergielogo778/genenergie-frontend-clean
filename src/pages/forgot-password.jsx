import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { ForgotPasswordView } from 'src/sections/forgot-password';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Forgot Password | GE Energie Logo </title>
      </Helmet>

      <ForgotPasswordView />
    </>
  );
}
