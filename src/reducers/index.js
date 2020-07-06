
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import searchFormReducer from "../domain/search/search-form/search-form.slice";
import historyMenuReducer from "../components/menu/history-menu.slice";

// import commentReducer from "../features/Comments/commentsSlice";

const middleware = [...getDefaultMiddleware()]
const reducer = {
  searchForm: searchFormReducer,
  historyMenu: historyMenuReducer,
}

// const preloadedState = {
//   searchForm: [],
// }

export default configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});