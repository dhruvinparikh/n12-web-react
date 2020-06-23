import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const historyMenuAdapter = createEntityAdapter();

const initialState = historyMenuAdapter.getInitialState({historyToggle: false});

export const historyMenuSlice = createSlice({
  name: 'historyMenu',
  initialState,
  reducers: {
    toggleHistory: (state, action) => {
      console.log(action.payload)
      return {...state, historyToggle: action.payload}
    },
  }
})


export const { toggleHistory } = historyMenuSlice.actions;

export const historyMenu = (state) => state.historyMenu;

export default historyMenuSlice.reducer;