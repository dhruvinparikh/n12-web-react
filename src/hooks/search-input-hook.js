import { useState, useEffect } from 'react';

const SearchInputHook = (initialState) => {
  const [searchQuery, setSearchQuery] = useState(initialState);
  
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
    addSearchInput 
  };
}

export default SearchInputHook;