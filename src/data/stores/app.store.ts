import {configureStore} from '@reduxjs/toolkit'
import {api} from "../../api_request/api-request.ts";
import appReducer from "./reducers/reducer.ts";

export const AppStoreRedux = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        store: appReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof AppStoreRedux.getState>;