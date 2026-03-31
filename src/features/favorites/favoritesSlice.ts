import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Character {
  id: number
  name: string
  image: string
  status: string
}

interface FavoritesState {
  items: Character[]
}

const initialState: FavoritesState = {
  items: [],
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Character>) => {
      const exists = state.items.find(i => i.id === action.payload.id)
      if (!exists) {
        state.items.push(action.payload)
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(i => i.id !== action.payload)
    },
  },
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer