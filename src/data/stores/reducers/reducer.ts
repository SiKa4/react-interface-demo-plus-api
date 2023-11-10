import {createReducer} from "@reduxjs/toolkit";
import {setIsMobile, setIsOpenLeftSidebar, setSelectFilial} from "../actions/actions.ts";

export interface AppState {
    isMobile: boolean;
    isOpenLeftSidebar: boolean;
    selectFilial: number | null;
}

const initialState: AppState = {
    isMobile: false,
    isOpenLeftSidebar: true,
    selectFilial: null,
};

const appReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setIsMobile, (state, action) => {
            state.isMobile = action.payload;
        })
        .addCase(setIsOpenLeftSidebar, (state, action) => {
            state.isOpenLeftSidebar = action.payload;
        })
        .addCase(setSelectFilial, (state, action) => {
            state.selectFilial = action.payload;
        });
});

export default appReducer;