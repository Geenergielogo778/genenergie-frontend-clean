import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { loadStripe } from '@stripe/stripe-js';
import { useTranslation } from 'react-i18next';

const PricingCard = ({ title, price, features, isCurrent, icon, handleClick }) => {
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        border: '10px',
        px: '8px',
        pt: '10px',
        color: isCurrent ? 'white' : 'black',
        background: isCurrent ? 'black' : 'white',
        // minHeight: isCurrent ? 'auto' : '765px',
        boxShadow:
          '11px 11px 16.3px 0px rgba(0, 0, 0, 0.19) inset, 6px 6px 6.5px 0px rgba(0, 0, 0, 0.40), -11px -11px 16.3px 0px rgba(0, 0, 0, 0.19) inset',
      }}
    >
      <CardContent>
        <img
          style={{ position: 'absolute', top: 0, right: '30px', maxWidth: 60 }}
          src={title === 'Trial' ? '/assets/pricing/plan-icons/current-plan-icon.png' : icon}
          alt="plan-icon"
        />
        <Box textAlign="center">
          <Typography fontSize={30} fontWeight={600} mb={2}>
            {title}
          </Typography>
          <Typography fontSize={52} fontWeight={600} lineHeight={1}>
            ${price}
          </Typography>
          <Typography fontSize={20} fontWeight={400} mb={2}>
            {title === 'Trial' ? t('nopayment') : t('onetimepayment')}
          </Typography>
          <Button
            onClick={handleClick}
            variant="contained"
            sx={{
              fontWeight: 500,
              fontSize: '22px',
              borderRadius: '12px',
              px: '26px',
              minWidth: '170px',
              minHeight: '46px',
              boxShadow:
                '2px 2px 2.7px 0px rgba(0, 0, 0, 0.25), 3px 3px 2.3px 0px rgba(0, 0, 0, 0.25) inset, -3px 3px 2.7px 0px rgba(0, 0, 0, 0.25)',
            }}
          >
            {isCurrent ? t('subscribedbtn') : t('chooseplanbtn')}
          </Button>
        </Box>
        <Divider sx={{ background: 'black', my: 2 }} />

        <List sx={{ px: 2 }}>
          {features &&
            features.length > 0 &&
            features.map((feature, index) => (
              <ListItem key={index} sx={{ p: 0, justifyContent: 'center' }}>
                <ListItemIcon sx={{ minWidth: 'unset', mr: 1.5 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                  >
                    <path
                      d="M8.70977 0C4.1829 0 0.5 3.5888 0.5 8C0.5 12.4112 4.1829 16 8.70977 16C13.2366 16 16.9195 12.4112 16.9195 8C16.9195 7.0992 16.7586 6.23536 16.4754 5.42656L15.1461 6.72188C15.2323 7.13468 15.2776 7.5624 15.2776 8C15.2776 11.5288 12.3311 14.4 8.70977 14.4C5.08844 14.4 2.14195 11.5288 2.14195 8C2.14195 4.4712 5.08844 1.6 8.70977 1.6C10.0504 1.6 11.2974 1.99511 12.3384 2.67031L13.5138 1.525C12.1608 0.5698 10.5036 0 8.70977 0ZM16.3391 1.03438L7.88879 9.26875L5.18534 6.63438L4.02443 7.76562L7.88879 11.5312L17.5 2.16563L16.3391 1.03438Z"
                      fill={isCurrent ? 'white' : 'black'}
                    />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  sx={{ '& .MuiTypography-root': { fontSize: '20px' } }}
                  primary={t(feature)}
                />
              </ListItem>
            ))}
        </List>
      </CardContent>
    </Card>
  );
};
PricingCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  features: PropTypes.array,
  isCurrent: PropTypes.bool,
  icon: PropTypes.string,
};
export default PricingCard;
