import gql from 'graphql-tag';
import { HistoryToggleMutation } from '../mutations/historyToggleMutation';
import SearchInputMutation from '../mutations/submitSearchInputMutation';

export const typeDefs = gql`
  extend type Query {
    historyToggle: Boolean!,
  }
`;

export const resolvers = {
  Mutation: {
    ...HistoryToggleMutation,
    ...SearchInputMutation
  }
}
