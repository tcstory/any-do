<template>
  <section class="welcome-page">
    <header class="welcome-page__header">
      <h1 class="welcome-page__hello">欢迎使用Any.do !</h1>
      <p>轻击加号键,以添加您的首页任务</p>
    </header>
    <div class="welcome-page__circle-btn-wrapper">
      <circle-btn></circle-btn>
    </div>
  </section>
</template>


<style scoped>
  .welcome-page {
    width: 100vw;
    height: 100vh;
    padding-top: 30%;
  }

  .welcome-page__header {
    text-align: center;
    margin-bottom: 6em;
  }

  .welcome-page__hello {
    font-size: 1.25rem;
    font-weight: normal;
    color: #0099cc;
    margin-bottom: 1em;
  }
  .welcome-page__circle-btn-wrapper {
    width: 3.75em;
    height: 3.75em;
    margin-left: 50%;
    transform: translateX(-50%);
  }
</style>

<script>
  import CircleBtn from '../circle-btn';

  export default {
    name: 'welcomePage',
    components: {
      'circle-btn': CircleBtn,
    },
    methods: {
    }
  }
</script>
