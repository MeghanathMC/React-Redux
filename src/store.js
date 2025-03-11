// // import {createStore,applyMiddleware} from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { thunk } from 'redux-thunk';
// import { createStore } from 'redux';
// import { applyMiddleware } from 'redux';
// import reducer from './reducer';

// const middleware=[thunk];
// const store=createStore(
//     reducer,
//   composeWithDevTools(  applyMiddleware(...middleware))

// );


// export default store;


import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import {thunk} from 'redux-thunk';
import reducer from './reducer';

const middleware = [thunk];

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: composeWithDevTools(),
});

export default store;

