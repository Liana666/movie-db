export type ItemMovie = {
   adult?: boolean
   id: number
   backdrop_path?: string
   genre_ids: number[]
   original_language?: string
   original_title: string
   overview: string
   popularity?: number
   poster_path: string
   release_date: string
   title: string
   video?: boolean
   vote_average?: number
   vote_count?: number
}

export type ItemGenres = {
   name: string
   id: number
}