"use client";

import styles from "../styles/CharacterCard.module.css";
import { Character } from "../types/character";

interface Props {
  character: Character;
  onSelect: () => void;
  isSelected: boolean;
}

export const CharacterCard = ({ character, onSelect, isSelected }: Props) => {
  return (
    <div
      className={`${styles.card} ${isSelected ? styles.active : ""}`}
      onClick={onSelect}
    >
      <img src={character.image} alt={character.name} />

      <h3>{character.name}</h3>

      <button className={styles.likeButton}>❤️ Like</button>
    </div>
  );
};
