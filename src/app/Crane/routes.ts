import { RouteConfig } from 'vue-router/types/router';

export const CraneRoutes: RouteConfig[] = [
  {
    path:      '/crane',
    component: () => import(/* webpackChunkName: "components" */ './Crane.vue').then(m => m.default),
  },
];
