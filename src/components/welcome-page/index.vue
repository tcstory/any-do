<template>
  <section class="welcome-page">
    <header class="welcome-page__header">
      <h1 class="welcome-page__hello">欢迎使用Any.do !</h1>
      <p>轻击加号键,以添加您的首页任务</p>
    </header>
    <div class="welcome-page__circle-btn-wrapper">
      <circle-btn @onbtnclick="addTodoAdding"></circle-btn>
    </div>
  </section>
</template>


<style scoped>
  .welcome-page {
    width: 100vw;
    height: 100vh;
    padding-top: 30%;
    background-color: white;
  }

  .welcome-page__header {
    text-align: center;
    margin-bottom: 6em;
    transform: translateY(-30%);
  }

  .welcome-page.welcome-page--running .welcome-page__header {
    transform: translateY(0%);
    transition: transform 600ms;
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
    transform: translateX(-50%) translateY(50%);
  }

  .welcome-page.welcome-page--running .welcome-page__circle-btn-wrapper {
    transform: translateX(-50%) translateY(0%);
    transition: transform 600ms;
  }

</style>

<script>
  import CircleBtn from '../circle-btn';
  import * as types from '../../components/store/types';

  export default {
    name: 'welcomePage',
    components: {
      'circle-btn': CircleBtn,
    },
    methods: {
      addTodoAdding() {
        this.$store.dispatch(types.ADD_TODO_ADDING);
      }
    },
    mounted() {
      setTimeout(()=> {
        this.$el.classList.add('welcome-page--running');
      }, 100);
    }
  }
</script>
