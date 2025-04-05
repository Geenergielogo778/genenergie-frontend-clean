import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { setLogoTitle, setLogoTagline } from 'src/store/reducers/logoReducer';
import {
  Container,
  Fade,
  Grid,
  TextField,
  Tooltip,
  Typography,
  styled,
  tooltipClasses,
} from '@mui/material';
import Iconify from 'src/components/iconify/iconify';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { usePathname } from 'src/routes/hooks';

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    p: 10,
    textAlign: 'center',
  },
}));

export default function LogoName({ onNext }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const logo = useSelector((state) => state.logo.value);
  const params = new URLSearchParams().get('params');

  // state
  const [logoName, setName] = React.useState(undefined);
  const [logoTagline, setTagline] = React.useState(undefined);
  // nextSection handler
  const handleNextStep = () => {
    if (!logo.logoTitle) {
      alert('Please fill the required fields');
    } else {
      onNext();
    }
  };
  return (
    <Container sx={{ position: 'relative' }}>
      <Grid container justifyContent="center" mt={5}>
        <Fade in timeout={1000}>
          <Grid item md={6} xs={12} textAlign="center">
            <Typography
              fontSize={40}
              fontWeight={700}
              color="white"
              mb={1}
              sx={{ textShadow: '5px 8px 4px rgba(0, 0, 0, 0.45)' }}
              textAlign="center"
            >
              {t('enterlogoname')}
            </Typography>
            <Typography fontSize={20} color="white" textAlign="center">
            {t('changelogoname')}
            </Typography>

            <TextField
              id="logo_name"
              variant="outlined"
              placeholder={t('LogoName')}
              fullWidth
              // value={logoName}
              value={logo.logoTitle}
              onChange={(e) => dispatch(setLogoTitle(e.target.value))}
              InputProps={{
                endAdornment: (
                  <BootstrapTooltip title={t('logosuggest')}>
                    <Iconify
                      icon="iconamoon:information-square-light"
                      sx={{ width: '32px', height: '32px', cursor: 'default' }}
                    />
                  </BootstrapTooltip>
                ),
              }}
              sx={{
                background: 'white',
                borderRadius: '10px',
                fontSize: '24px',
                my: 3,
                py: 1,
                px: 1,
                boxShadow:
                  '8px 8px 7.2px 0px rgba(0, 0, 0, 0.25), 8px 8px 11px 0px rgba(0, 0, 0, 0.25) inset',
                '& .MuiInputBase-root.MuiInputBase-root': {
                  paddingRight: '8px',
                },
              }}
            />
            <TextField
              id="tagline"
              variant="outlined"
              placeholder={t('tagoptional')}
              fullWidth
              value={logo.logoTagline}
              onChange={(e) => dispatch(setLogoTagline(e.target.value))}
              InputProps={{
                endAdornment: (
                  <BootstrapTooltip title={t('tagsuggest')}>
                    <Iconify
                      icon="iconamoon:information-square-light"
                      sx={{ width: '32px', height: '32px', cursor: 'default' }}
                    />
                  </BootstrapTooltip>
                ),
              }}
              sx={{
                background: 'white',
                borderRadius: '10px',
                fontSize: '24px',
                mb: 3,
                py: 1,
                px: 1,
                boxShadow:
                  '8px 8px 7.2px 0px rgba(0, 0, 0, 0.25), 8px 8px 11px 0px rgba(0, 0, 0, 0.25) inset',
                '& .MuiInputBase-root.MuiInputBase-root': {
                  paddingRight: '8px',
                },
              }}
            />
            <Button
              variant="contained"
              size="large"
              onClick={handleNextStep}
              sx={{
                mt: 4,
                fontWeight: 500,
                fontSize: '22px',
                borderRadius: '12px',
                // px: '36px',
                minWidth: '170px',
                minHeight: '46px',
                boxShadow:
                  '2px 2px 2.7px 0px rgba(0, 0, 0, 0.25), 3px 3px 2.3px 0px rgba(0, 0, 0, 0.25) inset, -3px 3px 2.7px 0px rgba(0, 0, 0, 0.25)',
              }}
            >
              {t('contbtn')}
            </Button>
          </Grid>
        </Fade>
        <img
          className="d-sm-none slide-from-right"
          style={{ position: 'absolute', right: 0, bottom: '-200px', width: '250px', zIndex: -1 }}
          src="/assets/logo-creation/avatars/first_two_steps_avatar.svg"
          alt="logo creation"
        />
      </Grid>
    </Container>
  );
}
LogoName.propTypes = {
  onNext: PropTypes.func,
};
