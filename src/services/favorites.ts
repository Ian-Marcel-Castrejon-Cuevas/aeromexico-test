import { Character } from '../types/character'

const BASE_URL = 'http://localhost:3001/favorites'

export const getFavorites = async (): Promise<Character[]> => {
  const res = await fetch(BASE_URL)
  return res.json()
}

export const addFavorite = async (character: Character) => {
  const existing = await getFavorites()

  const exists = existing.find((f) => f.apiId === character.id)

  if (exists) return

  await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...character,
      apiId: character.id, // 🔥 clave
    }),
  })
}

export const removeFavorite = async (apiId: number) => {
  const existing = await getFavorites()

  const item = existing.find((f) => f.apiId === apiId)

  if (!item) return

  await fetch(`${BASE_URL}/${item.id}`, {
    method: 'DELETE',
  })
}