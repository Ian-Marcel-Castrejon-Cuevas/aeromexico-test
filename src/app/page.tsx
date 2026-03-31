'use client'

import { useCharacters } from '../hooks/useCharacters'

export default function Home() {
  const { characters, loading } = useCharacters()

  if (loading) return <p>Loading...</p>

  return (
    <main style={{ padding: 20 }}>
      <h1>Characters</h1>

      {characters.map((char) => (
        <div key={char.id}>
          <p>{char.name}</p>
        </div>
      ))}
    </main>
  )
}