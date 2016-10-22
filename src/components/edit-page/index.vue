<template>
  <section class="edit-page">
    <header class="edit-header">
      <input type="text" class="edit-header__todo-input" placeholder="我想..." v-model.trim="todo.title">
      <div :class="{'edit-header__circle-btn-wrapper': true, 'edit-header__circle-btn-wrapper--show': todo.title !== ''}">
        <circle-btn></circle-btn>
      </div>
    </header>
  </section>
</template>

<style scoped lang="scss" rel="stylesheet/scss">
  .edit-page {
    width: 100vw;
    height: 100vh;
    background-color: white;
    padding-top: .5em;
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

    &.edit-header__circle-btn-wrapper--show {
      opacity: 1;
      transition: opacity 300ms;
    }
  }

</style>

<script>
  import CircleBtn from '../circle-btn';

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
    components: {
      'circle-btn': CircleBtn,
    }
  }
</script>
