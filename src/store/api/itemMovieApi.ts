import { DetailsMovie } from './../../type/type';
import { apiKey } from './../../utils/constants/apiKey';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const movieItemApi = createApi({
   reducerPath: "movieItemApi",
   baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/movie/" }),
   endpoints: (build) => ({
      getMovie: build.query({
         query: (id: number | string) => `${id}?api_key=${apiKey}`,
         transformResponse: (response: DetailsMovie) => {
            return response;
         }
      })
   })
})