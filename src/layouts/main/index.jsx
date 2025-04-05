import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import Nav from './nav';
import Main from './main';
import Header from './header';
import Footer from './footer';

// ----------------------------------------------------------------------

export default function MainLayout({ children }) {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <Header openNav={openNav} onOpenNav={() => setOpenNav(true)} />

      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          // p: 3,
          // pl: 0,
          // background: '#FF6C0F',
          // backgroundPosition: 'center',
        }}
      >
        <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />

        <Main>{children}</Main>
      </Box>
      <Footer/>
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};
