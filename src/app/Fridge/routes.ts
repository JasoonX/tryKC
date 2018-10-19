import { RouteConfig } from 'vue-router/types/router';

export const FridgeRoutes: RouteConfig[] = [
  {
    path:      '/fridge',
    component: () => import(/* webpackChunkName: "components" */ './Fridge.vue').then(m => m.default),
  },
];
