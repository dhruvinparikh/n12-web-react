import React from 'react';
import { render } from '@testing-library/react';
import PrimaryMenuAppBar  from '.';

test('renders learn react link', () => {
  const { getByTitle } = render(<PrimaryMenuAppBar />);
  const linkElement = getByTitle(/notifications/i);
  expect(linkElement).toBeInTheDocument();
});
