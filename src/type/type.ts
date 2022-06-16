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

export type HistoryItem = {
   url: string
   date: string
   id: string
}

export type AuthForm = {
   btnValue: string
   email: string
   emailError: string
   password: string
   passwordError: string
   formValid: boolean
   passwordActive: boolean
   emailActive: boolean
   handleSubmit: (email: string, password: string) => void
   handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
   handleBlur: (e: React.ChangeEvent<HTMLInputElement>) => void
   handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void
}