/* global __DEV__ */

import Vuex from 'vuex'
import Vue from 'vue'

import actions from './actions';
import mutations from './mutations';
import localDb from './localdb';


Vue.use(Vuex);

const state = {
  todoList: [],
  editingTodo: false,
  isFirstTime: true,
};

const data = localDb.read();

if (data) {
  state.todoList = data.todoList;
  state.isFirstTime = data.isFirstTime;
}


const store = new Vuex.Store({
  state,
  mutations,
  actions,
});

if (__DEV__) {
  if (module.hot) {
    module.hot.accept(['./mutations', './actions',], () => {
      store.hotUpdate({
        mutations: require('./mutations').default,
        actions: require('./actions').default,
      })
    })
  }
}

export default store;
