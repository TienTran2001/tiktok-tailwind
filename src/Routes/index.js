import { Profiler } from 'react';

import Following from '~/pages/Following/Following';
import Home from '~/pages/Home/Home';
import Profile from '~/pages/Profile';

// public routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/@:nickname', component: Profile },
  { path: '/following', component: Following },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
