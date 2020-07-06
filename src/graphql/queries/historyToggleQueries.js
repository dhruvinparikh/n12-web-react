import gql from 'graphql-tag';

export const GET_HISTORY_TOGGLE = gql` 
 query GetHistoryToggleValue {
    historyToggle @client  
 }
`;
