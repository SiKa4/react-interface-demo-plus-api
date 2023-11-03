import {makeAutoObservable} from 'mobx';

class AppStore {
    private _isMobile = false;

    constructor() {
        makeAutoObservable(this);
    }

    public setIsMobile(isMobile: boolean) {
        this._isMobile = isMobile;
    }

    public get getIsMobile() {
        return this._isMobile;
    }

}

export const appStore = new AppStore();