import { getCharacters } from 'rickmortyapi'
import { Character } from '../types/character'

export const fetchCharacters = async (): Promise<Character[]> => {
  try {
    const response = await getCharacters({ page: 1 })

    if (response?.data?.results) {
      return response.data.results.map((char: any) => ({
        id: char.id,
        name: char.name,
        status: char.status,
        image: char.image,
      }))
    }
  } catch (error) {
    console.warn('rickmortyapi failed')
  }

  const res = await fetch('https://rickandmortyapi.com/api/character')
  const data = await res.json()

  return data.results.map((char: any) => ({
    id: char.id,
    name: char.name,
    status: char.status,
    species: char.species,
    type: char.type,
    gender: char.gender,
    origin: char.origin,
    location: char.location,
    image: char.image,
    episode: char.episode,
  }))
}