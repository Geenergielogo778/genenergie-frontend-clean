import React, { useEffect, useState } from 'react';
import { Box, Card, CircularProgress, Grid, MenuItem, TextField, Typography } from '@mui/material';
import WebFont from 'webfontloader';
import fontStyles from 'src/utils/fonts';
import { setFont } from 'src/store/reducers/editor.reducer';
import { useDispatch,useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
function EditFonts({fontName}) {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const [fontFamily, setFontFamily] = useState(fontName);
  const fontFamilyState = useSelector((state) => state.editor.font);


  const [loading, setLoading] = useState(false);
  const handleChangeFont = (e) => {
    dispatch(setFont(e));
  }

  useEffect(() => {
    setLoading(true);
    WebFont.load({
      google: {
        families: [fontFamily],
      },
      active: () => {
        setLoading(false); // Set loading to false when the font is active
      },
      inactive: () => {
        setLoading(false); // Set loading to false even if the font fails to load
      },
    });
  }, [fontFamily]);

  // List of Google Fonts (add more as needed)
  const fonts = ['Poppins', 'Roboto', 'Open Sans', 'Lato', 'Montserrat'];

  return (
    <Grid container>
      <Grid item xs={12}>
        <TextField
          id="font_family"
          variant="outlined"
          placeholder={t('LogoName')}
          fullWidth
          select
          value={fontFamilyState}
          onChange={(event) => {
            console.log(event.target.value)
            handleChangeFont(event.target?.value)
          }}
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
        >
          {fontStyles.map((font,index) => (
            <MenuItem key={index} value={font.className}>
              {font.fontName}
            </MenuItem>
          ))}
        </TextField>
        <Card
          sx={{
            minWidth: '300px',
            py: 3,
            px: 4,
            boxShadow:
              '11px 11px 16.3px 0px rgba(0, 0, 0, 0.19) inset, 6px 6px 6.5px 0px rgba(0, 0, 0, 0.40), -11px -11px 16.3px 0px rgba(0, 0, 0, 0.19) inset',
          }}
        >
          <Box textAlign="center" width={1}>
            {loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', width: 1 }}>
                <CircularProgress />
              </Box>
            ) : (
              <Typography
                fontWeight={600}
                fontFamily={fontFamily}
                variant="h2"
                color="#000"
                textAlign="center"
              >
                A B C D E F G H
              </Typography>
            )}
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default EditFonts;
