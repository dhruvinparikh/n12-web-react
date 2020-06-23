import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders N10n Text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/N10n/i);
  expect(linkElement).toBeInTheDocument();
});
