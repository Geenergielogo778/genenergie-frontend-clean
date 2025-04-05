import React from 'react';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogoTitle } from 'src/store/reducers/logoReducer';
import { useTranslation } from 'react-i18next';

export default function CreateLogoInput() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <TextField
      id="create-log-input"
      variant="outlined"
      placeholder={t('LogoName')}
      onChange={(e) => dispatch(setLogoTitle(e.target.value))}
      sx={{
        width: { md: '500px', sm: '100%' },
        background: 'white',
        borderRadius: '10px',
        boxShadow:
          '8px 8px 7.2px 0px rgba(0, 0, 0, 0.25), 8px 8px 11px 0px rgba(0, 0, 0, 0.25) inset',
        '& .MuiInputBase-root.MuiInputBase-root': {
          px: '10px',
          py: '5px',
          fontSize: '20px',
          fontWeight: 'bold',
        },
      }}
      InputProps={{
        endAdornment: (
          <Button
            variant="contained"
            onClick={() => navigate('/logo-creation')}
            sx={{
              fontWeight: 500,
              fontSize: '18px',
              borderRadius: '12px',
              // px: '36px',
              minWidth: '150px',
              minHeight: '56px',
              boxShadow:
                '2px 2px 2.7px 0px rgba(0, 0, 0, 0.25), 3px 3px 2.3px 0px rgba(0, 0, 0, 0.25) inset, -3px 3px 2.7px 0px rgba(0, 0, 0, 0.25)',
            }}
          >
           {t('CreateLogo')}
          </Button>
        ),
      }}
    />
  );
}