import { Helmet } from 'react-helmet-async';

import { Profile } from 'src/sections/profile/view';

// ----------------------------------------------------------------------

export default function ProfilePage() {
  return (
    <>
      <Helmet>
        <title> My Profile | Crypto Coach </title>
      </Helmet>

      <Profile />
    </>
  );
}
