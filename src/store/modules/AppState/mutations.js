import types from './mutation-types';

export default {
  [types.SET_IS_LOADING](state, payload) {
    state.isLoading = payload;
  },
  [types.SET_LOADING_MESSAGE](state, payload) {
    state.loadingMessage = payload;
  },
};
