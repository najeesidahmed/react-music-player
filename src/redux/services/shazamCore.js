import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi', 
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '14e3f32fa9msh40d0614f463c2aap14ec22jsn0f0beb037227');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
    }),
});

export const{
    useGetTopChartsQuery,
} = shazamCoreApi;