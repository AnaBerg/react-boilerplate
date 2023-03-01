import React from 'react';

import { render, screen } from '@testing-library/react';

import App from './App';

describe('The App', () => {
  it('Should render correctly', async () => {
    render(<App />);

    const text = await screen.findByText('Hello World');

    expect(text).toBeInTheDocument();
  });
});
