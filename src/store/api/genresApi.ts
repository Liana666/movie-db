import { apiKey } from './../../utils/constants/apiKey';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const genresApi = createApi({
   reducerPath: "genresApi",
   baseQuery: fetchBaseQuery({ baseUrl: `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}` }),
   endpoints: (build) => ({
      getGenres: build.query({
         query: () => '',
         transformResponse: (response: any) => {
            return response.genres;
         }
      })
   })
})