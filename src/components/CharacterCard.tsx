'use client'

import styles from '../styles/CharacterCard.module.css'
import { Character } from '../types/character'
import { addFavorite, removeFavorite, getFavorites } from '../services/favorites'
import { useEffect, useState } from 'react'

interface Props {
  character: Character
}

export const CharacterCard = ({ character }: Props) => {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const checkFavorite = async () => {
      const favs = await getFavorites()
      const exists = favs.find((f) => f.apiId === character.id)
      setIsFavorite(!!exists)
    }

    checkFavorite()
  }, [character.id])

  const handleFavorite = async () => {
  if (isFavorite) {
    await removeFavorite(character.id)
    setIsFavorite(false)
  } else {
    await addFavorite(character)
    setIsFavorite(true)
  }

    window.dispatchEvent(new Event('favoritesUpdated'))
  }

  return (
    <div className={styles.card}>
      <img src={character.image} alt={character.name} />

      <h3>{character.name}</h3>

      <p className={character.status === 'Alive' ? styles.alive : styles.dead}>
        {character.status}
      </p>

      <button className={styles.likeButton} onClick={handleFavorite}>
        {isFavorite ? '💔 Unlike' : '❤️ Like'}
      </button>
    </div>
  )
}