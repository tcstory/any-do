import Vue from 'vue';
import App from './App';

require('./index.scss');

new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})
