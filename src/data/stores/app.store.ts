import {makeAutoObservable} from 'mobx';

class AppStore {
    private _isMobile = false;
    private _isOpenLeftSidebar = true;

    constructor() {
        makeAutoObservable(this);
    }

    public setIsMobile(isMobile: boolean) {
        this._isMobile = isMobile;
    }

    public get getIsMobile() {
        return this._isMobile;
    }

    public setIsOpenLeftSidebar(isOpen: boolean) {
        this._isOpenLeftSidebar = isOpen;
    }

    public get isOpenLeftSidebar() {
        return this._isOpenLeftSidebar;
    }
}

export const appStore = new AppStore();