import gql from 'graphql-tag';
import { SEARCH_INPUT_QUERY } from '../queries/submitSearchInputQueries';


export const ADD_SEARCH_INPUT_MUTATION = gql`
    mutation AddQueryInput($searchInputSubmit: SEARCH_INPUT_SUBMIT!) {
        addSearchInput(searchInputSubmit: $searchInputSubmit) @client
    }
`

// export const TOGGLE_TODO = gql`
// mutation ToggleTodo($id: Int!) {
//   toggleTodo(id: $id) @client
// }
// `;

const SearchInputMutation = {
  // toggleTodo: (_root, variables, { cache, getCacheKey }) => {
  //   const id = getCacheKey({ __typename: 'TODO', id: variables.id })

  //   const fragment = gql`
  //           fragment completeTodo on TODO {
  //             completed
  //             text
  //           }
  //         `;

  //   const todo = cache.readFragment({ fragment, id });
  //   const data = { ...todo, completed: !todo.completed };
  //   cache.writeData({ id, data });
  //   return null;
  // },
  addSearchInput: (_root, variables, { cache }) => {
    const { searchInputs = [] } = cache.readQuery({ query: SEARCH_INPUT_QUERY })
    console.log("variables", variables.searchInputSubmit.searchText)
    
    const searchInput = {
      searchText: variables.searchInputSubmit.searchText, __typename: "SEARCH_INPUT_SUBMIT"
    }
    console.log("searchInput", searchInput)
    const newSearchInputSubmit = [
      ...searchInputs, searchInput]
    cache.writeData({ data: { searchInputs: newSearchInputSubmit } })
    return null
  },
}

export default SearchInputMutation