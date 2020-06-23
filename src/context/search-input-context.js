import React, { createContext, memo } from 'react';

import SearchInputHook from '../hooks/search-input-hook';

export const SearchInputContext = createContext();

const SearchInputProvider = ({children}) => {
  const  searchInputContext = SearchInputHook([], {});

  console.log('searchInputContext', searchInputContext);
  return (
    <SearchInputContext.Provider value={searchInputContext}>
      {children}
    </SearchInputContext.Provider>
  )
}

export default SearchInputProvider;