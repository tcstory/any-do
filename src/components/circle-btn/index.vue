<template>
  <div :class="{'circle-btn': true, 'circle-btn--shadow': getBtnEffect}">
  </div>
</template>

<style scoped lang="scss" rel="stylesheet/scss">
  .circle-btn {
    width: 100%;
    height: 100%;
    background-color: #0099CC;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
      content: '';
      display: block;
      width: 40%;
      height: 40%;
      border-radius: 50%;
      background-image: linear-gradient(90deg,
        rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 45%, white 45%,white 55%,rgba(255, 255, 255, 0) 55%),
      linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 45%, white 45%,white 55%,rgba(255, 255, 255, 0) 55%);
    }

    &.circle-btn--shadow {
      box-shadow: 0 .25em .5em rgba(0, 0, 0, 0.4);
    }
  }

</style>

<script>
  import _Hammer from 'hammerjs';
  import propagating from 'propagating-hammerjs';

  const Hammer = propagating(_Hammer);

  const effect = {
    shadow: 1,
    noShadow: 0,
  }

  export default {
    computed: {
      getBtnEffect() {
        if (this.btnEffect === effect.shadow) {
          return true;
        }
        return false;
      }
    },
    props: {
      'btnEffect': {
        type: Number,
        default: effect.noShadow,
      }
    },
    mounted: function () {
      const mc = new Hammer.Manager(this.$el);
      mc.add(new Hammer.Tap());
      mc.on('tap', (ev) => {
        ev.stopPropagation();
        this.$emit('onbtnclick');
      });

    }
  }
</script>
