// import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Logo from 'src/components/logo';
import { Link, keyframes } from '@mui/material';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

// import { bgBlur } from 'src/theme/css';

import Iconify from 'src/components/iconify';

// import Searchbar from './common/searchbar';
import { usePathname } from 'src/routes/hooks';
import { HEADER } from './config-layout';
import AccountPopover from './common/account-popover';
import LanguagePopover from './common/language-popover';
import { useTranslation } from 'react-i18next';
// import NotificationsPopover from './common/notifications-popover';

// ----------------------------------------------------------------------

export default function Header({ onOpenNav }) {
  const { t } = useTranslation();
  const pathname = usePathname();

  // const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPosition(window.scrollY);
  //   };

  // Attach the scroll event listener
  //   window.addEventListener('scroll', handleScroll);

  // Cleanup the listener on component unmount
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const theme = useTheme();

  const lgUp = useResponsive('up', 'lg');

  const expandBorder = keyframes`
  0% {
    transform: scaleX(0);
    transform-origin: 50% 0%;
  }
  100% {
    transform: scaleX(1);
    transform-origin: 50% 0%;
  }
`;

  const renderContent = (
    <>
      {!lgUp ? (
        <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          <Iconify
            sx={{ color: '#000', width: '40px', height: '40px' }}
            icon="solar:hamburger-menu-broken"
          />
        </IconButton>
      ) : (
        <>
          {/* <Searchbar /> */}

          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: '36px' }}>
            <Logo sx={{ width: 120 }} />
          </Box>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                gap: '36px',
                mx: '20px !important',
                textAlign: 'center',
              }}
            >
              {[
                { href: '/logo-creation', label: t('Logocreation')},
                { href: '/how-it-works', label: t('HowitWorks') },
                { href: '/faqs', label: t('FAQ') },
                { href: '/pricing', label:t('Pricing') },
                { href: '/contact-us', label: t('ContactUs')  },
                { href: '/additional-services', label: t('addservices') },
              ].map((item, index) => (
                <Link
                  key={index}
                  component={RouterLink}
                  href={item.href}
                  sx={{
                    textDecoration: 'none',
                    pb: '3px',
                    borderBottom: pathname.includes(item.href) ? '2px solid #E4002B' : 'none',
                    fontSize: '18px',
                    fontWeight: 500,
                    position: 'relative',
                    '&:hover': {
                      ...(pathname.includes(item.href)
                        ? {} // No hover effect if link is already active
                        : {
                            borderBottomColor: '#E4002B',
                            '&:before': {
                              content: '""',
                              position: 'absolute',
                              width: '100%',
                              height: '100%',
                              borderBottom: '2px solid #E4002B',
                              bottom: 0,
                              left: 0,
                              transform: 'scaleX(1)',
                              transformOrigin: '50% 0%',
                              animation: `${expandBorder} 0.3s forwards`,
                            },
                          }),
                    },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
            {/* <NotificationsPopover /> */}
          </Stack>
        </>
      )}

      <Box display="flex" ml="auto">
        <AccountPopover />
        <LanguagePopover />
      </Box>
    </>
  );

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        backgroundColor: '#fff',
        color: '#E4002B',
        minHeight: '90px',
        // ...(scrollPosition > 100 && {
        //   ...bgBlur({
        //     color: 'rgb(130,130,130)',
        //     opacity: 0.3,
        //   }),
        // }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          // width: `calc(100% - ${NAV.WIDTH + 1}px)`,
          height: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
