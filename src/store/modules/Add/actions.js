import api from '@/api';
import types from './mutation-types';
import initialState from './state';

export default {
  setSource({ commit }, value) {
    commit(types.SET_SOURCE, value);
  },
  setSourceText({ commit }, value) {
    commit(types.SET_SOURCE_TEXT, value);
  },
  setAddedSegments({ commit }, value) {
    commit(types.SET_ADDED_SEGMENTS, value);
  },
  async sendTextToSegment({ commit }, { source, text }) {
    const queryParams = { url: source };
    const requestData = text;
    const response = await api.Add(requestData, queryParams);
    commit(types.SET_ADDED_SEGMENTS, response);
  },
  clearAddData({ commit }) {
    commit(types.SET_SOURCE, initialState.source);
    commit(types.SET_SOURCE_TEXT, initialState.sourceText);
    commit(types.SET_ADDED_SEGMENTS, initialState.addedSegments);
  },
};
