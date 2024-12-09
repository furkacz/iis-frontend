import types from './mutation-types';

export default {
  [types.SET_QUERY](state, payload) {
    state.query = payload;
  },
  [types.SET_SEGMENTS](state, payload) {
    state.segments = payload;
  },
};
