import { RouteConfig } from 'vue-router/types/router';

export const OvenRoutes: RouteConfig[] = [
  {
    path:      '/oven',
    component: () => import(/* webpackChunkName: "components" */ './Oven.vue').then(m => m.default),
  },
];
