import * as React from 'react';
import { Container, useMediaQuery } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useTranslation } from 'react-i18next';

// Import your step components
import LogoName from './logo-name';
import Keywords from './keywords';
import VirtualDesigners from './virtual-designers';
import BrandColors from './brand-colors';
import Icons from './icons';
import LogoStyles from './logo-styles';
import { useSelector, useDispatch } from 'react-redux';
import Logo from './logo';
import { setStep } from 'src/store/reducers/logoReducer';
import { toast } from 'react-toastify';
// ... import the rest of your step components



export default function LogoCreationStepper() {
const { t } = useTranslation();

  const stepComponents = {
    [t('LogoName')]: LogoName,
    [t('wordkeyword')]: Keywords,
    [t('wordvirtualdesigner')]: VirtualDesigners,
    [t('wordbrandcolors')]: BrandColors,
    [t('wordicons')]: Icons,
    [t('wordlogostyles')]: LogoStyles,
    [t('wordyourlogo')]: Logo,
  };
  
  const steps = Object.keys(stepComponents);


  const isSmallScreen = useMediaQuery('(max-width: 700px)');

  // const selectedConcept = useSelector((state)=>state.generatedLogos.value.selectedLogoConcept)
  // console.log(selectedConcept, 'selectedConcept');
  const activeStep = useSelector((state) => state.logo.value.step);
  const dispatch = useDispatch();
  console.log(activeStep, 'step');
  const handleNext = () => {
    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
    dispatch(setStep(activeStep + 1));
    window.scrollTo(0, 0); // Scroll to the top
  };

  const handleBack = () => {
    dispatch(setStep(activeStep - 1));
    window.scrollTo(0, 0); // Scroll to the top
  };

  const ActiveStepComponent = stepComponents[steps[activeStep]];

  return (
    <Container maxWidth="xl">
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        sx={{ flexWrap: 'wrap', gap: isSmallScreen ? 2 : 0 }}
      >
        {steps.map((label) => (
          <Step
            key={label}
            sx={{
              '& .MuiStepConnector-root': {
                display: isSmallScreen ? 'none' : 'block',
                top: '23px',
                left: 'calc(-50% + 24px)',
                right: 'calc(50% + 24px)',
              },
              '& .MuiStepConnector-line': {
                borderColor:
                  activeStep > steps.indexOf(label) || activeStep === steps.indexOf(label)
                    ? '#E4002B'
                    : 'white',
                borderTopWidth: '2px',
              },
            }}
          >
            <StepLabel
              sx={{
                '& .MuiStepLabel-label': {
                  mt: 1.5,
                  fontSize: isSmallScreen ? 13 : 18,
                  fontWeight: 500,
                },
                '& .MuiStepLabel-labelContainer': {
                  color: 'white',
                  fontSize: isSmallScreen ? 14 : 18,
                  '& .Mui-active': { color: 'white' },
                  '& .Mui-completed': { color: 'white' },
                },
                '& .MuiSvgIcon-root.MuiStepIcon-root': {
                  color: 'transparent',
                  width: '2em',
                  height: '2em',
                  border: '2px solid white',
                  borderRadius: '100px',
                  '&.Mui-active': { color: '#E4002B', border: '2px solid #E4002B' },
                  '&.Mui-completed': {
                    color: '#E4002B',
                    border: '2px solid #E4002B',
                    background: 'white',
                  },
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <ActiveStepComponent onNext={handleNext} onBack={handleBack} />
    </Container>
  );
}
