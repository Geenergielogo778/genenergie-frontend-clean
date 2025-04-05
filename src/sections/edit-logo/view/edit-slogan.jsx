import React, { useEffect, useState } from 'react';
import { Box, Card, CircularProgress, Grid, MenuItem, TextField, Typography } from '@mui/material';

import fontStyles from 'src/utils/fonts';
import { setTagline } from 'src/store/reducers/editor.reducer';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
function EditSlogan({ slogan }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleOnchange = (e) => {
    // if (e.target.value.length) {
    //   toast.info('MAX CHARS');
    //   return false;
    // }
    dispatch(setTagline(e.target.value));
  };

  const logoNameState = useSelector((state) => state.editor.title);

  return (
    <Grid container>
      <Grid item xs={12}>
        <TextField
          id="font_family"
          variant="outlined"
          placeholder={t('LogoName')}
          value={slogan}
          fullWidth
          onChange={handleOnchange}
          sx={{
            background: 'white',
            borderRadius: '10px',
            fontSize: '18px',
            mb: 3,
            px: 1,
            '& .MuiInputBase-root.MuiInputBase-root': {
              paddingRight: '8px',
            },
          }}
        ></TextField>
      </Grid>
    </Grid>
  );
}

export default EditSlogan;
