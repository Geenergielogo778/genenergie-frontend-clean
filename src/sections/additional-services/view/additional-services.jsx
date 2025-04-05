import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import LogoJourneySection from 'src/sections/logo-journey-section/logo-journey';
import BannerSection from '../banner-section';
import WhiteBgSection from '../section-with-white-bg';
import TransparentBgSection from '../section-with-transparent-bg';
// import { additionalServicesData } from './data';
import ProjectSubmissionSection from '../project-submission-section';
import { useTranslation } from 'react-i18next';
// ----------------------------------------------------------------------

export default function AdditionalServicesView() {
  const { t } = useTranslation();
  const additionalServicesData = {
    customizedLogoSection: {
      title: t('customizedlogo'),
      description: t('descriptioncustomlogo'),
      btnText: t('explorebtn'),
      image: '/assets/additional-services/customizedLogo.png',
      href: '/custom-logo-design-services',
    },
    webDevelopmentSection: {
      title: t('webdevelopment'),
      description: t('descriptionwebdevelopment'),
      btnText: t('learnbtn'),
      image: '/assets/additional-services/webDevelopment.png',
      href: '#project-submission',
      alt: 'web development'
    },
    copyWritingSection: {
      title: t('copywriting'),
      description: t('descriptioncopywriting'),
      btnText: t('explorebtn'),
      image: '/assets/additional-services/copyWriting.png',
      href: '#project-submission',
      alt: 'copy Writing'
    },
    digitalMarketingSection: {
      title: t('digitalmarketing'),
      description: t('descriptiondigitalmarketing'),
      btnText: t('discoverbtn'),
      image: '/assets/additional-services/digitalMarketing.png',
      href: '#project-submission',
      alt: 'digital marketing'
    },
    graphicEditingSection: {
      title: t('graphicediting'),
      description: t('descriptiongraphic'),
      btnText: t('servicebtn'),
      image: '/assets/additional-services/graphicEditing.png',
      href: '#project-submission',
      alt: 'Graphic Editing'
    },
    videoEditingSection: {
      title: t('videoediting'),
      description: t('descriptionediting'),
      btnText: t('exploreoption'),
      image: '/assets/additional-services/videoEditing.png',
      href: '#project-submission',
      alt: 'Video Editing'
    },
    socialMediaManagementSection: {
      title: t('socialmedia'),
      headingSmallText: t('management'),
      description: t('descriptionmedia'),
      btnText: t('discovermore'),
      image: '/assets/additional-services/socialMediaManagement.png',
      href: '#project-submission',
      alt: 'Social Media Management'
    },
    adCampaignLaunchingSection: {
      title: t('adcampaign'),
      headingSmallText: t('launching'),
      description: t('descriptionadcampaign'),
      btnText: t('exploreoption'),
      image: '/assets/additional-services/adCampaignLaunching.png',
      href: '#project-submission',
      alt: 'ads campaign launching'
    },
    animationSection: {
      title: t('animation'),
      description: t('descriptionanimation'),
      btnText: t('exploreanimationbtn'),
      image: '/assets/additional-services/animation.png',
      href: '#project-submission',
      alt: 'animation'
    },
    SEOSection: {
      title: t('professionalseo'),
      description: t('descriptionseo'),
      btnText: t('optimizebtn'),
      image: '/assets/additional-services/seo.png',
      href: '#project-submission',
      alt: 'SEO'
    },
  };
  const navigate = useNavigate();

  const projectSubmissionRef = useRef();

  const handleButtonClick = () => {
    // Scroll to the ProjectSubmissionSection when the button is clicked
    // eslint-disable-next-line react/destructuring-assignment
    if (projectSubmissionRef.current) {
      // eslint-disable-next-line react/destructuring-assignment
      projectSubmissionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Box>
      <BannerSection />
      <WhiteBgSection
        handleClick={() => navigate('/custom-logo-design-services')}
        {...additionalServicesData.customizedLogoSection}
      />
      <LogoJourneySection />
      <WhiteBgSection
        handleClick={() => navigate('/web-development-services')}
        {...additionalServicesData.webDevelopmentSection}
      />
      <TransparentBgSection
        handleClick={() => navigate('/copy-writing-services')}
        {...additionalServicesData.copyWritingSection}
      />
      <WhiteBgSection
        handleClick={() => navigate('/digital-marketing-services')}
        {...additionalServicesData.digitalMarketingSection}
      />
      <TransparentBgSection
        handleClick={() => navigate('/graphic-design-services')}
        {...additionalServicesData.graphicEditingSection}
      />
      <WhiteBgSection
        handleClick={() => navigate('/video-editing-services')}
        {...additionalServicesData.videoEditingSection}
      />
      <TransparentBgSection
        handleClick={() => navigate('/social-media-management')}
        {...additionalServicesData.socialMediaManagementSection}
      />
      <WhiteBgSection
        handleClick={handleButtonClick}
        {...additionalServicesData.adCampaignLaunchingSection}
      />
      <TransparentBgSection
        handleClick={() => navigate('/animation-services')}
        {...additionalServicesData.animationSection}
      />
      <WhiteBgSection handleClick={() => navigate('/seo-services')} {...additionalServicesData.SEOSection} />
      <ProjectSubmissionSection projectSubmissionRef={projectSubmissionRef} />
    </Box>
  );
}
