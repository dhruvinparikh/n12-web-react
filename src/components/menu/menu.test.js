import React from 'react';
import { render } from '@testing-library/react';
import PrimaryMenuAppBar  from '.';

import store from '../../reducers';
import { Provider } from 'react-redux'; 

import { ApolloProvider } from '@apollo/react-hooks';
import client from '../../graphql'

test('renders learn react link', () => {
  const { getByTitle } = render(
  <Provider store={store}>
    <PrimaryMenuAppBar />
  </Provider>);
  const linkElement = getByTitle(/Profile/i);
  expect(linkElement).toBeInTheDocument();
});
