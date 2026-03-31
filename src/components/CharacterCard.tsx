"use client";

import styles from "../styles/CharacterCard.module.css";
import { Character } from "../types/character";
import { useEffect, useState } from "react";
import {
  addFavorite,
  removeFavorite,
  getFavorites,
} from "../services/favorites";

interface Props {
  character: Character;
  onSelect: () => void;
  isSelected: boolean;
}

export const CharacterCard = ({ character, onSelect, isSelected }: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const checkFavorite = async () => {
      const favs = await getFavorites();
      const exists = favs.find((f) => f.apiId === character.id);
      setIsFavorite(!!exists);
    };

    checkFavorite();
  }, [character.id]);

  const handleFavorite = async () => {
    if (isFavorite) {
      await removeFavorite(character.id);
      setIsFavorite(false);
    } else {
      await addFavorite(character);
      setIsFavorite(true);
    }

    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  return (
    <div
      id={`char-${character.id}`}
      className={`${styles.card} ${isSelected ? styles.active : ""}`}
      onClick={onSelect}
    >
      <h3>{character.name.split(" ")[0]}</h3>

      <img src={character.image} alt={character.name} />

      <button
        className={styles.likeButton}
        onClick={(e) => {
          e.stopPropagation();
          handleFavorite();
        }}
      >
        {isFavorite ? "💔 Unlike" : "❤️ Like"}
      </button>
    </div>
  );
};
