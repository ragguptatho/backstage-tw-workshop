import { Header } from '@backstage/core-components';
import React from 'react';

const headerMessage: string = "Welcome to TW HomePage";

export const HomePage = () => {
  return <Header title={headerMessage} tooltip={headerMessage}></Header>
};