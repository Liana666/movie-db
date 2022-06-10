import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const key = 'api_key=d495d35d47c329b48d81d83ed0f10265';
const lang = '&language=ru-RU';
const region = '&region=RU';

export const movieApi = createApi({
   reducerPath: "movieApi",
   baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
   endpoints: (build) => ({
      getPopularMovie: build.query({
         query: (page: number) => `movie/popular?${key}&page=${page}${lang}${region}`,
         transformResponse: (response: any) => {
            console.log(response)
            return response.results;
         }
      })
   })
})