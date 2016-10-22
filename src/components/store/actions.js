import * as types from './types';

export default {
  [types.ADD_TODO_ADDING](context) {
    context.commit({
      type: types.ADD_TODO_ADDING,
    });
  },
  [types.ADD_TODO_ADDED](context, payload) {
    context.commit({
      type: types.ADD_TODO_ADDED,
      todo: payload.todo,
    });
  },
  [types.ADD_TODO_CANCEL](context) {
    context.commit({
      type: types.ADD_TODO_CANCEL,
    })
  }
}
