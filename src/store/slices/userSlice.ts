import { HistoryItem } from './../../type/type';
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

type History = {
   email: string
   items: HistoryItem[]
}

type Favorited = {
   email: string
   ids: number[]
}

type InitialState = {
   email: string
   favorites: Favorited[]
   history: History[]
}

const initialState: InitialState = {
   email: '',
   favorites: [],
   history: []
};

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {

      login(state, action) {
         state.email = action.payload;
      },

      logout(state) {
         state.email = '';
      },

      addFavoriteAnime(state, action) {
         if (state.favorites.length === 0) {
            state.favorites.push({
               email: state.email,
               ids: [action.payload.id]
            })
         } else {
            state.favorites.forEach((element, index) => {
               if (element.email === state.email) {
                  state.favorites[index].ids.push(action.payload.id)
               } else if (!state.favorites.some(item => item.email === state.email)) {
                  state.favorites.push({
                     email: state.email,
                     ids: [action.payload.id]
                  })
               }
            });
         }
      },

      removeFavoriteAnime(state, action) {
         state.favorites.forEach(item => {
            if (item.email === state.email) {
               const currentId = item.ids.indexOf(action.payload.id);
               item.ids.splice(currentId, 1);
            }
         })
      },

      addHistory(state, action) {
         if (state.history.length === 0) {
            state.history.push({
               email: state.email,
               items: [{
                  url: action.payload.url,
                  date: action.payload.date,
                  id: uuidv4()
               }]
            })
         } else {
            state.history.forEach((item, index) => {
               if (item.email === state.email) {
                  state.history[index].items.push({
                     url: action.payload.url,
                     date: action.payload.date,
                     id: uuidv4()
                  });

               } else if (!state.history.some(item => item.email === state.email)) {
                  state.history.push({
                     email: state.email,
                     items: [{
                        url: action.payload.url,
                        date: action.payload.date,
                        id: uuidv4()
                     }]
                  })
               }
            });
         }
      },

      removeHistory(state, action) {
         state.history.forEach(history =>
            history.items = history.items.filter(item => !action.payload.includes(item.id)));
      }

   }
})

export const { login, logout, addFavoriteAnime, removeFavoriteAnime, addHistory, removeHistory } = userSlice.actions;