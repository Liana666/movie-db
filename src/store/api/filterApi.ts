import { apiKey } from './../../utils/constants/apiKey';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ItemMovie } from '../../type/type';

type Response = {
   page: number
   results: ItemMovie[]
   total_pages: number
   total_results: number
}

export const filterApi = createApi({
   reducerPath: "filterApi",
   baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/discover/" }),
   endpoints: (build) => ({
      filterMovies: build.query({
         query: ({page, genre, year}) => `movie?api_key=${apiKey}&page=${page}&with_genres=${genre}&year=${year}`,
         transformResponse: (response: Response) => {
            console.log(response)
            return response.results;
         }
      })
   })
})