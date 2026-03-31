"use client";

import styles from "../styles/CharacterCard.module.css";
import { Character } from "../types/character";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../features/favorites/favoritesSlice";
import { RootState } from "../store";

interface Props {
  character: Character;
  onSelect: () => void;
  isSelected: boolean;
}

export const CharacterCard = ({ character, onSelect, isSelected }: Props) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state: RootState) => state.favorites.items);

  const isFavorite = favorites.some((f) => f.id === character.id);

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (isFavorite) {
      dispatch(removeFavorite(character.id));
    } else {
      dispatch(addFavorite(character));
    }
  };

  return (
    <div
      id={`char-${character.id}`}
      className={`${styles.card} ${isSelected ? styles.active : ""}`}
      onClick={onSelect}
    >
      <h3>{character.name.split(" ")[0]}</h3>

      <img src={character.image} alt={character.name} />

      <button className={styles.likeButton} onClick={handleFavorite}>
        {isFavorite ? "💔 Unlike" : "❤️ Like"}
      </button>
    </div>
  );
};
