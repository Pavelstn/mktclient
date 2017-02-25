/**
 * Created by pavel on 25.02.17.
 */
export class LocalStorage {
    name: string;

    constructor(name: string) {
        this.name = name;
        this.init();
    }


    setReset() {
        if (this.isLocalStorageAvailable()) {
            let data_raw = localStorage.getItem(this.name);
            if (data_raw != null) {
                let ldata = JSON.parse(data_raw);
                ldata.resetFlag = true;
                localStorage.setItem(this.name, JSON.stringify(ldata));
                return true;
            } else {
                console.log("Данные не сохранились");
                this.init();
                return false;
            }
        } else {
            console.log("Локальные хранилища не поддерживаются данным браузером");
            return false;
        }
    };


    resetStorage() {
        if (this.isLocalStorageAvailable()) {
            localStorage.removeItem(this.name);
        }
    };

    init() {
        if (this.isLocalStorageAvailable()) {
            //  try{
            let data_raw = localStorage.getItem(this.name);
            if (data_raw != null) { //если какие- то данные есть- мы их используем
                //console.log("если какие- то данные есть- мы их используем");
                let data = JSON.parse(data_raw);
                /*var list= JSON.parse(data.list);
                 console.log("list",list);*/

                if (data.resetFlag) {
                    this.resetStorage();
                }
            } else { // если никаких дынных нет, мы их сначала создаем, а потом используем
                //console.log("если никаких данных нет, мы их сначала создаем, а потом используем");
                let data = {resetFlag: false, list: JSON.stringify({})};
                // var data = {resetFlag: false, list: []};
                localStorage.setItem(this.name, JSON.stringify(data));
            }

        } else {
            console.log("Локальные хранилища не поддерживаются данным браузером");
        }
    };

    isLocalStorageAvailable() {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            return false;
        }
    };

    setData(key: string, data: any) {
        if (this.isLocalStorageAvailable()) {
            var data_raw = localStorage.getItem(this.name);
            if (data_raw != null) {
                var ldata = JSON.parse(data_raw);
                var list = JSON.parse(ldata.list);
                // var list = ldata.list;
                var aaaa = JSON.stringify(data);
                //list.push(aaaa);
                list[key] = aaaa;
                var cccc = JSON.stringify(list);
                ldata.list = cccc;
                var bbbb = JSON.stringify(ldata);
                localStorage.setItem(this.name, bbbb);
                return true;
            } else {
                // console.log("Данные не сохранились");
                this.init();
                return false;
            }
        } else {
            console.log("Локальные хранилища не поддерживаются данным браузером");
            return false;
        }
    };

    getData(key: string) {
        if (this.isLocalStorageAvailable()) {
            let data_raw = localStorage.getItem(this.name);
            // console.log("data_raw", data_raw);
            if (data_raw != null) {
                let ldata = JSON.parse(data_raw);
                let list = JSON.parse(ldata.list);
                if (list.hasOwnProperty(key)) {
                    let item = JSON.parse(list[key]);
                    return item;
                } else {
                    return null;
                }

            } else {
                console.log("Данные не сохранились");
                this.init();
                return null;
            }
        } else {
            console.log("Локальные хранилища не поддерживаются данным браузером");
            return null;
        }
    };


}
