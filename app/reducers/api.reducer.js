import createReducer from '../helpers/createReducer';
import * as types from '../actions/types';

export const progreses = createReducer({}, {
  [types.PROGRESS](state, action) {
    state[action.id] = action.progress;
    return {...state};
  }
})


