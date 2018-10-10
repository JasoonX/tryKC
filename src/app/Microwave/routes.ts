import { RouteConfig } from 'vue-router/types/router';

export const MicrowaveRoutes: RouteConfig[] = [
  {
    path:      '/microwave',
    component: () => import(/* webpackChunkName: "components" */ './Microwave.vue').then(m => m.default),
  },
];
