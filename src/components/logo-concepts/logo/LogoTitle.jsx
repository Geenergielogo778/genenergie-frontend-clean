import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
const LogoTitle = ({ colors, title, slogan, font,size=1,position,iconColor,iconRotation, }) => {
  return (
    <Box
    className={"logo-slide"}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
       <span style={{marginTop:position, marginBottom:position}}></span>
      <div style={{ color: colors?.backgroundColor, fontSize: title  &&  title.length >10 ? 30*size : 30*size, padding: 10 }} className={font}>
        {title ? title : 'Logo  '}
      </div>
      <p style={{ color: colors?.foregroundColor, margin: 0 }}>{slogan ? slogan : ''}</p>
    </Box>
  );
};

export default LogoTitle;
