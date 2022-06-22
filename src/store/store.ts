import { movieItemApi } from './api/itemMovieApi';
import { searchApi } from './api/searchApi';
import { filterApi } from './api/filterApi';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { movieApi } from './api/movieApi';
import { genresApi } from './api/genresApi';
import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './slices/userSlice';

import { 
  persistStore, 
  persistReducer,  
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  [movieApi.reducerPath]: movieApi.reducer,
  [genresApi.reducerPath]: genresApi.reducer,
  [filterApi.reducerPath]: filterApi.reducer,
  [searchApi.reducerPath]: searchApi.reducer,
  [movieItemApi.reducerPath]: movieItemApi.reducer
})

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [movieApi.reducerPath, genresApi.reducerPath, filterApi.reducerPath, searchApi.reducerPath, movieItemApi.reducerPath]
}

const persistedReducer = persistReducer(persistConfig,  rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(movieApi.middleware, genresApi.middleware, filterApi.middleware, searchApi.middleware, movieItemApi.middleware)
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
