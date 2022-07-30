import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { usersPagePlugin, UsersPagePage } from '../src/plugin';

createDevApp()
  .registerPlugin(usersPagePlugin)
  .addPage({
    element: <UsersPagePage />,
    title: 'Root Page',
    path: '/users-page'
  })
  .render();
