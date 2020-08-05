import { useState, useEffect } from 'react';

const SearchInputHook = (initialState, searchResultInitialState) => {
  const [searchQuery, setSearchQuery] = useState(initialState);
  const [searchResult, setSearchResult] = useState(searchResultInitialState);

  useEffect(() => {
    // This effect uses the `value` variable,
    // so it "depends on" `value`.
    console.log("useEffect" , searchQuery);
  }, [searchQuery]);

  const addSearchInput = (searchInput) => {
    setSearchQuery(oldArray => [...oldArray, `Entry ${searchInput}`]);
  };

  return {
    searchQuery,
    setSearchQuery, 
    addSearchInput,
    searchResult, 
    setSearchResult 
  };
}

export default SearchInputHook;