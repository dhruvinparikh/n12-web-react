
import React, { useState, useEffect, memo, Fragment } from 'react';

// import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

import Autocomplete from '@material-ui/lab/Autocomplete';

import { Mutation } from '@apollo/react-components';

// import SearchIcon from '@material-ui/icons/Search';

// uncomment for context
// import {SearchInputContext} from '../../../context/search-input-context';
// import {HistoryToggleContext} from '../../../context/history-toggle-context';

// uncomment for Redux
// import { useSelector, useDispatch } from "react-redux";
// import { addSearchInput } from "./search-form.slice";

// import custom state hooks
import useStyles from './search-form.styles';

import { useMutation } from '@apollo/react-hooks';
import { ADD_SEARCH_INPUT_MUTATION } from '../../../graphql/mutations/submitSearchInputMutation';
const Message = () => {
  // uncomment for redux
  // const message = useSelector(state => state.searchForm.message);
  // the text will render to a random color for
  // each instance of the Message component
  // useEffect(() => { 
  //   // do stuff 
  //   console.log('Colour Change');    
  // }, [message]);

  const getColor = () => (Math.floor(Math.random() * 255))
  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`
  }
  return (
    // uncomment for redux
    // <div>
    //   <h4 style={style}>{message}</h4>
    // </div>
    <div>
      <h4 style={style}>{"TEST"}</h4>
    </div>
  )
}
const MemoizedMessage = memo(Message);

const SearchForm = () =>  { 
  const classes = useStyles();
  
  // uncomment for context
  // const [searchValue, setSearchValue] = useState(null);
  // const { setSearchResult } = useContext(SearchInputContext);
  // const historyContext = useContext(HistoryToggleContext);

  // uncomment for redux
  // const dispatch = useDispatch();


  // const [addSearchInput] = useMutation(ADD_SEARCH_INPUT_MUTATION, { variables: { searchInput:  } })

  const handleSearchOnChange = (event, addSearchInput)=>{
    if(event.key === "Enter"){

      // uncomment for Context context 
      // console.log("Search");
      // console.log(event.target.value);
      // setSearchValue(event.target.value)
      // console.log(historyContext.historyToggle);
      // if(historyContext.historyToggle){
      //   addSearchInput(event.target.value);
      // }
      // trigger effect

      // uncomment for redux
      // dispatch(addSearchInput(event.target.value))
      // console.log('addSearchInput', addSearchInput)
      addSearchInput({ variables: {searchInputSubmit : { searchText: event.target.value }} })
    }
  }

  function sleep(delay = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch('https://country.register.gov.uk/records.json?page-size=5000');
      await sleep(1e3); // For demo purposes.
      const countries = await response.json();
      // setSearchResult(countries);
      if (active) {
        setOptions(Object.keys(countries).map((key) => {
          const [name] = countries[key].item;
          return name;
        }));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const filterOptions = (options, { inputValue }) => {
    // console.log("filtered", options);
    if(inputValue){
      // console.log('Input Value')
      // console.log('Options')
      // setSearchResult(options);

    }
    return options;
  }


  return (
<Fragment>
    <div className={classes.search}>
    {/* <div className={classes.searchIcon}>
      <SearchIcon />
    </div> */}
    <Mutation mutation={ADD_SEARCH_INPUT_MUTATION}>
      {(addSearchInput, { data }) => (
  
        <Autocomplete
          id="asynchronous-demo"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          variant="filled"
          size="small"
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          getOptionSelected={(option, value) => option.name === value.name}
          getOptionLabel={(option) => option.name}
          filterOptions={filterOptions}
          options={options}
          loading={loading}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search"
              variant="filled"
              size="small"
              // onKeyPress={handleSearchOnChange}
              onKeyPress={e=>{
                handleSearchOnChange(e, addSearchInput)
              }}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
      )}
      </Mutation>
      {/* <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        onKeyPress={handleSearchOnChange}
        fullWidth={true}
        inputProps={{ 'aria-label': 'search' }}
      /> */}
    </div>
    <MemoizedMessage/>
    </Fragment>
  )
}

export default SearchForm;