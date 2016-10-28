import dateFormater from 'dateformater-tc';

import Calendar from './calendar-core';

function proxyCalendar(curTimeStamp) {

  /**
   * 以二维数组的方式返回日期数据
   * @param dates
   * @returns {Array}
   */
  function getDatesIn2d(dates) {
    let sum = dates.length;
    let data = [];
    let _dates = [];
    for (let i = 0; i < sum; i++) {
      if ((i + 1) % 7 !== 0) {
        data.push(dates[i]);
      } else {
        data.push(dates[i]);
        _dates.push(data);
        data = [];
      }
    }
    return _dates;
  }

  function modify(curDate, selectedDate, dates) {
    const curDateInMilliseconds = curDate.getTime();
    let selectedDateInMilliseconds = -1;
    if (selectedDate) {
      selectedDateInMilliseconds = selectedDate.getTime();
    } else {
      selectedDateInMilliseconds = curDateInMilliseconds;
    }
    dates.forEach(function (item) {
      let tempTime = item.d.getTime();

      // 属于上个月的时间不可选
      if (item.belong === 'prev') {
        item.inactive = true;
        item.selected = false;
        item.today = false;
        // 属于下个月的时间不可选
      } else if (item.belong === 'next') {
        item.inactive = true;
        item.selected = tempTime === selectedDateInMilliseconds;
        item.today = false;
        // 属于当月的时间要进行判断
      } else {
        if (curDateInMilliseconds > tempTime) {
          item.inactive = true;
          item.selected = false;
          item.today = false;
        }  else if (curDateInMilliseconds === tempTime) {
          item.inactive = false;
          item.selected = curDateInMilliseconds === selectedDateInMilliseconds;
          item.today = true;
        }
      }
    });
    return dates;
  }

  // 只需要年月日的信息
  const d = new Date(curTimeStamp);
  const calendar = Calendar(new Date(d.getFullYear(), d.getMonth(), d.getDate()));
  const curDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());

  let selectedDate = null;
  return {
    getDates: function () {
      return getDatesIn2d(
        modify(
          curDate,
          selectedDate,
          calendar.getDates())
      );
    },
    nextMonth() {
      calendar.dateObj.setMonth(calendar.dateObj.getMonth() + 1);
      return getDatesIn2d(
        modify(
          curDate,
          selectedDate,
          calendar.getDates())
      );
    },
    prevMonth() {
      calendar.dateObj.setMonth(calendar.dateObj.getMonth() - 1);
      return getDatesIn2d(
        modify(
          curDate,
          selectedDate,
          calendar.getDates())
      );
    },
    toString() {
      return (dateFormater(calendar.dateObj.getTime())).format('yyyy-MM');
    }
  }

}

export default proxyCalendar;
