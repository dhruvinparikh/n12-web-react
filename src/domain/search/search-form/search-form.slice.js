import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const searchFormAdapter = createEntityAdapter();

const initialState = searchFormAdapter.getInitialState({searchInputSubmit: [], message: "message"});

export const searchFormSlice = createSlice({
  name: 'searchForm',
  initialState,
  reducers: {
    addSearchInput: (state, action) => {
      console.log("Action Payload", action.payload);

      return {...state, searchInputSubmit: [...state.searchInputSubmit, `Entry ${action.payload}`]}
      // return {...state, searchInputSubmit: state.searchInputSubmit + 1 }

    },
  }
})


export const { addSearchInput } = searchFormSlice.actions;

export const searchFormInput = (state) => state.searchForm;

export default searchFormSlice.reducer;