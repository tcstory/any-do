import * as types from './types';

export default {
  [types.ADD_TODO_ADDED](state, payload) {
    state.todoList.push(payload.todo);
  },
  [types.ADD_TODO_ADDING](state) {
    state.editingTodo = true;
  },
  [types.ADD_TODO_CANCEL](state) {
    state.editingTodo = false;
  }
}
