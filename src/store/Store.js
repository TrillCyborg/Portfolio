import { createStore } from 'redux';
import reducers from '../reducers';

const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
