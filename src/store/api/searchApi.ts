import { apiKey } from './../../utils/constants/apiKey';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ItemMovie } from '../../type/type';

type Response = {
   page: number
   results: ItemMovie[]
   total_pages: number
   total_results: number
}

export const searchApi = createApi({
   reducerPath: "searchApi",
   baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/search/" }),
   endpoints: (build) => ({
      searchMovies: build.query({
         query: ({ page, title }) => `movie?api_key=${apiKey}&page=${page}&query=${title}`,
         transformResponse: (response: Response) => {
            return response.results;
         }
      })
   })
})