import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const usersPagePlugin = createPlugin({
  id: 'users-page',
  routes: {
    root: rootRouteRef,
  },
});

export const UsersPagePage = usersPagePlugin.provide(
  createRoutableExtension({
    name: 'UsersPagePage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
