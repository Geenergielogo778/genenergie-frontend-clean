import { Helmet } from 'react-helmet-async';

import SignUpView from 'src/sections/signup/signup-view';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Sign Up | Crypto Coach </title>
      </Helmet>

      <SignUpView />
    </>
  );
}
