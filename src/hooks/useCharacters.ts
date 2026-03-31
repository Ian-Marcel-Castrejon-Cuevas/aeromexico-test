'use client'

import { useEffect, useState } from 'react'
import { Character } from '../types/character'
import { fetchCharacters } from '../services/characters'

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      const data = await fetchCharacters()
      setCharacters(data)
      setLoading(false)
    }

    load()
  }, [])

  return { characters, loading }
}