import React from 'react';
import ReactDOM from 'react-dom';
import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
import {fetchAllPokemon} from './util/api_util';
import configureStore from './store/store';
import {selectAllPokemon} from './reducers/selectors';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  // window.store = store;
  //
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.selectAllPokemon = selectAllPokemon;
  // window.requestAllPokemon = requestAllPokemon;
  // window.receiveAllPokemon = receiveAllPokemon;
  // window.fetchAllPokemon = fetchAllPokemon;

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});
