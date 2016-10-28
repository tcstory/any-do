<template>
  <main id="app">
    <transition name="fade">
      <component :is="curComponent" :cur-time-stamp="curTimeStamp"></component>
    </transition>
  </main>
</template>


<style scoped>
  #app {
    height: 100vh;
    width: 100vw;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1000ms;
  }
</style>

<script>
  import store from './components/store';

  export default {
    name: 'app',
    data: function () {
      return {
        curComponent: 'calendar',
        curTimeStamp: Date.now(),
      }
    },
    computed: {
      isFirstTime() {
        return store.state.isFirstTime;
      }
    },
    store,
    components: {
      'welcome-page': function (resolve) {
        require(['./components/welcome-page'], resolve);
      },
      'edit-page': function (resolve) {
        require(['./components/edit-page'], resolve);
      },
      'calendar': function (resolve) {
        require(['./components/calendar'], resolve);
      }
    },
    methods: {

    },
    mounted() {
//      if (this.isFirstTime) {
//        this.curComponent = 'welcome-page';
//      }
    }
  }

</script>
