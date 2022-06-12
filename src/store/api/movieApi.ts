import { apiKey } from './../../utils/constants/apiKey';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ItemMovie } from '../../type/type';

type Response = {
   page: number
   results: ItemMovie[]
   total_pages: number
   total_results: number
}

export const movieApi = createApi({
   reducerPath: "movieApi",
   baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
   endpoints: (build) => ({
      getPopularMovie: build.query({
         query: (page: number) => `movie/popular?api_key=${apiKey}&page=${page}`,
         transformResponse: (response: Response) => {
            return response.results;
         }
      })
   })
})