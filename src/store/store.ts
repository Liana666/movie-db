import { movieItemApi } from './api/itemMovieApi';
import { searchApi } from './api/searchApi';
import { filterApi } from './api/filterApi';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { movieApi } from './api/movieApi';
import { genresApi } from './api/genresApi';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  counter: counterReducer,
  [movieApi.reducerPath]: movieApi.reducer,
  [genresApi.reducerPath]: genresApi.reducer,
  [filterApi.reducerPath]: filterApi.reducer,
  [searchApi.reducerPath]: searchApi.reducer,
  [movieItemApi.reducerPath]: movieItemApi.reducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware, genresApi.middleware, filterApi.middleware, searchApi.middleware, movieItemApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
