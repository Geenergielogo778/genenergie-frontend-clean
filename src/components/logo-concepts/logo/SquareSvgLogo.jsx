import React, { useEffect, useRef, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';
import { SVG } from '@svgdotjs/svg.js';
import { elementToSVG } from 'dom-to-svg';

const encodeSvg = (svg) => {
  return 'data:image/svg+xml,' + `${svg}`;
};
const SquareSvgLogo = ({
  colors,
  title,
  slogan,
  font,
  icon,
  svgCode,
  size = 3,
  position = 1,
  iconColor,
  iconRotation,
}) => {
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
        id="svg-logo"
        style={{
          width: 100 * size,
          height: 100 * size,
          padding: 10,
          color: colors?.backgroundColor,
          backgroundColor: colors?.foregroundColor,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          // borderRadius: '50%',
        }}
      >
        <Box
          sx={{
            zIndex: 1,
            // fill: iconColor,
            '& svg': {
              fill: iconColor,
            },
            transform: `rotate(${iconRotation}deg)`,
          }}
          dangerouslySetInnerHTML={{ __html: svgCode }}
        />
        {position ? <span style={{ marginTop: position, marginBottom: position }}></span> : null}
        <div
          style={{
            zIndex: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: colors?.backgroundColor,
            bottom: 20,
            textAlign: 'center',
            borderRadius: '30px',
            width: '100%',
            fontSize: 10 * size,
            marginTop: 10,
          }}
          className={font}
        >
          {title && title}
        </div>
      </div>
    </Box>
  );
};

export default SquareSvgLogo;
