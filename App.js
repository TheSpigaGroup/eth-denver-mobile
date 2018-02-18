import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Text, View } from 'react-native';
import './global';
import Router from './Router.js';
import trustee from './trustee/reducers.js';

const rootReducer = combineReducers({
  trustee,
});

const rootState = {
};

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  rootState,
  compose(applyMiddleware(thunk)),
);

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

/* const styles = StyleSheet.create({
 *   container: {
 *     flex: 1,
 *     backgroundColor: '#fff',
 *     alignItems: 'center',
 *     justifyContent: 'center',
 *   },
 * });
 * */
export default App;