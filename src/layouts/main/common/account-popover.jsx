import { useState } from 'react';

import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
// import { alpha } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';

import { account } from 'src/_mock/account';
import { Avatar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggeInUser, setLoggedInToken, setSubscription } from 'src/store/reducers/userReducer';
import { useTranslation } from 'react-i18next';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setLoggeInUser(null));
    dispatch(setLoggedInToken(null));
    dispatch(setSubscription(null));
    
    handleClose();
  };
  const MENU_OPTIONS = [
    // {
    //   label: 'Home',
    //   icon: 'eva:home-fill',
    // },
    {
      label: t('profile'),
      icon: 'eva:person-fill',
    },
    // {
    //   label: 'Settings',
    //   icon: 'eva:settings-2-fill',
    // },
  ];

  // const handleOpen = (event) => {
  //   setOpen(event.currentTarget);
  // };

  const handleClose = () => {
    setOpen(null);
  };
  const toggle = () => setOpen((prev) => !prev);

  return (
    <>
      {/* <IconButton
        onClick={handleOpen}
        sx={{
          mx: "16px",
          width: 'auto',
          height: 40,
          background: 'transparent',
        }}
        disableRipple
        disableFocusRipple
      >
        <Avatar
          src={account.photoURL}
          alt={account.displayName}
          sx={{
            width: 36,
            height: 36,
            border: (theme) => `solid 2px ${theme.palette.background.default}`,
          }}
        >
          {account.displayName.charAt(0).toUpperCase()}
        </Avatar>
      </IconButton> */}
      {!user ? (
        <Button
          variant="contained"
          size="sm"
          onClick={() => navigate('/login')}
          sx={{
            mx: '16px',
            fontWeight: 500,
            minWidth: '85px',
            fontSize: '16px',
            borderRadius: '12px',
            boxShadow:
              '2px 2px 2.7px 0px rgba(0, 0, 0, 0.25), 3px 3px 2.3px 0px rgba(0, 0, 0, 0.25) inset, -3px 3px 2.7px 0px rgba(0, 0, 0, 0.25)',
          }}
        >
          {t('login')}
        </Button>
      ) : (
        <>
          <Avatar
            sx={{
              mr: 2,
            }}
            onClick={toggle}
          />
        </>
      )}
      <Popover
        open={open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 10,
            ml: 0.75,
            width: 200,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2 }}>
          <Typography variant="subtitle2" noWrap>
            {user && user.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {user && user.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem key={option.label} onClick={() => navigate('/profile')}>
            {option.label}
          </MenuItem>
        ))}

        <Divider sx={{ borderStyle: 'dashed', m: 0 }} />

        <MenuItem
          disableRipple
          disableTouchRipple
          onClick={handleLogout}
          sx={{ typography: 'body2', color: 'error.main', py: 1.5 }}
        >
          {t('logout')}
        </MenuItem>
      </Popover>
    </>
  );
}
