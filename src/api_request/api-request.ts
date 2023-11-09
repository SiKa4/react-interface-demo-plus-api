import {BodyData, BodyParams} from "../data/Types.ts";


import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const mainUrl = "https://testjob.checkport.ru/";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: mainUrl}),
    endpoints: (builder) => ({
        getAllFilial: builder.query<{
            id: number,
            name: string
        }[], void>({
            query: () => ({
                url: 'filial/',
                method: 'GET',
            }),
        }),
        getInfoAboutFilialById: builder.query<
            BodyData,
            { idFilial: number | null, args: BodyParams }>
        ({
            query: ({idFilial, args}) => {
                return {
                    url: `filial/${idFilial}/menu/`,
                    method: 'GET',
                    params: args,
                };
            },
        }),
    }),
});

export const {useGetAllFilialQuery, useGetInfoAboutFilialByIdQuery} = api;
