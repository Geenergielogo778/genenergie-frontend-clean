import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import { useResponsive } from 'src/hooks/use-responsive';

// import { HEADER } from './config-layout';

// ----------------------------------------------------------------------

// const SPACING = 8;

export default function Main({ children, sx, ...other }) {
  const lgUp = useResponsive('up', 'lg');

  return (
    <Box
      component="main"
      sx={{
        // borderRadius: '30px',
        // background:
        //   'linear-gradient(130deg, #000 14.48%, #667BB7 43.81%, rgba(115, 157, 157, 0.58) 55.53%, rgba(37, 47, 50, 0.56) 78.5%, #000 92.67%)',
        // boxShadow: '-12px 4px 11.4px 0px rgba(0, 0, 0, 0.25)',
        flexGrow: 1,
        // minHeight: 1,
        // display: 'flex',
        // flexDirection: 'column',
        py: `${90}px`,
        ...(lgUp &&
          {
            // px: 2,
            // py: `${HEADER.H_DESKTOP + SPACING}px`,
            // py: `${SPACING}px`,
            // width: `calc(100% - ${NAV.WIDTH}px)`,
          }),
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}

Main.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};
