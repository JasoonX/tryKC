import { RouteConfig } from 'vue-router/types/router';

export const TeapotRoutes: RouteConfig[] = [
  {
    path:      '/teapot',
    component: () => import(/* webpackChunkName: "components" */ './Teapot.vue').then(m => m.default),
  },
];
