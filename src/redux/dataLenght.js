import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({baseUrl: '/file/slider.json'}),
    endpoints : (builder) => ({
        getProductApiTitle: builder.query({
            query: () => ""
        })
    })
})

export const {useGetProductApiTitleQuery} = productApi