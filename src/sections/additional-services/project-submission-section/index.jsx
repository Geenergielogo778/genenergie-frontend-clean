import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import DropzoneComponent from 'src/hooks/dropzone/dropzone';
import { useTranslation } from 'react-i18next';
import API from 'src/utils/axios';
import { toast } from 'react-toastify';
const ProjectSubmissionSection = ({ projectSubmissionRef }) => {
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectName, setProjectName] = useState('');

  const { t } = useTranslation();
  const submitForm = async (e) => {
    try {
      // add validations
      if (!name || !projectName || !message || !file) {
        toast.error('Please fill all the fields');
        return;
      }
      e.preventDefault();
      const response = await API.post(
        '/contact/project',
        {
          name,

          phone,
          projectName,
          message,
          file,
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      if (response.status === 200) {
        toast.success('Project Submitted');
        setName('');
        setProjectName('');
        setMessage('');
        setFile(null);
        setEmail('');
        setPhone('');
      }
    } catch (error) {
      console.log(error.message);
      toast.error('Project Not Submitted');
    }
  };
  return (
    <Box pb="100px" mt="30px" position="relative">
      <img
        ref={projectSubmissionRef}
        width="100%"
        height="200px"
        style={{ position: 'absolute', top: '-160px' }}
        src="/assets/shape_upward_primary.png"
        alt="Background Image"
      />
      <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent="space-between">
          <Grid item xs={12} md={8} className="slide-from-left">
            <Typography
              variant="h2"
              sx={{ textShadow: '5px 8px 4px rgba(0, 0, 0, 0.45)' }}
              mb={4}
              color="white"
              fontSize={{ md: 56, xs: 36 }}
              fontWeight={700}
            >
              {t('projectsubmissionwindow')}
            </Typography>
            <TextField
              id="username"
              variant="outlined"
              placeholder={t('username')}
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            <TextField
              id="project_name"
              variant="outlined"
              placeholder={t('nameofproject')}
              fullWidth
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
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
            <TextField
              id="description"
              variant="outlined"
              placeholder={t('projectdescription')}
              multiline
              minRows={6}
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
            <DropzoneComponent selectedFile={file} setSelectedFile={(files) => setFile(files)} />
            <Button
              onClick={submitForm}
              variant="contained"
              size="large"
              sx={{
                fontWeight: 500,
                fontSize: '22px',
                borderRadius: '12px',
                mt: 4,
                minWidth: '170px',
                minHeight: '46px',
                boxShadow:
                  '2px 2px 2.7px 0px rgba(0, 0, 0, 0.25), 3px 3px 2.3px 0px rgba(0, 0, 0, 0.25) inset, -3px 3px 2.7px 0px rgba(0, 0, 0, 0.25)',
              }}
            >
              {t('submitbtn')}
            </Button>
          </Grid>
        </Grid>
        <Box className="d-sm-none" position="absolute" right="0" bottom="-100px" zIndex={-1}>
          <img
            className="slide-from-right"
            style={{ float: 'right' }}
            width="90%"
            src="/assets/additional-services/project_submission.png"
            alt="project submission"
          />
        </Box>
      </Container>
    </Box>
  );
};

ProjectSubmissionSection.propTypes = {
  projectSubmissionRef: PropTypes.any,
};
export default ProjectSubmissionSection;
