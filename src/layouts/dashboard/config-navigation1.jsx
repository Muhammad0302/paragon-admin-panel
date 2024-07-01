import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/swatti',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user',
    path: '/swatti/user',
    icon: icon('ic_user'),
  },
  {
    title: 'subscribe',
    path: '/swatti/subscribe',
    icon: icon('ic_user'),
  },
    {
    title: 'package',
    path: '/swatti/package',
    icon: icon('ic_user'),
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // }
];

export default navConfig;
