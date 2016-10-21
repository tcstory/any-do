<template>
  <main id="app">
    <transition name="fade">
      <component :is="curComponent"></component>
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

  export default {
    name: 'app',
    data: function () {
      return {
        curComponent: '',
      }
    },
    components: {
//      'welcome-page': function (resolve) {
//        require(['./components/welcome-page'], resolve);
//      },
      'welcome-page': require('./components/welcome-page')
    },
    methods: {

    },
    mounted() {
      if (isFirstTime()) {
        this.curComponent = 'welcome-page';
      }
    }
  }

  function isFirstTime() {
    if (localStorage.getItem('new-to-any-do') !== '1') {
      return true;
    } else {
      return false;
    }
  }

</script>
