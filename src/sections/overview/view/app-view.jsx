// import { faker } from '@faker-js/faker';

import { Box, Stack } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// import Iconify from 'src/components/iconify';

// import AppTasks from '../app-tasks';
// import AppNewsUpdate from '../app-news-update';
// import AppOrderTimeline from '../app-order-timeline';
// import AppCurrentVisits from '../app-current-visits';
// import AppWebsiteVisits from '../app-website-visits';
// import AppWidgetSummary from '../app-widget-summary';
// import AppTrafficBySite from '../app-traffic-by-site';
// import AppCurrentSubject from '../app-current-subject';
// import AppConversionRates from '../app-conversion-rates';

// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Typography
        variant="h3"
        fontWeight={700}
        sx={{ color: (theme) => theme.palette.primary.main, mb: 2, fontSize: '32px !important' }}
      >
        Dashboard
      </Typography>

      <Grid container spacing={3} justifyContent="space-between" rowSpacing={5} sx={{ color: 'white' }}>
        <Grid xs={12} sm={12} md={5}>
          <Typography
            color="white"
            variant="h3"
            fontWeight={700}
            sx={{ fontSize: '40px !important' }}
            mb={2}
          >
            Portfolio Profit & Loss
          </Typography>
          <Grid container justifyContent="space-evenly" alignItems="end" spacing={5}>
            <Grid item xs={12} md={6}>
              <Stack mb={4}>
                <Box>
                  <Typography sx={{ fontSize: '30px', fontWeight: 400, lineHeight: 1 }}>
                    $10,000
                  </Typography>
                  <Typography sx={{ fontSize: '16px', fontWeight: 300 }}>Current value</Typography>
                </Box>
              </Stack>
              <Stack mb={4}>
                <Box>
                  <Typography
                    sx={{ fontSize: '30px', fontWeight: 400, lineHeight: 1, color: 'green' }}
                  >
                    $5,000
                  </Typography>
                  <Typography sx={{ fontSize: '16px', fontWeight: 300 }}>Profit & Loss</Typography>
                </Box>
              </Stack>
              <Stack>
                <Box>
                  <Typography
                    sx={{ fontSize: '30px', fontWeight: 400, lineHeight: 1, color: 'green' }}
                  >
                    50%
                  </Typography>
                  <Typography sx={{ fontSize: '16px', fontWeight: 300 }}>
                    Profit & Loss %
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <img src="/assets/images/dashboard/analytics.png" alt="" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} sm={12} md={6}>
          <Typography
            color="white"
            variant="h3"
            fontWeight={700}
            sx={{ fontSize: '40px !important' }}
            mb={2}
          >
            Portfolio Investment Target
          </Typography>
          <Grid container justifyContent="space-evenly" alignItems="end" spacing={5}>
            <Grid item xs={12} md={6}>
              <Stack mb={4}>
                <Box>
                  <Typography sx={{ fontSize: '30px', fontWeight: 400, lineHeight: 1 }}>
                    $10,000
                  </Typography>
                  <Typography sx={{ fontSize: '16px', fontWeight: 300 }}>Current value</Typography>
                </Box>
              </Stack>
              <Stack mb={4}>
                <Box>
                  <Typography sx={{ fontSize: '30px', fontWeight: 400, lineHeight: 1 }}>
                    $5,000
                  </Typography>
                  <Typography sx={{ fontSize: '16px', fontWeight: 300 }}>Profit & Loss</Typography>
                </Box>
              </Stack>
              <Stack>
                <Box>
                  <Typography sx={{ fontSize: '30px', fontWeight: 400, lineHeight: 1 }}>
                    50%
                  </Typography>
                  <Typography sx={{ fontSize: '16px', fontWeight: 300 }}>
                    Profit & Loss %
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <img src="/assets/images/dashboard/exchange.png" alt="" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} sm={12} md={5}>
          <Typography
            color="white"
            variant="h3"
            fontWeight={700}
            sx={{ fontSize: '40px !important' }}
            mb={2}
            textAlign="center"
          >
            Portfolio Predictions
          </Typography>
          <Grid container justifyContent="space-evenly" alignItems="end" spacing={5}>
            <Grid item xs={12} md={3}>
              <Box textAlign="center">
                <img src="/assets/images/dashboard/prediction.png" alt="" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} sm={12} md={7}>
          <Grid container mt={5} spacing={4}>
            <Grid item xs={12} md={6} textAlign="center">
              <Typography
                color="white"
                variant="h3"
                fontWeight={700}
                sx={{ fontSize: '24px !important' }}
                mb={2}
                textAlign="center"
              >
                Your Weighted X Forecast
              </Typography>
              <Stack mb={4}>
                <Box>
                  <Typography sx={{ fontSize: '30px', fontWeight: 400, lineHeight: 1 }}>
                    1.5
                  </Typography>
                  <Typography sx={{ fontSize: '16px', fontWeight: 300, color: 'green' }}>
                    Risk
                  </Typography>
                </Box>
              </Stack>
              <Stack mb={4}>
                <Box>
                  <Typography sx={{ fontSize: '30px', fontWeight: 400, lineHeight: 1 }}>
                    29.1
                  </Typography>
                  <Typography sx={{ fontSize: '16px', fontWeight: 300, color: 'green' }}>
                    Manual
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} textAlign="center">
              <Typography
                color="white"
                variant="h3"
                fontWeight={700}
                sx={{ fontSize: '24px !important' }}
                mb={2}
                textAlign="center"
              >
                Your Weighted $ Forecast
              </Typography>
              <Stack mb={4}>
                <Box>
                  <Typography sx={{ fontSize: '30px', fontWeight: 400, lineHeight: 1 }}>
                    $64,791.29
                  </Typography>
                  <Typography sx={{ fontSize: '16px', fontWeight: 300, color: 'green' }}>
                    Risk $
                  </Typography>
                </Box>
              </Stack>
              <Stack mb={4}>
                <Box>
                  <Typography sx={{ fontSize: '30px', fontWeight: 400, lineHeight: 1 }}>
                    $94,304.39
                  </Typography>
                  <Typography sx={{ fontSize: '16px', fontWeight: 300, color: 'green' }}>
                    Manual $
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
