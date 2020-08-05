import gql from 'graphql-tag';

export const SEARCH_INPUT_QUERY = gql`
query GetSearchInputSubmit {
  searchInputs @client {
    searchText
    __typename
  } 
}
`