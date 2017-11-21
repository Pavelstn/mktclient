import {Injectable} from '@angular/core';

declare const window;
declare const localStorage;

@Injectable()
export class MyLocalStorageService {
  name: string;

  constructor(name: string) {
    this.name = name;
    this.init();
  }


  setReset() {
    if (this.isLocalStorageAvailable()) {
      const data_raw = localStorage.getItem(this.name);
      if (data_raw != null) {
        const ldata = JSON.parse(data_raw);
        ldata.resetFlag = true;
        localStorage.setItem(this.name, JSON.stringify(ldata));
        return true;
      } else {
        console.log('Данные не сохранились');
        this.init();
        return false;
      }
    } else {
      // console.log("Локальные хранилища не поддерживаются данным браузером");
      return false;
    }
  }


  resetStorage() {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem(this.name);
    }
  }

  init() {
    if (this.isLocalStorageAvailable()) {
      const data_raw = localStorage.getItem(this.name);
      if (data_raw != null) { // если какие- то данные есть- мы их используем
        const data = JSON.parse(data_raw);
        if (data.resetFlag) {
          this.resetStorage();
        }
      } else { // если никаких дынных нет, мы их сначала создаем, а потом используем
        const data = {resetFlag: false, list: JSON.stringify({})};
        localStorage.setItem(this.name, JSON.stringify(data));
      }

    } else {
      // console.log("Локальные хранилища не поддерживаются данным браузером");
    }
  }

  isLocalStorageAvailable() {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
      return false;
    }
  }

  setData(key: string, data: any) {
    return new Promise((resolve, reject) => {
      if (this.isLocalStorageAvailable()) {
        const data_raw = localStorage.getItem(this.name);
        if (data_raw != null) {

          const ldata = JSON.parse(data_raw);
          let list = JSON.parse(ldata.list);
          const aaaa = JSON.stringify(data);
          list[key] = aaaa;
          const cccc = JSON.stringify(list);
          ldata.list = cccc;
          const bbbb = JSON.stringify(ldata);
          localStorage.setItem(this.name, bbbb);
          resolve(true);

        } else {
          this.init();
          reject(false);
        }
      } else {
        reject(false);
      }
    });
  }

  getData(key: string) {
    return new Promise((resolve, reject) => {
      if (this.isLocalStorageAvailable()) {
        const data_raw = localStorage.getItem(this.name);
        if (data_raw != null) {
          const ldata = JSON.parse(data_raw);
          const list = JSON.parse(ldata.list);
          if (list.hasOwnProperty(key)) {
            const item = JSON.parse(list[key]);
            resolve(item);
          } else {
            reject(null);
          }
        } else {
          reject(null);
        }
      }
    });

  }


}
