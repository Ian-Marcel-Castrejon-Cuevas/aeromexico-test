'use client'

import { useCharacters } from '../hooks/useCharacters'
import { CharacterCard } from '../components/CharacterCard'

export default function Home() {
  const { characters, loading } = useCharacters()

  if (loading) return <p>Loading...</p>

  return (
    <main style={{ padding: 20 }}>
      <h1>Characters</h1>

      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </main>
  )
}