import { useEffect } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Avatar from '@mui/material/Avatar';
// import { alpha } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

// import { useResponsive } from 'src/hooks/use-responsive';

// import { account } from 'src/_mock/account';

import Logo from 'src/components/logo';
import Scrollbar from 'src/components/scrollbar';

import { Link } from '@mui/material';
import { NAV } from './config-layout';
// import { menuItems, preferenceItems } from './config-navigation';

// ----------------------------------------------------------------------

export default function Nav({ openNav, onCloseNav }) {
    const pathname = usePathname();

  // const upLg = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();    
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // const renderAccount = (
  //   <Box
  //     sx={{
  //       my: 3,
  //       mx: 2.5,
  //       py: 2,
  //       px: 2.5,
  //       display: 'flex',
  //       borderRadius: 1.5,
  //       alignItems: 'center',
  //       bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
  //     }}
  //   >
  //     <Avatar src={account.photoURL} alt="photoURL" />

  //     <Box sx={{ ml: 2 }}>
  //       <Typography variant="subtitle2">{account.displayName}</Typography>

  //       <Typography variant="body2" sx={{ color: 'text.secondary' }}>
  //         {account.role}
  //       </Typography>
  //     </Box>
  //   </Box>
  // );

  // const renderMenu = (
  //   <Stack component="nav" justifyContent="space-between" height={1} sx={{ px: 2 }}>
  //     <Box>
  //       <Typography color="white" fontSize={16} fontWeight={300} mb={2}>
  //         Menu
  //       </Typography>
  //       {menuItems.map((item) => (
  //         <NavItem key={item.title} item={item} />
  //       ))}
  //     </Box>
  //     <Box pb="50px">
  //       <Typography color="white" fontSize={16} fontWeight={300} mb={2}>
  //         Preference
  //       </Typography>
  //       {preferenceItems.map((item) => (
  //         <NavItem key={item.title} item={item} />
  //       ))}
  //     </Box>
  //   </Stack>
  // );

  // const renderUpgrade = (
  //   <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
  //     <Stack alignItems="center" spacing={3} sx={{ pt: 5, borderRadius: 2, position: 'relative' }}>
  //       <Box
  //         component="img"
  //         src="/assets/illustrations/illustration_avatar.png"
  //         sx={{ width: 100, position: 'absolute', top: -50 }}
  //       />

  //       <Box sx={{ textAlign: 'center' }}>
  //         <Typography variant="h6">Get more?</Typography>

  //         <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
  //           From only $69
  //         </Typography>
  //       </Box>

  //       <Button
  //         href="https://material-ui.com/store/items/minimal-dashboard/"
  //         target="_blank"
  //         variant="contained"
  //         color="inherit"
  //       >
  //         Upgrade to Pro
  //       </Button>
  //     </Stack>
  //   </Box>
  // );

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Logo sx={{ mt: 1, ml: 3, mb: 1, width: 250 }} />

      <Stack spacing={2} p={3}>
        {/* <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            gap: '36px',
            mr: '20px !important',
          }}
        > */}
        {[
          { href: '/logo-creation', label: 'Logo Creation' },
          { href: '/how-it-works', label: 'How it works' },
          { href: '/faqs', label: 'FAQ' },
          { href: '/pricing', label: 'Pricing' },
          { href: '/contact-us', label: 'Contact us' },
          { href: '/additional-services', label: 'Additional Services' },
        ].map((item, index) => (
          <Link
            key={index}
            component={RouterLink}
            href={item.href}
            sx={{
              textDecoration: pathname.includes(item.href) ? 'underline' : 'none',
              pb: '3px',
              fontSize: '18px',
              fontWeight: 500,
            }}
          >
            {item.label}
          </Link>
        ))}
        {/* </Box> */}
        {/* <NotificationsPopover /> */}
      </Stack>
    </Scrollbar>
  );

  return (
    <Box
    // sx={{
    //   flexShrink: { lg: 0 },
    //   width: { lg: NAV.WIDTH },
    // }}
    >
      {/* {upLg ? (
        <Box
          sx={{
            height: 1,
            position: 'fixed',
            width: NAV.WIDTH,
            // borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Box>
      ) : (
        
      )} */}
      {openNav && (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
              backgroundColor: 'white',
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

// ----------------------------------------------------------------------

function NavItem({ item }) {
  const pathname = usePathname();

  const active = pathname.includes(item.path);

  return (
    <ListItemButton
      component={RouterLink}
      href={item.path}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        typography: 'h5',
        color: 'white',
        textTransform: 'capitalize',
        fontWeight: 'fontWeightMedium',
        mb: 1,
        ...(active && {
          color: 'primary.main',
          fontWeight: 'fontWeightSemiBold',
          backgroundColor: 'transparent',
          border: '1px solid #fff',
          borderRadius: '8px',
          // '&:hover': {
          //   color: 'primary.main',
          //   fontWeight: 'fontWeightSemiBold',
          //   backgroundColor: 'transparent',
          //   border: '1px solid #fff',
          //   borderRadius: '8px',
          // },
        }),
      }}
    >
      <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
        {item.icon}
      </Box>

      <Box component="span">{item.title} </Box>
    </ListItemButton>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};
