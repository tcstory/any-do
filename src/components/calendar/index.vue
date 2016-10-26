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
          2016-03-02
        </span>
      </p>
    </header>
    <div class="calendar__month-selector">
      <div class="calendar__month-selector-btn calendar__month-selector-btn-left">
        <i class="fa fa-arrow-left" aria-hidden="true"></i>
      </div>
      <p class="calendar__month-selector-text">March</p>
      <div class="calendar__month-selector-btn calendar__month-selector-btn-right">
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
        <div class="calendar-stage__row">
          <div class="calendar-stage__date calendar-stage__date--inactive">
            <div class="calendar-stage__date-text">28</div>
          </div>
          <div class="calendar-stage__date calendar-stage__date--inactive">
            <div class="calendar-stage__date-text">29</div>
          </div>
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">1</div>
          </div>
          <div class="calendar-stage__date calendar-stage__date--cur">
            <div class="calendar-stage__date-text">2</div>
          </div>
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">3</div>
          </div>
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">4</div>
          </div>
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">5</div>
          </div>
        </div>
        <div class="calendar-stage__row">
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">6</div>
          </div>
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">7</div>
          </div>
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">8</div>
          </div>
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">9</div>
          </div>
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">10</div>
          </div>
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">11</div>
          </div>
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">12</div>
          </div>
        </div>
        <div class="calendar-stage__row">
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">13</div>
          </div>
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">14</div>
          </div>
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">15</div>
          </div>
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">16</div>
          </div>
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">17</div>
          </div>
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">18</div>
          </div>
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">19</div>
          </div>
        </div>
        <div class="calendar-stage__row">
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">20</div>
          </div>
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">21</div>
          </div>
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">22</div>
          </div>
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">23</div>
          </div>
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">24</div>
          </div>
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">25</div>
          </div>
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">26</div>
          </div>
        </div>
        <div class="calendar-stage__row">
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">27</div>
          </div>
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">28</div>
          </div>
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">29</div>
          </div>
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">30</div>
          </div>
          <div class="calendar-stage__date">
            <div class="calendar-stage__date-text">31</div>
          </div>
          <div class="calendar-stage__date calendar-stage__date--inactive">
            <div class="calendar-stage__date-text">1</div>
          </div>
          <div class="calendar-stage__date calendar-stage__date--inactive">
            <div class="calendar-stage__date-text">2</div>
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
    &.calendar-stage__date--cur {
      background-image: radial-gradient(circle ,#16AE94,#16AE94 60%, transparent 60%);
      color: white;
    }
    &.calendar-stage__date--inactive {
      color: #d4d4d4;
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
  export default {
    name: 'Calendar',
  }
</script>
