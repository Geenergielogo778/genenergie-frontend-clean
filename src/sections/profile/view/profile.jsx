import { Box, Button, Card, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import ChangePasswordForm from './change-password';
import { useDispatch, useSelector } from 'react-redux';
import PACKAGES from 'src/utils/packages';
import logoConcepts, { renderLogos } from 'src/utils/logo-concepts';
import { useEffect, useState } from 'react';
import { resetAllLogoSettings } from 'src/store/reducers/logoReducer';
import API from 'src/utils/axios';
import { toast } from 'react-toastify';
import html2pdf from 'html2pdf.js';
import { useTranslation } from 'react-i18next';
import domtoimage from 'dom-to-image-more';
import { resetSavedLogos } from 'src/store/reducers/savedLogos.reducer';
import html2canvas from 'html2canvas';
import { useRef } from 'react';
import { toPng } from 'html-to-image';
import Watermark from 'src/components/watermark';
import { setLimit } from 'src/store/reducers/limit.reducer';
import { createGuideLines } from 'src/utils/guidelines';
const editIcon = '/assets/profile/edit.svg';
const downloadIcon = '/assets/profile/download.svg';
const newLogo = '/assets/profile/new.svg';
const deleteLogo = '/assets/profile/delete.svg';
// ----------------------------------------------------------------------

export default function Profile() {
  const logoRef = useRef(null);
  const { t } = useTranslation();
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const packageId = useSelector((state) => state.user.subscription?.packageId);
  const logo = useSelector((state) => state.generatedLogos.value?.selectedLogoConcept);
  const subscriptionId = useSelector((state) => state.user.subscription?._id);
  const editorConfig = useSelector((state) => state.editor);
  const [userLogos, setUserLogos] = useState([]);
  const [allLogos, setAllLogos] = useState([]);
  const savedLogos = useSelector((state) => state.savedLogos.value);
  const limit = useSelector((state) => state.limit?.limit);
  console.log(savedLogos);

  console.log(packageId);

  const handleDownloadSocialMediaKit = async () => {
    if (packageId === PACKAGES.FREE || packageId === PACKAGES.LITE)
      return toast.info('Upgrade Your Package to Download Social Media Kit');
    try {
      const loading = toast.loading('Generating Social Media Kit!');
      const node = logoRef.current;

      const dataUrl = await domtoimage.toBlob(node);
      const colorId = savedLogos[0].colors._id;
      const logotype = savedLogos[0].logotype;
      const formData = new FormData();
      formData.append('logo', dataUrl);
      formData.append('logoType', logotype);
      formData.append('colorId', colorId);
      const { data } = await API.post('/downloads/social-media-kit/', formData, {
        responseType: 'blob',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // data zip from archive convert to zip and download also prevent error
      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'social_media_kit.zip');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      toast.dismiss(loading);
      return toast.success('Social Media Kit Downloaded Successfully');
    } catch (error) {
      toast.error('Error Downloading Social Media Kit');
    }
  };
  const handleDownload = async () => {
    if (packageId === PACKAGES.FREE || packageId === PACKAGES.LITE)
      return toast.info('You are Free User. Upgrade Your package to get more features');
    if (savedLogos.length === 0) return toast.info('No Saved Logos');

    const jpgnode = logoRef.current;
    toPng(jpgnode)
      .then((dataUrl) => {
        const link = document.createElement('a');

        link.download = 'genergielib.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error('Failed to convert to PNG', err);
      });
  };
  const handleGuideLines = async () => {
    if (packageId === PACKAGES.FREE || packageId === PACKAGES.LITE)
      return toast.info('Upgrade Your package to unlock this feature');
    if (savedLogos.length === 0) return toast.info('No Saved Logos');
    const loading = toast.loading('Creating Guidelines...');
    const logoDetails = savedLogos[0];
    const convertBlobToBase64 = (blob) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob); // This will read the blob and convert it to base64

      reader.onloadend = () => {
        setBase64Image(reader.result); // Store the base64 string in state
      };
    };
    const jpgnode = logoRef.current;
    const bloblogo = await toPng(jpgnode);

    const guidelines = await createGuideLines({
      COMPANY_NAME: logoDetails.title,
      PRIMARY_COLOR: logoDetails.colors.foregroundColor,
      SECONDARY_COLOR: logoDetails.colors.backgroundColor,
      IMAGE: bloblogo,
      FONT: logoDetails.font,
    });
    // console.log(guidelines);
    const pdf = guidelines;

    await html2pdf(pdf).from(pdf).save('Guidelines.pdf');
    return toast.dismiss(loading);
  };
  const handleDeleteLogo = async () => {
    try {
      dispatch(resetSavedLogos());
      toast.success('Logo Deleted Successfully');
    } catch (error) {
      console.log(error);
      toast.error('Error Deleting the Logo');
    }
  };

  // Download Invoice handler
  const handleDownloadInvoice = async () => {
    if (packageId === PACKAGES.FREE) return toast.info('You are Free User');
    if (!subscriptionId) return toast.info('Please Subscribe to Download Invoice');

    try {
      const result = await API.get(`/payment/invoice/${subscriptionId}`);
      console.log(result.data);
      const pdf = result.data;
      return html2pdf(pdf).from(pdf).save('INVOICE.pdf');
    } catch (error) {
      console.log(error);
      return toast.error('Error Downloading the Invoice');
    }
  };
  const handleEditLogo = () => {
    if (packageId === PACKAGES.FREE) return toast.info('You are Free User, Upgrade Your Package');
    if (savedLogos.length === 0) return toast.info('No Saved Logos');
    if (packageId === PACKAGES.BUSINESS && limit >= 5)
      return toast.info('You have reached your limit to edit logo. Upgrade your package');

    navigate('/edit-logo');
  };
  const downloadSections = [
    {
      title: t('Web-Ready Files'),
      description: t('webemailsignatire'),
      icon: '/assets/icons/profile/downloads/web_ready_files.svg',
      plans: [t('lite'), t('business'), t('premium')],
      action: handleDownload,
    },
    {
      title: t('socialmediakit'),
      description: t('socialmediadescription'),
      icon: '/assets/icons/profile/downloads/social_media_kit.svg',
      plans: [t('business'), t('premium')],
      action: handleDownloadSocialMediaKit,
    },
    {
      title: t('Print-Ready Files'),
      description: t('printreadydescription'),
      icon: '/assets/icons/profile/downloads/print_ready_files.svg',
      plans: [t('business'), t('premium')],
      action: handleDownload,
    },
    {
      title: t('brandguidelines'),
      description: t('fontnamecolors'),
      icon: '/assets/icons/profile/downloads/branding_guidelines.svg',
      plans: [t('business'), t('premium')],
      action: handleGuideLines,
    },
    // {
    //   title:  t('watermarkandbrandimages'),
    //   description:
    //   t('watemarkdescription'),
    //   icon: '/assets/icons/profile/downloads/watermark_brand_images.svg',
    //   plans: [(t('business')), (t('premium'))],
    // },
    // {
    //   title: t('logoanimation'),
    //   description: t('logoanimationdescription'),
    //   icon: '/assets/icons/profile/downloads/logo_animation.svg',
    //   plans: [(t('business')), (t('premium'))],
    // },
  ];

  const handleAddNewLogo = () => {
    dispatch(resetAllLogoSettings());
    navigate('/logo-creation');
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={4} my={2}>
        <Grid item md={4} xs={12}>
          <Card
            sx={{
              p: 3,
              boxShadow:
                '5px 5px 16.3px 0px rgba(0, 0, 0, 0.19) inset, 5px 5px 6.5px 0px rgba(0, 0, 0, 0.26), -1px -1px 16.3px 0px rgba(0, 0, 0, 0.19) inset',
            }}
          >
            <Typography fontWeight={600} variant="h3" color="black" mb={3}>
              {t('downloads')}
            </Typography>

            {downloadSections?.map((item, index) => (
              <Stack
                onClick={item.action}
                key={index}
                alignItems="center"
                spacing={2}
                maxWidth="90%"
                mx="auto"
                my={3}
                pb={3}
                borderBottom={index !== 5 ? '1px solid #0000004A' : 'none'}
              >
                <Card
                  sx={{
                    '&:hover': {
                      background: '#E6E6E6',
                    },
                    '&:active': {
                      background: '#ff6c0f',
                    },

                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '230px',
                    height: '130px',
                    borderRadius: '10px',
                    px: 3,
                    boxShadow:
                      '5px 5px 16.3px 0px rgba(0, 0, 0, 0.19) inset, 5px 5px 6.5px 0px rgba(0, 0, 0, 0.26), -1px -1px 16.3px 0px rgba(0, 0, 0, 0.19) inset',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Stack spacing={1.5} alignItems="center">
                    <img width="38px" src={item?.icon} alt="" />
                    <Typography variant="body2" textAlign="center">
                      {item?.title}
                    </Typography>
                  </Stack>
                </Card>
                <Typography variant="caption" textAlign="center">
                  {item?.description}
                </Typography>
                <Box display="flex" flexWrap="wrap" justifyContent="center" gap={1.2}>
                  {item?.plans.includes('Lite') && (
                    <Button
                      sx={{
                        borderRadius: '5px',
                        background: '#FF990026',
                        color: '#FF9900',
                        boxShadow: 'none',
                        fontWeight: 500,
                      }}
                      variant="contained"
                    >
                      {t('lite')}
                    </Button>
                  )}
                  {item?.plans.includes('Business') && (
                    <Button
                      sx={{
                        borderRadius: '5px',
                        background: '#000AFF26',
                        color: '#000AFF',
                        boxShadow: 'none',
                        fontWeight: 500,
                      }}
                      variant="contained"
                    >
                      {t('business')}
                    </Button>
                  )}
                  {item?.plans.includes('Premium') && (
                    <Button
                      sx={{
                        borderRadius: '5px',
                        background: '#E4002B26',
                        color: '#E4002B',
                        boxShadow: 'none',
                        fontWeight: 500,
                      }}
                      variant="contained"
                    >
                      {t('premium')}
                    </Button>
                  )}
                </Box>
              </Stack>
            ))}
          </Card>
        </Grid>
        <Grid item md={8} xs={12}>
          <Card
            sx={{
              p: 5,
              mb: 4,
              boxShadow:
                '5px 5px 16.3px 0px rgba(0, 0, 0, 0.19) inset, 5px 5px 6.5px 0px rgba(0, 0, 0, 0.26), -1px -1px 16.3px 0px rgba(0, 0, 0, 0.19) inset',
            }}
          >
            <Box textAlign="center">
              {packageId == PACKAGES.BUSINESS && (
                <Box
                  sx={{
                    textAlign: 'start',
                    py: 2,
                  }}
                >
                  <b>Edit Limit:</b> {limit}/5
                </Box>
              )}
              {savedLogos.length > 0 &&
                savedLogos.map((item, index) => (
                  <>
                    <Box
                      id="logo-to-download"
                      ref={logoRef}
                      mb={4.5}
                      sx={{
                        backgroundColor:
                          item.logotype === logoConcepts.GRADIENT_TEXT
                            ? 'white'
                            : item.colors.backgroundColor,
                        height: 500,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '10px',
                        border: '1px solid #aaa',
                        position: 'relative',
                      }}
                    >
                      {packageId == PACKAGES.FREE && <Watermark />}
                      {renderLogos[item.logotype]({
                        title: item.title,
                        font: item.font,
                        colors: item.colors,
                        slogan: item.slogan,
                        svgCode: item.svgCode,
                        size: item.size,
                        position: item.position,
                        iconColor: item.iconColor,
                        iconRotation: item.iconRotation,
                      })}
                    </Box>
                  </>
                ))}

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 1.5,
                }}
              >
                {/* <Button
                  variant="contained"
                  size="large"
                  onClick={handleAddNewLogo}
                  sx={{
                    fontWeight: 500,
                    fontSize: '20px',
                    borderRadius: '12px',
                    px: '28px',
                    minWidth: '150px',
                    minHeight: '46px',
                    mb: 3,
                    boxShadow:
                      '2px 2px 2.7px 0px rgba(0, 0, 0, 0.25), 3px 3px 2.3px 0px rgba(0, 0, 0, 0.25) inset, -3px 3px 2.7px 0px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  {t('addnewlogo')}
                </Button> */}

                {savedLogos.length > 0 && (
                  <>
                    <ActionButton text={t('editlogo')} onClick={handleEditLogo} img={editIcon} />
                    <ActionButton
                      text={t('downloadbtn')}
                      onClick={handleDownload}
                      img={downloadIcon}
                    />
                    <ActionButton
                      text={t('Delete Logo')}
                      onClick={handleDeleteLogo}
                      img={deleteLogo}
                    />
                    <ActionButton text={t('Add Logo')} onClick={handleAddNewLogo} img={newLogo} />

                    {/* <Button
                      variant="contained"
                      size="large"
                      onClick={handleDeleteLogo}
                      sx={{
                        fontWeight: 500,
                        fontSize: '20px',
                        borderRadius: '12px',
                        px: '28px',
                        minWidth: '150px',
                        minHeight: '46px',
                        mb: 3,
                        boxShadow:
                          '2px 2px 2.7px 0px rgba(0, 0, 0, 0.25), 3px 3px 2.3px 0px rgba(0, 0, 0, 0.25) inset, -3px 3px 2.7px 0px rgba(0, 0, 0, 0.25)',
                      }}
                    >
                      {t('deletelogo')}
                    </Button> */}
                    {/* <Button
                      variant="contained"
                      size="large"
                      onClick={handleDeleteLogo}
                      sx={{
                        fontWeight: 500,
                        fontSize: '20px',
                        borderRadius: '12px',
                        px: '28px',
                        minWidth: '150px',
                        minHeight: '46px',
                        mb: 3,
                        boxShadow:
                          '2px 2px 2.7px 0px rgba(0, 0, 0, 0.25), 3px 3px 2.3px 0px rgba(0, 0, 0, 0.25) inset, -3px 3px 2.7px 0px rgba(0, 0, 0, 0.25)',
                      }}
                    >
                      {t('downloadbtn')}
                    </Button> */}
                  </>
                )}
              </Box>
            </Box>
          </Card>

          {/* Current package card start */}
          <Card
            sx={{
              p: 5,
              mb: 4,
              boxShadow:
                '5px 5px 16.3px 0px rgba(0, 0, 0, 0.19) inset, 5px 5px 6.5px 0px rgba(0, 0, 0, 0.26), -1px -1px 16.3px 0px rgba(0, 0, 0, 0.19) inset',
            }}
          >
            <Box display="flex" flexWrap="wrap" gap={3} justifyContent="space-between">
              <Stack justifyContent="space-between">
                <Box mb={4.5}>
                  <Typography fontWeight={600} variant="h3" color="black">
                    {t('currentpackage')}
                  </Typography>
                  {packageId === PACKAGES.PREMIUM && (
                    <Button
                      sx={{
                        borderRadius: '5px',
                        background: '#E4002B26',
                        color: '#E4002B',
                        boxShadow: 'none',
                        fontWeight: 500,
                      }}
                      variant="contained"
                    >
                      {t('premium')}
                    </Button>
                  )}
                  {packageId === PACKAGES.LITE && (
                    <Button
                      sx={{
                        borderRadius: '5px',
                        background: '#FF990026',
                        color: '#FF9900',
                        boxShadow: 'none',
                        fontWeight: 500,
                      }}
                      variant="contained"
                    >
                      {t('lite')}
                    </Button>
                  )}
                  {packageId === PACKAGES.BUSINESS && (
                    <Button
                      sx={{
                        borderRadius: '5px',
                        background: '#000AFF26',
                        color: '#000AFF',
                        boxShadow: 'none',
                        fontWeight: 500,
                      }}
                      variant="contained"
                    >
                      {t('business')}
                    </Button>
                  )}
                  {packageId == PACKAGES.FREE && (
                    <Button
                      sx={{
                        borderRadius: '5px',
                        background: '#000AFF26',
                        color: '#000AFF',
                        boxShadow: 'none',
                        fontWeight: 500,
                      }}
                      variant="contained"
                    >
                      {t('freetrial')}
                    </Button>
                  )}
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate('/pricing')}
                    sx={{
                      fontWeight: 500,
                      fontSize: '20px',
                      borderRadius: '12px',
                      px: '28px',
                      minWidth: '150px',
                      minHeight: '46px',
                      boxShadow:
                        '2px 2px 2.7px 0px rgba(0, 0, 0, 0.25), 3px 3px 2.3px 0px rgba(0, 0, 0, 0.25) inset, -3px 3px 2.7px 0px rgba(0, 0, 0, 0.25)',
                    }}
                  >
                    {t('changepackage')}
                  </Button>
                </Box>
              </Stack>

              <Box>
                <Box className="d-sm-none" mb={3}>
                  <img src="/assets/profile/download_invoice.svg" alt="" />
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleDownloadInvoice}
                    sx={{
                      fontWeight: 500,
                      fontSize: '20px',
                      borderRadius: '12px',
                      px: '28px',
                      minWidth: '150px',
                      minHeight: '46px',
                      boxShadow:
                        '2px 2px 2.7px 0px rgba(0, 0, 0, 0.25), 3px 3px 2.3px 0px rgba(0, 0, 0, 0.25) inset, -3px 3px 2.7px 0px rgba(0, 0, 0, 0.25)',
                    }}
                  >
                    {t('downloadinvoice')}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Card>
          {/* Current package card end */}

          {/* My Profile card start */}
          <Card
            sx={{
              p: 5,
              pt: 4,
              mb: 4,
              boxShadow:
                '5px 5px 16.3px 0px rgba(0, 0, 0, 0.19) inset, 5px 5px 6.5px 0px rgba(0, 0, 0, 0.26), -1px -1px 16.3px 0px rgba(0, 0, 0, 0.19) inset',
            }}
          >
            <Box display="flex" justifyContent="space-between">
              <Stack>
                <Box display="flex" flexWrap="wrap" alignItems="center" gap={2}>
                  <Box
                    sx={{
                      width: '70px',
                      height: '70px',
                      border: '3px solid #E4002B',
                      borderRadius: '120px',
                    }}
                  >
                    <img
                      width="100%"
                      height="100%"
                      style={{ objectFit: 'cover', borderRadius: '120px' }}
                      src="/assets/customers/customer_1.png"
                      alt="Customer"
                    />
                  </Box>
                  <Typography fontWeight={600} variant="h4" color="black">
                    {t('myprofile')}
                  </Typography>
                </Box>
                <Box ml={isSmallScreen ? 0 : '86px'} gap={1} mt={isSmallScreen ? 2 : 0}>
                  <Box display="flex" flexWrap="wrap" alignItems="center" gap={1}>
                    <Typography color="black" fontSize={22} fontWeight={500}>
                      {t('name:')}
                    </Typography>
                    <Typography color="primary" fontSize={18} fontWeight={400}>
                      {user && user.name}
                    </Typography>
                  </Box>
                  <Box display="flex" flexWrap="wrap" alignItems="center" gap={1}>
                    <Typography color="black" fontSize={22} fontWeight={500}>
                      {t('email:')}
                    </Typography>
                    <Typography color="primary" fontSize={18} fontWeight={400}>
                      {user && user.email}
                    </Typography>
                  </Box>
                </Box>
              </Stack>

              <Box className="d-sm-none">
                <img src="/assets/profile/my_profile_shape.png" alt="" />
              </Box>
            </Box>
          </Card>
          {/* My Profile card end */}

          {/* Change password card start */}
          <Card
            sx={{
              p: 5,
              mb: 4,
              boxShadow:
                '5px 5px 16.3px 0px rgba(0, 0, 0, 0.19) inset, 5px 5px 6.5px 0px rgba(0, 0, 0, 0.26), -1px -1px 16.3px 0px rgba(0, 0, 0, 0.19) inset',
            }}
          >
            <Stack justifyContent="space-between" spacing={5}>
              <Box mb={4.5}>
                <Typography fontWeight={600} variant="h3" color="black">
                  {t('changepswd')}
                </Typography>
              </Box>
              <Grid container>
                <Grid item md={7} xs={12}>
                  <ChangePasswordForm />
                </Grid>
              </Grid>
            </Stack>
            <img
              style={{ position: 'absolute', top: 0, right: 0 }}
              src="/assets/profile/shape.svg"
              alt=""
            />
            <img
              className="d-sm-none"
              style={{ position: 'absolute', bottom: '40px', right: '20px' }}
              src="/assets/profile/change_password_vector.svg"
              alt=""
            />
          </Card>
          {/* Change password card end */}
        </Grid>
      </Grid>
    </Container>
  );
}

const ActionButton = ({ text, onClick, img }) => (
  <Button
    sx={{
      display: 'flex',
      justifyContent: 'center',
      gap: 1,
      alignItems: 'center',
      padding: '10px 16px',
      boxShadow:
        '2px 2px 2.7px 0px rgba(0, 0, 0, 0.25), 3px 3px 2.3px 0px rgba(0, 0, 0, 0.25) inset, -3px 3px 2.7px 0px rgba(0, 0, 0, 0.25)',
    }}
    onClick={onClick}
    variant="contained"
    color="primary"
  >
    <img
      src={img}
      style={{
        fill: 'white',
      }}
      alt=""
      width={20}
    />{' '}
    <Typography>{text}</Typography>
  </Button>
);
