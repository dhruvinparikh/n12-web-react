import { GET_HISTORY_TOGGLE } from '../queries/historyToggleQueries';
import gql from 'graphql-tag';

export const UPDATE_HISTORY_TOGGLE = gql`
  mutation updateHistoryToggle($historyToggle: Boolean!) {
    updateHistoryToggle(historyToggle: $historyToggle) @client
  }
`;

export const HistoryToggleMutation = {
  updateHistoryToggle: (_, variables, { cache }) => {
    const data = cache.readQuery({ query: GET_HISTORY_TOGGLE });
    cache.writeData({ data: { historyToggle: variables.historyToggle } });
    return null;
  },
};