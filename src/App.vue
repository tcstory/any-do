<template>
  <main id="app">
    <welcome-page></welcome-page>
  </main>
</template>


<style scoped>
  #app {
    height: 100vh;
    width: 100vw;
  }
</style>

<script>
  import WelcomePage from './components/welcome-page';

  export default {
    name: 'app',
    components: {
      'welcome-page': WelcomePage,
    },
    methods: {
    }
  }
</script>
