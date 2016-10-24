<template>
  <section class="edit-page">
    <header class="edit-header">
      <input type="text" class="edit-header__todo-input" placeholder="我想..." v-model.trim="todo.title">
      <div :class="{'edit-header__circle-btn-wrapper': true, 'edit-header__circle-btn-wrapper--show': todo.title !== ''}">
        <circle-btn></circle-btn>
      </div>
    </header>
    <footer :class="{'reminder-wrapper': true, 'reminder-wrapper--show': todo.title !== ''}">
      <reminder></reminder>
    </footer>
  </section>
</template>

<style scoped lang="scss" rel="stylesheet/scss">
  .edit-page {
    width: 100vw;
    height: 100vh;
    background-color: white;
    padding-top: .5em;
    position: relative;
  }

  .edit-header {
    height: 3em;
    position: relative;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  }

  .edit-header__todo-input {
    outline: none;
    height: 100%;
    width: 100%;
    font-size: 100%;
    padding-left: 1em;
    padding-right: 4em;
    border: none;
  }

  .edit-header__circle-btn-wrapper {
    height: 2.25em;
    width: 2.25em;
    position: absolute;
    right: 1em;
    top: .375em;
    opacity: 0;
    pointer-events: none;

    &.edit-header__circle-btn-wrapper--show {
      opacity: 1;
      transition: opacity 300ms;
      pointer-events: auto;
    }
  }

  .reminder-wrapper {
    height: 3em;
    position: absolute;
    left: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    &.reminder-wrapper--show {
      opacity: 1;
      transition: opacity 300ms;
      pointer-events: auto;
    }
  }

</style>

<script>
  import CircleBtn from '../circle-btn';
  import Reminder from './components/reminder';

  export default {
    name: 'editPage',
    data: function () {
      return {
        showAddTodoBtn: false,
        todo: {
          title: ''
        }
      }
    },
    methods: {
    },
    components: {
      'circle-btn': CircleBtn,
      'reminder': Reminder,
    }
  }
</script>
