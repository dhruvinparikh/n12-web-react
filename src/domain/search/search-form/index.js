
import React, { useState } from 'react';
import { FormControlLabel, FormGroup, InputBase, Checkbox } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import History from '@material-ui/icons/History';
import HistoryOutlined from '@material-ui/icons/HistoryOutlined';
// import custom state hooks
import useStyles from './search-form.styles';

export default function SearchForm() { 
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState(null);
  
  const handleSearchOnChange = (event)=>{
    if(event.key === "Enter"){
      console.log("Search");
      console.log(event.target.value);
      setSearchValue(event.target.value)
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
