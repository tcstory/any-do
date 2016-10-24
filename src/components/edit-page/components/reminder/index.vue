<template>
  <section class="reminder">
    <div class="reminder__btn">
      <i class="fa fa-bell-o reminder__btn-icon" aria-hidden="true"></i>
    </div>
    <p class="reminder__prompt-text">提醒我</p>
  </section>
</template>

<style scoped lang="scss" rel="stylesheet/scss">
  .reminder {
    width: 100%;
    height: 100%;
    color: #c5c1c1;
    display: flex;
    align-items: center;
  }

  .reminder__btn {
    height: 2.25em;
    width: 2.25em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  .reminder__btn-icon {
    /*font-size: 1.125em;*/
  }

  .reminder__prompt-text {
    display: inline-block;
    font-size: .875em;
  }
</style>

<script>
  import _Hammer from 'hammerjs';
  import propagating from 'propagating-hammerjs';

  const Hammer = propagating(_Hammer);

  export default {
    name: 'reminder',
    mounted: function () {
      const mc = new Hammer.Manager(this.$el);
      mc.add(new Hammer.Tap());
      mc.on('tap', (ev) => {
        ev.stopPropagation();
      });
    }
  }
</script>
