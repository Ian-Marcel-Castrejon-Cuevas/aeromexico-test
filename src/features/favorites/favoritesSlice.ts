import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
}

interface FavoritesState {
  items: Character[];
}

// 🔥 cargar desde localStorage
const loadFromLocalStorage = (): Character[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem("favorites");
  return data ? JSON.parse(data) : [];
};

const initialState: FavoritesState = {
  items: loadFromLocalStorage(),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Character>) => {
      const exists = state.items.find((i) => i.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.items));
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
