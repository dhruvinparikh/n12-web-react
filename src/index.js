import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';

// uncomment to add Redux
// import store from './reducers/';
// import { Provider } from 'react-redux'; 
import { ApolloProvider } from '@apollo/react-hooks';

import * as serviceWorker from './serviceWorker';
import client from './graphql/'

ReactDOM.render(
  <React.StrictMode>
    {/* // uncomment to add Redux  <Provider store={store}> */}
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    {/* // uncomment to add Redux </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
