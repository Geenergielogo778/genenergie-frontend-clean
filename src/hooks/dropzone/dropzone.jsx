import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const DropzoneComponent = ({ selectedFile, setSelectedFile }) => {
  const { t } = useTranslation();
  // const [files, setFiles] = useState([]);
  // const [selectedFile, setSelectedFile] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    // accept: 'image/*, .docx, .xlsx, .pdf, .png, .jpg, .jpeg', //Accept docx, xlsx, pdf, png, jpg, jpeg
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png'],
      '.docx': ['.docx'],
      '.xlsx': ['.xlsx'],
      '.pdf': ['.pdf'],
      '.png': ['.png'],
      '.jpg': ['.jpg'],
      '.jpeg': ['.jpeg'],
    },
    onDrop: (acceptedFiles) => {
      // setFiles(acceptedFiles);
      setSelectedFile(acceptedFiles[0]); // Set the first accepted file as the selected file
    },
  });

  // console.log('files', files);

  return (
    <Box
      sx={{
        p: '36px',
        background: 'white',
        borderRadius: '10px',
        boxShadow:
          '11px 11px 16.3px 0px rgba(0, 0, 0, 0.19) inset, 6px 6px 6.5px 0px rgba(0, 0, 0, 0.40), -11px -11px 16.3px 0px rgba(0, 0, 0, 0.19) inset',
      }}
    >
      <Typography color="#00000099" fontSize="1rem" mb={2}>
        {t('attachfile')}
      </Typography>
      <Box
        border="3px dashed rgba(0, 0, 0, 0.66)"
        borderRadius="5px"
        p={3}
        textAlign="center"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <div className="dropzone-content">
          <img src="/assets/icons/dropzone-icon.png" alt="Drag drop to upload" />
          <Typography sx={{ fontSize: '24px', color: '#000000B0', fontWeight: 500, my: 1 }}>
            {t('draganddrop')}
          </Typography>
          <Typography sx={{ fontSize: '22px', color: '#000000B0', fontWeight: 500, mb: 2 }}>
            {t('or')}
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              fontWeight: 500,
              fontSize: '18px',
              borderRadius: '12px',
              minWidth: '170px',
              minHeight: '46px',
              boxShadow:
                '2px 2px 2.7px 0px rgba(0, 0, 0, 0.25), 3px 3px 2.3px 0px rgba(0, 0, 0, 0.25) inset, -3px 3px 2.7px 0px rgba(0, 0, 0, 0.25)',
            }}
          >
            {t('browsefile')}
          </Button>
        </div>
      </Box>
      {selectedFile && (
        <div>
          <Typography fontSize="1.5rem" mt={2}>
            {t('selectedfile')}
          </Typography>
          <Typography variant="body1" color="textPrimary">
            {selectedFile.name} ({selectedFile.type})
          </Typography>
        </div>
      )}
    </Box>
  );
};

export default DropzoneComponent;
