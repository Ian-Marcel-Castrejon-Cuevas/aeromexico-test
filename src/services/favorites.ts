import { Character } from '../types/character'

const BASE_URL = 'http://localhost:3001/favorites'

export const getFavorites = async (): Promise<Character[]> => {
  const res = await fetch(BASE_URL)
  return res.json()
}

export const addFavorite = async (character: Character) => {
  await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(character),
  })
}

// eliminar favorito
export const removeFavorite = async (id: number) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  })
}