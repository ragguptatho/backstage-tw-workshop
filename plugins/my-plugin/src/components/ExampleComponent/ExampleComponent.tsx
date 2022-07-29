import React from 'react';

export const ExampleComponent = () => (
  React.createElement('div',{onClick: () => alert('Hello')},<button>Click Me</button>)
);
