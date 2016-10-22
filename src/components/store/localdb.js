class LocalDB {

  static KEY = 'any-do'

  constructor() {

  }

  /*
    把数据存入localStorage
   */
  save(data) {
    if (typeof data === 'undefined' || data === null) {
      localStorage.setItem(LocalDB.KEY, JSON.stringify(data));
      return true;
    }
    return false;
  }

  /*
    把localStorage里面的数据经过处理后返回
   */
  read() {
    let data = localStorage.getItem(LocalDB.KEY);
    if (typeof data !== 'undefined' && data !== null) {
      return JSON.parse(data);
    }
    return null;
  }

}

const localDB = new LocalDB();

export default localDB;
