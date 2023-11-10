import {createAction} from "@reduxjs/toolkit";

export const setIsMobile = createAction<boolean>('setIsMobile');
export const setIsOpenLeftSidebar = createAction<boolean>('setIsOpenLeftSidebar');
export const setSelectFilial = createAction<number | null>('setSelectFilial');