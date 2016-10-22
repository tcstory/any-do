/* global __DEV__ */

import Vuex from 'vuex'
import Vue from 'vue'

import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todoList: [],
    editingTodo: false,
  },
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
