<template>
  <main id="app">
    <div class="circle-btn-wrapper">
      <circle-btn @onbtnclick="onCreateTodo"></circle-btn>
    </div>
  </main>
</template>


<style scoped>
  #app {
    height: 100vh;
    width: 100vw;
  }
  .circle-btn-wrapper {
    width: 3.75em;
    height: 3.75em;
  }
</style>

<script>
  import CircleBtn from './components/circle-btn';

  export default {
    name: 'app',
    components: {
      'circle-btn': CircleBtn,
    },
    methods: {
      onCreateTodo() {
        console.log('create');
      }
    }
  }
</script>
