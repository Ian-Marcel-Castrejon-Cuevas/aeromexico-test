'use client'

import { useEffect, useState } from 'react'
import { getFavorites } from '../services/favorites'
import { Character } from '../types/character'
import styles from '../styles/FavoritesList.module.css'

export const FavoritesList = () => {
  const [favorites, setFavorites] = useState<Character[]>([])
  const [open, setOpen] = useState(false)

  const loadFavorites = async () => {
    const data = await getFavorites()
    setFavorites(data)
  }

  useEffect(() => {
  loadFavorites()

  const handleUpdate = () => {
    loadFavorites()
  }

  window.addEventListener('favoritesUpdated', handleUpdate)

  return () => {
    window.removeEventListener('favoritesUpdated', handleUpdate)
  }
}, [])

  const toggle = () => {
    setOpen(!open)
    if (!open) loadFavorites()
  }

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={toggle}>
        FAVS ({favorites.length})
      </button>

      {open && (
        <div className={styles.dropdown}>
          {favorites.length === 0 ? (
            <p>No favorites</p>
          ) : (
            favorites.map((fav) => (
              <div key={fav.id} className={styles.item}>
                {fav.name}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}