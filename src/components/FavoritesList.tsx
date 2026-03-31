"use client";

import { useEffect, useState } from "react";
import { getFavorites } from "../services/favorites";
import { Character } from "../types/character";
import styles from "../styles/FavoritesList.module.css";

type Props = {
  onSelect: (character: Character) => void;
};

export const FavoritesList = ({ onSelect }: Props) => {
  const [favorites, setFavorites] = useState<Character[]>([]);
  const [open, setOpen] = useState(false);

  const loadFavorites = async () => {
    const data = await getFavorites();
    setFavorites(data);
  };

  useEffect(() => {
    loadFavorites();

    const handleUpdate = () => {
      loadFavorites();
    };

    window.addEventListener("favoritesUpdated", handleUpdate);

    return () => {
      window.removeEventListener("favoritesUpdated", handleUpdate);
    };
  }, []);

  const toggle = () => {
    setOpen(!open);
    if (!open) loadFavorites();
  };

  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${open ? styles.active : ""}`}
        onClick={toggle}
      >
        FAVS
      </button>

      {open && (
        <div className={styles.dropdown}>
          {favorites.length === 0 ? (
            <p className="noResults">No favorites</p>
          ) : (
            favorites.map((fav) => (
              <div
                key={fav.id}
                className={styles.item}
                onClick={() => {
                  const characterToSelect = {
                    ...fav,
                    id: fav.apiId,
                  };

                  onSelect(characterToSelect);
                  setOpen(false);

                  const item = document.getElementById(`char-${fav.apiId}`);
                  item?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              >
                {fav.name}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};
