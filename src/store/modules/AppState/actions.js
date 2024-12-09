import types from './mutation-types';

export default {
  setIsLoading({ commit }, value) {
    commit(types.SET_IS_LOADING, value);
  },
  setLoadingMessage({ commit }, message) {
    commit(types.SET_LOADING_MESSAGE, message);
  },
  clearLoadingMessage({ commit }) {
    commit(types.SET_LOADING_MESSAGE, '');
  },
};
