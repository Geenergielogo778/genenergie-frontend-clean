import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import AboutLogoSection from '../about-logo-section';
import LogosInActionSection from '../logos-in-action-section';
import { elementToSVG } from 'dom-to-svg';
import { useTranslation } from 'react-i18next';
import domtoimage from 'dom-to-image-more';
import { toast } from 'react-toastify';

const LogoPreview = () => {
  const { t } = useTranslation();
  const selectedConcept = useSelector((state) => state.generatedLogos.value.selectedLogoConcept);
  const packageId = useSelector((state) => state.user.subscription?.packageId);
  const handleDownload = async () => {
    if (!packageId) return toast.info('Please Subscribe to get access');
    let quality = 0.5;
    if (packageId === 'gen-lite') {
      quality = 0.9;
    }
    if (packageId === 'gen-premium') {
      quality = 1;
    }
    if (packageId === 'gen-business') {
      quality = 1;
    }

    // const node = document.querySelector('#logo-preview-download');
    const jpgnode = document.querySelector('#logo-preview');
    domtoimage.toPng(jpgnode, { quality: quality }).then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'genergie.png';
      link.href = dataUrl;
      link.click();
    });
    domtoimage.toJpeg(jpgnode, { quality: quality }).then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'genergie.jpg';
      link.href = dataUrl;
      link.click();
    });
    // const svg = elementToSVG(document.querySelector('#logo-preview'))
    // // svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    // const svgString = new XMLSerializer().serializeToString(svg)
    // const blob = new Blob([svgString], {type: 'image/svg+xml;charset=utf-8'})
    // console.log(svgString)
    // //convert blob to svg
    // const url = URL.createObjectURL(blob)
    // const link = document.createElement('a')
    // link.href = url
    // link.download = 'image.png'
    // link.click()
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

      <AboutLogoSection selectedConcept={selectedConcept} />
      <Box bgcolor="white" py="150px">
        <Grid container justifyContent="center">
          <Grid item lg={6} sm={12}>
            <Typography
              lineHeight={1}
              mb={2}
              textAlign="center"
              color="primary"
              fontSize={56}
              fontWeight={700}
            >
              {t('previewlogo')}
            </Typography>
            <Typography textAlign="center" fontSize={24} fontWeight={500}>
              {t('descriptionpreviewlogo')}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box py="60px" position="relative">
        <img
          width="100%"
          height="200px"
          style={{ position: 'absolute', top: '-150px' }}
          src="/assets/shape_upward_primary.png"
          alt=""
        />
        <Box textAlign="center">
          <Button
            variant="contained"
            size="large"
            onClick={handleDownload}
            sx={{
              fontWeight: 600,
              fontSize: '32px',
              borderRadius: '12px',
              px: '48px',
              minWidth: '170px',
              minHeight: '46px',
              boxShadow:
                '2px 2px 2.7px 0px rgba(0, 0, 0, 0.25), 3px 3px 2.3px 0px rgba(0, 0, 0, 0.25) inset, -3px 3px 2.7px 0px rgba(0, 0, 0, 0.25)',
            }}
          >
            {t('downloadbtn')}
          </Button>
        </Box>
        <img
          width="100%"
          height="200px"
          style={{ position: 'absolute', bottom: '-150px' }}
          src="/assets/shape_downward_primary.png"
          alt=""
        />
      </Box>

      {/* <LogosInActionSection />

      <Box py="60px" position="relative">
        <img
          width="100%"
          height="200px"
          style={{ position: 'absolute', top: '-150px' }}
          src="/assets/shape_upward_primary.png"
          alt=""
        />
        <Box textAlign="center">
          <Button
            variant="contained"
            size="large"
            onClick={() => handleDownload()}
            sx={{
              fontWeight: 600,
              fontSize: '32px',
              borderRadius: '12px',
              px: '48px',
              minWidth: '170px',
              minHeight: '46px',
              boxShadow:
                '2px 2px 2.7px 0px rgba(0, 0, 0, 0.25), 3px 3px 2.3px 0px rgba(0, 0, 0, 0.25) inset, -3px 3px 2.7px 0px rgba(0, 0, 0, 0.25)',
            }}
          >
            {t('downloadbtn')}
          </Button>
        </Box>
      </Box> */}
    </>
  );
};

export default LogoPreview;
