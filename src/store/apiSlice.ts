import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ICatsData, ICatsRequestModel} from "../interface/Cats";

const BASE_API_URL = "https://api.thecatapi.com/v1"


export const catsApi = createApi({
    reducerPath: 'apiCats',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL,}),
    endpoints: (builder) => ({
        getCats: builder.query<ICatsData[], ICatsRequestModel >({
            query: ({limit = 10, page = 1, categoryId=1}) =>
                `images/search?limit=${limit}&page=${page}&category_ids=${categoryId}`,
        }),
        getCategories: builder.query({
            query: () =>
                `categories`,
        }),
    }),
})


export const { useGetCategoriesQuery, useGetCatsQuery} = catsApi;