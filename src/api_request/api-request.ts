import axios from "axios";
import {BodyData, BodyParams} from "../data/Types.ts";


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://testjob.checkport.ru/' }),
    endpoints: (builder) => ({
        getValue: builder.query({
            query: (value) => value,
        }),
    }),
})

export const { useGetValueQuery } = api

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})


class ApiRequest {
    mainUrl = "https://testjob.checkport.ru/";

    public GetAllFilial() {
        return axios.get(this.mainUrl + 'filial/')
            .then(response => {
                const data = response.data;
                return data as {
                    id: number,
                    name: string
                }[]
            })
            .catch(() => {
                return null;
            });
    }

    public GetInfoAboutFilialById(id: number, params: BodyParams) {
        return axios.get(this.mainUrl + `filial/${id}/menu/`, {params})
            .then(response => {
                const data = response.data;
                return data as BodyData;
            })
            .catch(() => {
                return null;
            });
    }
}

export const apiRequest = new ApiRequest();
