/* eslint-disable import/no-unresolved */
import * as React from 'react';
import PropTypes from 'prop-types';
// import Button from '@mui/material/Button';
import { Box, Button, Container, Grid, Slide, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import API from 'src/utils/axios';

import { useSelector, useDispatch } from 'react-redux';
import { setLogoConcepts, setSelectedLogoConcept } from 'src/store/reducers/generatedLogosReducer';
import logoConcepts, { COLORCHECK, renderLogos } from 'src/utils/logo-concepts';
import {
  FirstLetterSingle,
  FirstLetterTop,
  GradientText,
  LogoTitleOnly,
  SecondIconLogo,
  SvgLogo,
  TopEachOther,
  TypographyLogo,
  OnlySvgLogo,
} from 'src/components/logo-concepts';
import { setEditorConfig } from 'src/store/reducers/editor.reducer';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@mui/lab';
// const Generatelogo = lazy(() => import('src/components/generate-logo'));
// import Iconify from 'src/components/iconify/iconify';

export default function Logo({ onBack }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const allStyles = useSelector((state) => state.logo.value);
  const generatedLogos = useSelector((state) => state.generatedLogos?.value?.logoConcepts);
  // const selectedConcept = useSelector((state) => state.generatedLogos.value.selectedLogoConcept);
  const dispatch = useDispatch();
  const [logoState, setLoagoState] = React.useState([...generatedLogos]);
  const [Loading, setLoading] = React.useState(false);
  const [newLoading, setNewLoading] = React.useState(false);

  const handleLoadMore = async () => {
    try {
      setNewLoading(true);
      const result = await API.post('/logoconcept/generate-more', allStyles);
      const { data } = result;

      dispatch(setLogoConcepts(data));
      // const newData = [...logoState, ...data];
      setLoagoState(newData);
      setNewLoading(false);
    } catch (error) {
      setNewLoading(false);
      setLoading(false);
      console.log(error.message);
    }
  };
  const handleLogoSelctor = (logo, logotype) => {
    const concept = { ...logo, size: 3, position: 0, iconRotaion: 0 };
    dispatch(setSelectedLogoConcept({ ...logo }));
    dispatch(setEditorConfig(concept));
    navigate('/logo-preview');
  };
  React.useEffect(() => {
    console.log(generatedLogos);
  }, []);

  return (
    <Container>
      {generatedLogos &&
        generatedLogos.length > 0 &&
        generatedLogos.map((logo, index) => (
          <React.Fragment key={index}>
            {logo.logotype && (
              <Box component={'span'} sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    opacity: 0.2,
                    background: 'url(/assets/watermark.svg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'calc(30%) calc(30%)',
                    backgroundSize: 'calc(400px)',
                    zIndex: 0,
                  }}
                ></Box>
                <Slide
                  className="logo-slide"
                  key={index}
                  direction="up"
                  in
                  timeout={1000}
                  borderRadius="13px "
                >
                  <Grid container mt={8}>
                    <Grid item xs={12} lg={8}>
                      <Box
                        p={7}
                        width={1}
                        height={1}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        bgcolor={
                          logoConcepts.GRADIENT_TEXT == logo?.logotype
                            ? 'white'
                            : logo?.color?.backgroundColor
                        }
                        borderRadius="13px 0px 0px 0px"
                        boxShadow="8px 1px 11px 0px rgba(0, 0, 0, 0.25) inset"
                      >
                        {!Loading &&
                          renderLogos[logo?.logotype]({
                            title: logo?.title,
                            font: logo?.font,
                            colors: logo?.color,
                            slogan: logo?.tagline,
                            svgCode: logo?.iconCode,
                            fontSvg: logo?.fontSvg,
                            iconColor: COLORCHECK.includes(logo?.logotype)
                              ? logo?.color?.backgroundColor
                              : logo.color.foregroundColor,
                          })}
                      </Box>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <Box
                        p={5}
                        width={1}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        bgcolor={
                          logoConcepts.GRADIENT_TEXT == logo?.logotype
                            ? 'white'
                            : logo?.color?.backgroundColor
                        }
                        borderRadius="0px 13px 0px 0px"
                        boxShadow="8px 8px 11px 0px rgba(0, 0, 0, 0.25) inset"
                      >
                        <span
                          style={{
                            transform: 'scale(0.5)',
                          }}
                        >
                          {!Loading &&
                            renderLogos[logo?.logotype]({
                              title: logo?.title,
                              font: logo?.font,
                              colors: logo?.color,
                              slogan: logo?.tagline,
                              svgCode: logo?.iconCode,
                              fontSvg: logo?.fontSvg,
                            })}
                        </span>
                      </Box>
                      <Box
                        p={5}
                        width={1}
                        // height="calc(100% - 200px)"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        bgcolor={logo?.color?.foregroundColor}
                      >
                        <LogoTitleOnly
                          title={logo?.title}
                          font={logo?.font}
                          colors={logo?.color}
                          slogan={logo?.tagline}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box
                        display="flex"
                        flexWrap="wrap"
                        justifyContent="space-between"
                        alignItems="center"
                        px={5}
                        py={3}
                        bgcolor="white"
                        borderRadius="0px 0px 13px 13px"
                        boxShadow="8px 8px 7.2px 0px rgba(0, 0, 0, 0.25)"
                        gap={2}
                      >
                        <Box display="flex" flexWrap="wrap" gap="15px">
                          <Box display="flex">
                            <Box
                              bgcolor={logo?.color.foregroundColor}
                              width="46px"
                              height="36px"
                              borderRadius="5px 0px 0px 5px"
                            />
                            <Box width="46px" height="36px" bgcolor={logo?.color.backgroundColor} />
                          </Box>
                          <Typography whiteSpace="nowrap" fontSize="24px" fontWeight={600}>
                            {logo?.title}
                          </Typography>
                        </Box>
                        <Button
                          variant="outlined"
                          size="large"
                          onClick={() => handleLogoSelctor(logo)}
                          sx={{
                            '&:hover': { border: '2px solid black' },
                            border: '2px solid black',
                            color: 'black',
                            fontWeight: 600,
                            fontSize: '18px',
                            borderRadius: '12px',
                            minWidth: '170px',
                            minHeight: '46px',
                          }}
                        >
                          {t('previewbtn')}
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Slide>
              </Box>
            )}
          </React.Fragment>
        ))}

      <Box
        position="fixed"
        bottom="0"
        zIndex={10}
        left={0}
        width={1}
        display="flex"
        justifyContent="center"
        bgcolor="#fffffff2"
        boxShadow="0px -5px 15.3px 0px #FFF"
        py="6px"
        gap={2}
      >
        <Button
          variant="outlined"
          size="small"
          onClick={onBack}
          sx={{
            '&:hover': { border: '3px solid' },
            border: '3px solid',
            fontWeight: 500,
            fontSize: '12px',
            borderRadius: '12px',
            minWidth: '90px',
            minHeight: '40px',
          }}
        >
          {t('backbtn')}
        </Button>
        <LoadingButton
          loading={newLoading}
          disabled={newLoading}
          variant="contained"
          size="small"
          onClick={() => handleLoadMore()}
          sx={{
            fontWeight: 500,
            fontSize: '12px',
            borderRadius: '12px',
            // px: '36px0,
            minWidth: '100px',
            minHeight: '40px',
            boxShadow:
              '2px 2px 2.7px 0px rgba(0, 0, 0, 0.25), 3px 3px 2.3px 0px rgba(0, 0, 0, 0.25) inset, -3px 3px 2.7px 0px rgba(0, 0, 0, 0.25)',
          }}
        >
          {t('LoadMore')}
        </LoadingButton>
      </Box>
    </Container>
  );
}
Logo.propTypes = {
  onBack: PropTypes.func,
};
