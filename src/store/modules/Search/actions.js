import api from '@/api';
import types from './mutation-types';
import initialState from './state';

export default {
  setQuery({ commit }, value) {
    commit(types.SET_QUERY, value);
  },
  setSegments({ commit }, value) {
    commit(types.SET_SEGMENTS, value);
  },
  async fetchSegments({ commit }, query) {
    const requestData = query;
    const response = await api.Search(requestData);
    commit(types.SET_SEGMENTS, response);
  },
  clearSearchData({ commit }) {
    commit(types.SET_QUERY, initialState.query);
    commit(types.SET_SEGMENTS, initialState.segments);
  },
};
