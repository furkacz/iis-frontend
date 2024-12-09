import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import Add from './modules/Add';
import AppState from './modules/AppState';
import Search from './modules/Search';

export default createStore({
  modules: {
    Add,
    AppState,
    Search,
  },
  plugins: [
    createPersistedState({
      paths: ['Add', 'Search'],
      storage: window.sessionStorage,
    }),
  ],
});
