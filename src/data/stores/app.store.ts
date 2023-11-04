import {makeAutoObservable} from 'mobx';

class AppStore {
    private _isMobile = false;
    private _isOpenLeftSidebar = true;
    private _selectFilial : number | null = null;

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

    public setSelectFilial(id: number) {
        this._selectFilial = id;
    }

    public get getSelectFilial() {
        return this._selectFilial;
    }
}

export const appStore = new AppStore();