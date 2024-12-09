import types from './mutation-types';

export default {
  [types.SET_SOURCE](state, payload) {
    state.source = payload;
  },
  [types.SET_SOURCE_TEXT](state, payload) {
    state.sourceText = payload;
  },
  [types.SET_ADDED_SEGMENTS](state, payload) {
    state.addedSegments = payload;
  },
};
