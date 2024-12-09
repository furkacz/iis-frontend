const routes = [
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/containers/Search'),
    production: true,
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import('@/containers/Add'),
    production: true,
  },
  {
    path: '/debug',
    name: 'Debug',
    component: () => import('@/containers/Debug'),
    production: false,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/search',
    production: true,
  },
];

export default routes;
