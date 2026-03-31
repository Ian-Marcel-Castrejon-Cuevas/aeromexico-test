'use client'

import styles from '../styles/CharacterCard.module.css'
import { Character } from '../types/character'

interface Props {
  character: Character
}

export const CharacterCard = ({ character }: Props) => {
  return (
    <div className={styles.card}>
      <img src={character.image} alt={character.name} />

      <h3>{character.name}</h3>

      <p className={character.status === 'Alive' ? styles.alive : styles.dead}>
        {character.status}
      </p>

      <button className={styles.likeButton}>❤️ Like</button>
    </div>
  )
}