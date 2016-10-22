import * as types from './types';

import localDb from './localdb';

export default {
  [types.ADD_TODO_ADDED](state, payload) {
    state.todoList.push(payload.todo);
    localDb.save(state.todoList);
  },
  [types.ADD_TODO_ADDING](state) {
    state.editingTodo = true;
  },
  [types.ADD_TODO_CANCEL](state) {
    state.editingTodo = false;
  }
}
