
import React, { useContext } from 'react';
import { InputBase } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import SearchInputContext from '../../../context/search-input-context';
import HistoryToggleContext from '../../../context/history-toggle-context';
// import custom state hooks
import useStyles from './search-form.styles';

export default function SearchForm() { 
  const classes = useStyles();
  // const [searchValue, setSearchValue] = useState(null);
  const {  addSearchInput } = useContext(SearchInputContext);
  const historyToggle = useContext(HistoryToggleContext);

  const handleSearchOnChange = (event)=>{
    if(event.key === "Enter"){
      console.log("Search");
      console.log(event.target.value);
      // setSearchValue(event.target.value)
      console.log(historyToggle);
      if(historyToggle){
        addSearchInput(event.target.value);
      }
      // context 
      // trigger effect
    }
  }

  return (

    <div className={classes.search}>
    <div className={classes.searchIcon}>
      <SearchIcon />
    </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        onKeyPress={handleSearchOnChange}
        fullWidth={true}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
    
  )
}
