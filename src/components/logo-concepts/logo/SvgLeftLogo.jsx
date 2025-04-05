import React, { useEffect, useRef, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';
import { SVG } from '@svgdotjs/svg.js';
import logo from 'src/components/logo';
const SvgLogo = ({ colors, title, slogan, font, icon, svgCode, size = 3, position,iconColor,iconRotation }) => {
  return (
    <Box
      className={'logo-slide'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Box
          sx={{
            height: 50 * size,
            width: 50 * size,
            marginRight: 10,
            '& svg': {
              fill: iconColor,
            },
            transform: `rotate(${iconRotation}deg)`,
          }}
          dangerouslySetInnerHTML={{ __html: svgCode }}
        />
        <span
          style={{
            color: colors?.foregroundColor,
            fontSize: title && title?.length > 10 ? 20 * size : 20 * size,
          }}
          className={font}
        >
          {title && title}
        </span>
      </div>
    </Box>
  );
};

export default SvgLogo;

{
  /* */
}
