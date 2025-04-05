import React from 'react';
import { Box, Button, Grid, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import EditColor from '../edit-color';
import EditSize from '../edit-size';
import EditPosition from '../edit-position';
import EditFonts from '../edit-fonts';
import EditTitle from './edit-title';
import EditSlogan from './edit-slogan';
import EditIcon from './edit-icon';
import { useDispatch, useSelector } from 'react-redux';
import logoConcepts, { renderLogos } from 'src/utils/logo-concepts';
import { setSavedLogos } from 'src/store/reducers/savedLogos.reducer';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import PACKAGES from 'src/utils/packages';
import { useNavigate } from 'react-router-dom';
const EditLogo = () => {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logo = useSelector((state) => state.generatedLogos.value.selectedLogoConcept);
  const editorConfig = useSelector((state) => state.editor);
  const packageId = useSelector((state) => state.user.subscription?.packageId);
  const limit = useSelector((state) => state.limit?.limit);
  console.log(editorConfig);
  const handeSavedLogo = () => {
    if (packageId === PACKAGES.BUSINESS && limit >= 5) {
      return toast.error(t('YOU HAVE REACHED TO SAVE LIMIT. UPGRADE PACKAGE TO MAKE CHANGES'));
    }
    const logoToSave = {
      title: editorConfig.title,
      font: editorConfig.font,
      colors: editorConfig.color,
      slogan: editorConfig.tagline,
      svgCode: editorConfig.iconCode,
      logotype: editorConfig.logotype,
      size: editorConfig.size,
      position: editorConfig.position,
      iconColor: editorConfig.iconColor,
      iconRotation: editorConfig.iconRotation,
    };
    toast.success(t('logoSaved'));
    console.log(logoToSave);
    dispatch(setSavedLogos(logoToSave));
    if (packageId === PACKAGES.BUSINESS) {
      dispatch(setLimit(limit + 1));
    }
  };

  const handleBuyNow = () => {
    handeSavedLogo();

    navigate('/pricing');
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box bgcolor="#FFFFFFA3">
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            gap: 15,
            margin: 0,
            paddingBlock: 20,
            fontSize: '20px',
            fontWeight: 500,
            color: '#000',
          }}
        >
          <li>{t('LogoName')}</li>
          <li>{t('keywords')}</li>
          <li>{t('virtualdesigners')}</li>
          <li>{t('brandcolors')}</li>
          <li>{t('icons')}</li>
          <li>{t('logostyles')}</li>
        </ul>
      </Box>
      <Grid container minHeight="calc(100vh - 160px)">
        <Grid
          item
          xs={12}
          md={6}
          bgcolor={
            editorConfig.logotype === logoConcepts.GRADIENT_TEXT
              ? 'white'
              : editorConfig.color.backgroundColor
          }
        >
          <Box display="flex" alignItems="center" justifyContent="center" height={1} p={5}>
            {renderLogos[editorConfig.logotype]({
              title: editorConfig.title,
              font: editorConfig.font,
              colors: editorConfig.color,
              slogan: editorConfig.tagline,
              svgCode: editorConfig.iconCode,
              position: editorConfig.position,
              size: editorConfig.size,
              iconColor: editorConfig.iconColor,
              iconRotation: editorConfig.iconRotation,
            })}
          </Box>
        </Grid>
        <Grid item xs={12} md={6} position="relative">
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              //   justifyContent: 'center',
              alignItems: 'center',
              height: 1,
              mt: { md: 13, xs: 5 },
              px: 3,
            }}
          >
            <TabContext value={value}>
              <TabList
                sx={{
                  mb: 1,
                  '& .MuiTabs-flexContainer': {
                    gap: 2,
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                  },
                  minHeight: '36px',
                  '& .MuiTabs-indicator': {
                    display: 'none',
                  },
                }}
                onChange={handleChange}
                aria-label="Edit logo tabs"
              >
                {[t('color'), t('size'), t('position'), t('font'), 'Title', 'Slogan', 'Icon'].map(
                  (label, index) => (
                    <Tab
                      key={index}
                      disableTouchRipple
                      label={label}
                      value={index + 1}
                      sx={{
                        '&.Mui-selected': {
                          color: '#000',
                          border: '2px solid #000',
                          background: 'transparent',
                          boxShadow: 'none',
                        },
                        py: 2,
                        px: 4,
                        fontSize: '15px',
                        minHeight: 'unset',
                        color: 'white',
                        background: '#E4002B',
                        fontWeight: 500,
                        boxShadow:
                          '4px 4px 7.3px 0px rgba(75, 14, 14, 0.25) inset, -4px -4px 7.5px 0px rgba(74, 17, 17, 0.25) inset',
                        borderRadius: '12px',
                        //   border: '2px solid transparent',
                      }}
                    />
                  )
                )}
                {packageId !== PACKAGES.FREE ? (
                  <Button
                    title={t('save')}
                    onClick={handeSavedLogo}
                    sx={{
                      py: 2,
                      px: 4,
                      fontSize: '12px',
                      minHeight: 'unset',
                      color: 'white',
                      background: '#E4002B',
                      fontWeight: 500,
                      boxShadow:
                        '4px 4px 7.3px 0px rgba(75, 14, 14, 0.25) inset, -4px -4px 7.5px 0px rgba(74, 17, 17, 0.25) inset',
                      borderRadius: '12px',
                      //   border: '2px solid transparent',
                    }}
                  >
                    Save
                  </Button>
                ) : (
                  <Button
                    title={t('save')}
                    onClick={handleBuyNow}
                    sx={{
                      py: 2,
                      px: 4,
                      fontSize: '12px',
                      minHeight: 'unset',
                      color: 'white',
                      background: '#E4002B',
                      fontWeight: 500,
                      boxShadow:
                        '4px 4px 7.3px 0px rgba(75, 14, 14, 0.25) inset, -4px -4px 7.5px 0px rgba(74, 17, 17, 0.25) inset',
                      borderRadius: '12px',
                      //   border: '2px solid transparent',
                    }}
                  >
                    Buy Now
                  </Button>
                )}
              </TabList>
              <TabPanel key={1} value={1} sx={{ px: 2, py: 3 }}>
                <EditColor
                  color={{ ...editorConfig.color, ternaryColor: editorConfig.iconColor }}
                />
              </TabPanel>
              <TabPanel key={2} value={2} sx={{ px: 2, py: 3 }}>
                <EditSize size={editorConfig.size} />
              </TabPanel>
              <TabPanel key={3} value={3} sx={{ px: 2, py: 3 }}>
                <EditPosition />
              </TabPanel>
              <TabPanel key={4} value={4} sx={{ px: 2, py: 3 }}>
                <EditFonts fontName={editorConfig.font} />
              </TabPanel>
              <TabPanel key={5} value={5} sx={{ px: 2, py: 3 }}>
                <EditTitle title={editorConfig.title} />
              </TabPanel>
              <TabPanel key={6} value={6} sx={{ px: 2, py: 3 }}>
                <EditSlogan slogan={editorConfig.tagline} />
              </TabPanel>
              <TabPanel key={7} value={7} sx={{ px: 2, py: 3 }}>
                <EditIcon size={editorConfig.size} />
              </TabPanel>
            </TabContext>
          </Box>
          <img
            width={100}
            className="d-md-none"
            style={{ position: 'absolute', right: 0, bottom: 0 }}
            src="/assets/edit-logo/edit_logo_avatar.svg"
            alt=""
          />
        </Grid>
      </Grid>
    </>
  );
};

export default EditLogo;
