import { RouteConfig } from 'vue-router/types/router';

export const CoffeeRoutes: RouteConfig[] = [
  {
    path:      '/coffee',
    component: () => import(/* webpackChunkName: "components" */ './Coffee.vue').then(m => m.default),
  },
];
