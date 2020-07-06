import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-boost';
import { resolvers, typeDefs } from './resolvers';
import initialState from './initialState';

const cache = new InMemoryCache()

const client = new ApolloClient({
  cache,
  typeDefs,
  resolvers,
});

cache.writeData({
  data: initialState,
});


export default client