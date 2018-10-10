import { RouteConfig } from 'vue-router/types/router';

export const ChooseRoutes: RouteConfig[] = [
  {
    path:      '/choose',
    component: () => import(/* webpackChunkName: "components" */ './Choose.vue').then(m => m.default),
  },
];
