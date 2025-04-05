import React from 'react';
import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material/Button';
import { Box, Button, Container, Typography } from '@mui/material';
import Iconify from 'src/components/iconify/iconify';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FaqsSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Box pb="100px">
      <Box width={1}>
        <img width="100%" src="/assets/faqs-wave.png" alt="faq wave" />
      </Box>
      <Container maxWidth="lg">
        <Box mb={12}>
          <Typography
            sx={{ textShadow: '4px 5px 4px rgba(0, 0, 0, 0.45)' }}
            mb={2}
            color="white"
            fontSize={48}
            fontWeight={700}
          >
            {t('logomaker')}
          </Typography>
          <Accordion
            sx={{
              marginBottom: '15px',
              borderRadius: '10px',
              fontSize: '20px',
              p: '10px 5px',
              color: '#000',
              boxShadow:
                '11px 11px 16.3px 0px rgba(0, 0, 0, 0.19) inset, 6px 6px 6.5px 0px rgba(0, 0, 0, 0.40), -11px -11px 16.3px 0px rgba(0, 0, 0, 0.19) inset',
            }}
          >
            <AccordionSummary
              sx={{ '&.Mui-expanded': { color: (theme) => theme.palette.primary.main } }}
              expandIcon={
                <Iconify sx={{ width: '28px', height: '28px' }} icon="zondicons:cheveron-down" />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {t('doneedsignup')}
            </AccordionSummary>
            <AccordionDetails>
            {t('regnotrequired')}
              <br />
              <br />
              {t('logostored')} <br />
              <br />
              {t('usesamebrowser')}
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              marginBottom: '15px',
              borderRadius: '10px',
              fontSize: '20px',
              p: '10px 5px',
              color: '#000',
              boxShadow:
                '11px 11px 16.3px 0px rgba(0, 0, 0, 0.19) inset, 6px 6px 6.5px 0px rgba(0, 0, 0, 0.40), -11px -11px 16.3px 0px rgba(0, 0, 0, 0.19) inset',
            }}
          >
            <AccordionSummary
              sx={{ '&.Mui-expanded': { color: (theme) => theme.palette.primary.main } }}
              expandIcon={
                <Iconify sx={{ width: '28px', height: '28px' }} icon="zondicons:cheveron-down" />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {t('logoscancreate')}
            </AccordionSummary>
            <AccordionDetails>
            {t('logoscreate')}
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              marginBottom: '15px',
              borderRadius: '10px',
              fontSize: '20px',
              p: '10px 5px',
              color: '#000',
              boxShadow:
                '11px 11px 16.3px 0px rgba(0, 0, 0, 0.19) inset, 6px 6px 6.5px 0px rgba(0, 0, 0, 0.40), -11px -11px 16.3px 0px rgba(0, 0, 0, 0.19) inset',
            }}
          >
            <AccordionSummary
              sx={{ '&.Mui-expanded': { color: (theme) => theme.palette.primary.main } }}
              expandIcon={
                <Iconify sx={{ width: '28px', height: '28px' }} icon="zondicons:cheveron-down" />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {t('logomodify')}
            </AccordionSummary>
            <AccordionDetails>
            {t('enterownlogo')}
              <br />
              {t('customlogo')} <br />
              {t('createcustomlogo')}
            </AccordionDetails>
          </Accordion>
          <Button
            variant="contained"
            onClick={() => navigate('/logo-creation')}
            sx={{
              fontWeight: 500,
              fontSize: '20px',
              borderRadius: '12px',
              mt: '16px',
              minWidth: '170px',
              minHeight: '50px',
              boxShadow:
                '2px 2px 2.7px 0px rgba(0, 0, 0, 0.25), 3px 3px 2.3px 0px rgba(0, 0, 0, 0.25) inset, -3px 3px 2.7px 0px rgba(0, 0, 0, 0.25)',
            }}
          >
            {t('CreateLogo')}
          </Button>
        </Box>
        <Box mb={12}>
          <Typography
            sx={{ textShadow: '4px 5px 4px rgba(0, 0, 0, 0.45)' }}
            mb={2}
            color="white"
            fontSize={48}
            fontWeight={700}
          >
            {t('whatincluded')}
          </Typography>
          <Accordion
            sx={{
              marginBottom: '15px',
              borderRadius: '10px',
              fontSize: '20px',
              p: '10px 5px',
              color: '#000',
              boxShadow:
                '11px 11px 16.3px 0px rgba(0, 0, 0, 0.19) inset, 6px 6px 6.5px 0px rgba(0, 0, 0, 0.40), -11px -11px 16.3px 0px rgba(0, 0, 0, 0.19) inset',
            }}
          >
            <AccordionSummary
              sx={{ '&.Mui-expanded': { color: (theme) => theme.palette.primary.main } }}
              expandIcon={
                <Iconify sx={{ width: '28px', height: '28px' }} icon="zondicons:cheveron-down" />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {t('uselogoforwebsite')}
            </AccordionSummary>
            <AccordionDetails>
            {t('youcanuselogoforwebsite')}
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              marginBottom: '15px',
              borderRadius: '10px',
              fontSize: '20px',
              p: '10px 5px',
              color: '#000',
              boxShadow:
                '11px 11px 16.3px 0px rgba(0, 0, 0, 0.19) inset, 6px 6px 6.5px 0px rgba(0, 0, 0, 0.40), -11px -11px 16.3px 0px rgba(0, 0, 0, 0.19) inset',
            }}
          >
            <AccordionSummary
              sx={{ '&.Mui-expanded': { color: (theme) => theme.palette.primary.main } }}
              expandIcon={
                <Iconify sx={{ width: '28px', height: '28px' }} icon="zondicons:cheveron-down" />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {t('howmanylogoscreate')}
            </AccordionSummary>
            <AccordionDetails>
            {t('useforprinting')}
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              marginBottom: '15px',
              borderRadius: '10px',
              fontSize: '20px',
              p: '10px 5px',
              color: '#000',
              boxShadow:
                '11px 11px 16.3px 0px rgba(0, 0, 0, 0.19) inset, 6px 6px 6.5px 0px rgba(0, 0, 0, 0.40), -11px -11px 16.3px 0px rgba(0, 0, 0, 0.19) inset',
            }}
          >
            <AccordionSummary
              sx={{ '&.Mui-expanded': { color: (theme) => theme.palette.primary.main } }}
              expandIcon={
                <Iconify sx={{ width: '28px', height: '28px' }} icon="zondicons:cheveron-down" />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {t('canmakechanges')}
            </AccordionSummary>
            <AccordionDetails>
            {t('yesmakechanges')}
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              marginBottom: '15px',
              borderRadius: '10px',
              fontSize: '20px',
              p: '10px 5px',
              color: '#000',
              boxShadow:
                '11px 11px 16.3px 0px rgba(0, 0, 0, 0.19) inset, 6px 6px 6.5px 0px rgba(0, 0, 0, 0.40), -11px -11px 16.3px 0px rgba(0, 0, 0, 0.19) inset',
            }}
          >
            <AccordionSummary
              sx={{ '&.Mui-expanded': { color: (theme) => theme.palette.primary.main } }}
              expandIcon={
                <Iconify sx={{ width: '28px', height: '28px' }} icon="zondicons:cheveron-down" />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {t('canusefontname')}
            </AccordionSummary>
            <AccordionDetails>
            {t('getfontname')}
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box>
          <Typography
            sx={{ textShadow: '4px 5px 4px rgba(0, 0, 0, 0.45)' }}
            mb={2}
            color="white"
            fontSize={48}
            fontWeight={700}
          >
            {t('copyrightandpricing')}
          </Typography>
          <Accordion
            sx={{
              marginBottom: '15px',
              borderRadius: '10px',
              fontSize: '20px',
              p: '10px 5px',
              color: '#000',
              boxShadow:
                '11px 11px 16.3px 0px rgba(0, 0, 0, 0.19) inset, 6px 6px 6.5px 0px rgba(0, 0, 0, 0.40), -11px -11px 16.3px 0px rgba(0, 0, 0, 0.19) inset',
            }}
          >
            <AccordionSummary
              sx={{ '&.Mui-expanded': { color: (theme) => theme.palette.primary.main } }}
              expandIcon={
                <Iconify sx={{ width: '28px', height: '28px' }} icon="zondicons:cheveron-down" />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {t('canusegeneratedgraphicsfree')}
            </AccordionSummary>
            <AccordionDetails>
            {t('nousefreegraphics')}.
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              marginBottom: '15px',
              borderRadius: '10px',
              fontSize: '20px',
              p: '10px 5px',
              color: '#000',
              boxShadow:
                '11px 11px 16.3px 0px rgba(0, 0, 0, 0.19) inset, 6px 6px 6.5px 0px rgba(0, 0, 0, 0.40), -11px -11px 16.3px 0px rgba(0, 0, 0, 0.19) inset',
            }}
          >
            <AccordionSummary
              sx={{ '&.Mui-expanded': { color: (theme) => theme.palette.primary.main } }}
              expandIcon={
                <Iconify sx={{ width: '28px', height: '28px' }} icon="zondicons:cheveron-down" />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {t('howpaymentwork')}
            </AccordionSummary>
            <AccordionDetails>
              {t('paymentprocessing')} <br />
              <br />
              {t('clickbuybtn')} <br />
              {t('redirectforsecurepayment')} <br />
              {t('afteredirect')}
              <br />
              {t('confirmationmail')}
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              marginBottom: '15px',
              borderRadius: '10px',
              fontSize: '20px',
              p: '10px 5px',
              color: '#000',
              boxShadow:
                '11px 11px 16.3px 0px rgba(0, 0, 0, 0.19) inset, 6px 6px 6.5px 0px rgba(0, 0, 0, 0.40), -11px -11px 16.3px 0px rgba(0, 0, 0, 0.19) inset',
            }}
          >
            <AccordionSummary
              sx={{ '&.Mui-expanded': { color: (theme) => theme.palette.primary.main } }}
              expandIcon={
                <Iconify sx={{ width: '28px', height: '28px' }} icon="zondicons:cheveron-down" />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {t('isonetimepayment')}
            </AccordionSummary>
            <AccordionDetails>
            {t('yesonetimepayment')}
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              marginBottom: '15px',
              borderRadius: '10px',
              fontSize: '20px',
              p: '10px 5px',
              color: '#000',
              boxShadow:
                '11px 11px 16.3px 0px rgba(0, 0, 0, 0.19) inset, 6px 6px 6.5px 0px rgba(0, 0, 0, 0.40), -11px -11px 16.3px 0px rgba(0, 0, 0, 0.19) inset',
            }}
          >
            <AccordionSummary
              sx={{ '&.Mui-expanded': { color: (theme) => theme.palette.primary.main } }}
              expandIcon={
                <Iconify sx={{ width: '28px', height: '28px' }} icon="zondicons:cheveron-down" />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
             {t('doiownlogo')}
            </AccordionSummary>
            <AccordionDetails>
            {t('yesownlogo')} <br />
              <br />{t('seetermsofuse')} 
            </AccordionDetails>
          </Accordion>
          <Button
            variant="contained"
            onClick={() => navigate('/pricing')}
            sx={{
              fontWeight: 500,
              fontSize: '20px',
              borderRadius: '12px',
              mt: '16px',
              minWidth: '170px',
              minHeight: '50px',
              boxShadow:
                '2px 2px 2.7px 0px rgba(0, 0, 0, 0.25), 3px 3px 2.3px 0px rgba(0, 0, 0, 0.25) inset, -3px 3px 2.7px 0px rgba(0, 0, 0, 0.25)',
            }}
          >
            {t('Pricing')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FaqsSection;
