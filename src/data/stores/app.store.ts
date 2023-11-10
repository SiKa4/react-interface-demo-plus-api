import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {api} from "../../api_request/api-request.ts";
import appReducer from "./reducers/reducer.ts";

const reducers = combineReducers({
    [api.reducerPath]: api.reducer,
    store: appReducer
});

export const AppStoreRedux = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof AppStoreRedux.getState>;