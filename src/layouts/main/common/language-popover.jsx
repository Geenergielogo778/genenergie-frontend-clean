import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
// import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import Iconify from 'src/components/iconify/iconify';
import i18n from 'src/utils/i18n';
// ----------------------------------------------------------------------

const LANGS = [
  {
    value: 'en',
    label: 'English',
    icon: '/assets/icons/ic_flag_en.svg',
  },
  {
    value: 'pl',
    label: 'Polish', 
    icon: '/assets/icons/flag-for-flag-poland-svgrepo-com.svg',
  },
  {
    value: 'ru',
    label: 'Russian', 
    icon: '/assets/icons/flag-for-flag-russia-svgrepo-com.svg',
  },
  {
    value: 'de',
    label: 'German',
    icon: '/assets/icons/ic_flag_de.svg',
  },
  {
    value: 'fr',
    label: 'French',
    icon: '/assets/icons/ic_flag_fr.svg',
  },
  {
    value: 'it',
    label: 'Italian',
    icon: '/assets/icons/ic_flag_it.svg',
  },
  {
    value: 'pt',
    label: 'Portuguese',
    icon: '/assets/icons/ic_flag_pt.svg',
  },
  {
    value: 'es',
    label: 'Espanol',
    icon: '/assets/icons/ic_flag_es.svg',
  },
  {
    value: 'cz',
    label: 'Czech',
    icon: '/assets/icons/ic_flag_cz.svg',
  },
  
];

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const [open, setOpen] = useState(null);
  const [selected, setSelected] = useState('de');
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  useEffect(() => {
    const lang = JSON.parse(localStorage.getItem('lang'));
    if (lang) {
      handleSelect({ value: lang.value, label: lang.label });
    }
  }, []);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleSelect = (options) => {
    setSelectedLanguage(options.label);
    setSelected(options.value);
    localStorage.setItem('lang', JSON.stringify(options));
    i18n.changeLanguage(options.value);
    setOpen(null);
  };
  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleOpen}
        endIcon={<Iconify icon="zondicons:cheveron-down" />}
        sx={{
          '& .MuiButton-endIcon': {
            ml: '4px',
          },
          '&:hover': {
            borderWidth: '2px',
          },
          fontWeight: 500,
          px: '18px',
          fontSize: '16px',
          borderRadius: '12px',
          boxShadow: '2px 2px 2.7px 0px rgba(0, 0, 0, 0.25)',
          borderWidth: '2px',
        }}
      >
        {selectedLanguage}
        {/* <img src={LANGS[0].icon} alt={LANGS[0].label} /> */}
      </Button>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 180,
          },
        }}
      >
        {LANGS.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === selected}
            onClick={() => handleSelect(option)}
            sx={{ typography: 'body2', py: 1 }}
          >
            <Box component="img" alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />

            {option.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}
