function outputDates(cur) {

  /**
   * 推算上/下一天是星期几
   * @param curDay
   * @param direction
   * @returns {*}
   */
  function counter(curDay, direction = true) {
    if (direction) {
      return {
        get() {
          return curDay;
        },
        update() {
          if (curDay >= 6) {
            curDay = 0;
          } else {
            curDay++;
          }
        }
      }
    } else {
      return {
        get() {
          return curDay;
        },
        update() {
          if (curDay <= 0) {
            curDay = 0;
          } else {
            curDay--;
          }
        }
      }
    }
  }

  /**
   * 补充下个月的日期
   * @param dates
   * @returns {*}
   */
  function fillRestDates(y, m, dates) {
    const day = (new Date(y, m + 1, 1)).getDay(); // 下个月第一天是星期几
    const c = counter(day);
    const diff = 6 - dates[dates.length - 1].day;
    for (let i = 0; i < diff; i++) {
      dates.push({
        date: i + 1,
        day: c.get(),
        d: new Date(y, m + 1, i + 1),
        belong: 'next', // 标示是不是这个月的天数
      });
      c.update();
    }
    return dates;
  }

  /**
   * 补充上个月的日期
   * @param y
   * @param m
   * @param dates
   */
  function fillLastDates(y, m, dates) {
    let date = (new Date(y, m, 0)).getDate(); // 上个月最后一天是多少号
    const day = (new Date(y, m, 0)).getDay(); // 上个月最后一天是星期几
    const c = counter(day, false);
    const diff = dates[0].day;
    for (let i = 0; i < diff; i++) {
      dates.unshift({
        date: date,
        day: c.get(),
        d: new Date(y, m - 1, date),
        belong: 'prev',
      });
      date--;
      c.update();
    }
    return dates;
  }

  const y = cur.getFullYear(); // 当年
  const m = cur.getMonth(); // 当月
  const firstDayOfMonth = (new Date(y, m, 1)).getDay(); // 当月第一天是星期几
  const sumOfDates = (new Date(y, m + 1, 0)).getDate(); // 这个月有多少天

  let dates = [];
  const c = counter(firstDayOfMonth);
  for (let i = 0; i < sumOfDates; i++) {
    dates[i] = {
      date: i + 1,
      day: c.get(),
      d: new Date(y, m, i + 1),
      belong: 'cur',
    };
    c.update();
  }
  dates = fillRestDates(y, m, dates);
  dates = fillLastDates(y, m, dates);
  return dates;
}

export default function (timeString) {
  let cur;
  if (timeString instanceof Date) {
    cur = timeString;
  } else {
    cur = new Date(timeString);
  }
  return {
    getDates() {
      return outputDates(cur);
    },
    dateObj: cur,
  }
}
