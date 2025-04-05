import Iconify from 'src/components/iconify/iconify';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

export const menuItems = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: icon('dashboard-icon'),
  },
  {
    title: 'Risk Weights',
    path: '/risk-weights',
    icon: icon('risk-weights-icon'),
  },
  {
    title: 'Narrative Weights',
    path: '/narrative-weights',
    icon: icon('narrative-weights-icon'),
  },
  {
    title: 'Portfolio',
    path: '/portfolio',
    icon: icon('portfolio-icon'),
  },
  {
    title: 'Available Buys',
    path: '/available-buys',
    icon: <Iconify color="#FCB22E" icon="solar:dollar-outline" width="1.7rem" height="1.7rem" />,
  },
  {
    title: 'Available Sells',
    path: '/available-sells',
    icon: icon('available-sells-icon'),
  },
];

export const preferenceItems = [
  {
    title: 'Profile',
    path: '/profile',
    icon: icon('profile_icon'),
  },
  {
    title: 'Logout',
    path: '/logout',
    icon: icon('logout_con'),
  },
  {
    title: 'Help & Support',
    path: '/support',
    icon: icon('support_icon'),
  },
];
