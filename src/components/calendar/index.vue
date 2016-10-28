<template>
  <article class="calendar">
    <header class="calendar-header">
      <div class="calendar-header__btn-row">
        <div class="calendar-header__toggle-btn calendar-header__date-btn">
          <span class="calendar-header__toggle-btn-text">日期</span>
        </div>
        <div class="calendar-header__toggle-btn calendar-header__time-btn calendar-header__toggle-btn--selected">
          <span class="calendar-header__toggle-btn-text">时间</span>
        </div>
      </div>
      <p class="calendar-header__date-string">
        <span class="calendar-header__date-string-text">
          {{dateStringText}}
        </span>
      </p>
    </header>
    <div class="calendar__month-selector">
      <div ref="prevMonth" class="calendar__month-selector-btn calendar__month-selector-btn-left">
        <i class="fa fa-arrow-left" aria-hidden="true"></i>
      </div>
      <!--<p class="calendar__month-selector-text">March</p>-->
      <div ref="nextMonth" class="calendar__month-selector-btn calendar__month-selector-btn-right">
        <i class="fa fa-arrow-right" aria-hidden="true"></i>
      </div>
    </div>
    <div class="calendar-stage">
      <header class="calendar-stage__header">
        <div class="calendar-stage__date-title">日</div>
        <div class="calendar-stage__date-title">一</div>
        <div class="calendar-stage__date-title">二</div>
        <div class="calendar-stage__date-title">三</div>
        <div class="calendar-stage__date-title">四</div>
        <div class="calendar-stage__date-title">五</div>
        <div class="calendar-stage__date-title">六</div>
      </header>
      <section class="calendar-stage__main">
        <div v-for="row in dates" class="calendar-stage__row">
          <div v-for="date in row" :class="{'calendar-stage__date': true,
          'calendar-stage__date--selected': date.selected,
          'calendar-stage__date--today': date.today,
          'calendar-stage__date--inactive': date.inactive}">
            <div class="calendar-stage__date-text">{{date.date}}</div>
          </div>
        </div>
      </section>
    </div>
  </article>
</template>

<style scoped lang="scss" rel="stylesheet/scss">
  .calendar {
    width: 100vw;
    height: 100vh;
    background-color: #F4F4F6;
  }

  .calendar-header {
  }

  .calendar-header__btn-row {
    display: flex;
    height: 3em;
  }

  .calendar-header__toggle-btn {
    height: 100%;
    flex-grow: 1;
    background-color: #16AE94;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    &.calendar-header__toggle-btn--selected {
      background-color: white;
      color: #16AE94;
    }
  }

  .calendar-header__toggle-btn-text {
    font-size: 1.25em;
  }

  .calendar-header__date-string {
    height: 4em;
    background-color: #16AE94;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .calendar-header__date-string-text {
    font-size: 24px;
    color: white;
    font-weight: bold;
  }

  .calendar__month-selector {
    height: 2.5em;
    display: flex;
    justify-content: space-between;
    color: #555;
    background-color: white;
  }

  .calendar__month-selector-btn {
    height: 2.5em;
    width: 2.5em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .calendar__month-selector-text {
    line-height: 2.5em;
    font-weight: bold;
  }

  .calendar-stage {
    background-color: #F4F4F6;
  }

  .calendar-stage__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.5em;
  }

  .calendar-stage__date-title {
    color: #16AE94;
    font-weight: bold;
    flex-grow: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .calendar-stage__row {
    height: 2.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .calendar-stage__date {
    flex-grow: 1;
    height: 100%;
    position: relative;
    &.calendar-stage__date--selected {
      color: white;
    }
    &.calendar-stage__date--selected::before {
      content: '';
      display: block;
      height: 2em;
      width: 2em;
      background-color: #16AE94;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -1em;
      margin-top: -1em;
      box-sizing: border-box;
    }
    &.calendar-stage__date--inactive {
      color: #d4d4d4;
    }
    &.calendar-stage__date--today::before {
      content: '';
      display: block;
      height: 2em;
      width: 2em;
      border: 0.125em solid #16AE94;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -1em;
      margin-top: -1em;
      box-sizing: border-box;
    }
  }

  .calendar-stage__date-text {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>

<script>
  import _Hammer from 'hammerjs';
  import propagating from 'propagating-hammerjs';

  import Calendar from './components/calendar-core/';

  const Hammer = propagating(_Hammer);

  let c = null;

  export default {
    name: 'Calendar',
    props: {
      curTimeStamp: {
        type: Number,
        default: 0,
      }
    },
    data: function () {
      return {
        dates: [],
        dateStringText: ''
      }
    },
    methods: {
      handlePrevMonth() {
        this.dates = c.prevMonth();
        this.dateStringText = c.toString();
      },
      handleNextMonth() {
        this.dates = c.nextMonth();
        this.dateStringText = c.toString();
      },
    },
    created() {
      c = Calendar(this.curTimeStamp);
      this.dates = c.getDates();
      this.dateStringText = c.toString();
    },
    mounted() {
      let mc = new Hammer.Manager(this.$refs.prevMonth);
      mc.add(new Hammer.Tap());
      mc.on('tap', (ev) => {
        ev.stopPropagation();
        this.handlePrevMonth();
      });
      mc = new Hammer.Manager(this.$refs.nextMonth);
      mc.add(new Hammer.Tap());
      mc.on('tap', (ev) => {
        ev.stopPropagation();
        this.handleNextMonth();
      });
    }
  }
</script>
