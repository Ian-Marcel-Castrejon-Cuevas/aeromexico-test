"use client";

import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Character } from "../types/character";
import styles from "../styles/FavoritesList.module.css";
import { useState } from "react";

type Props = {
  onSelect: (character: Character) => void;
};

export const FavoritesList = ({ onSelect }: Props) => {
  const favorites = useSelector((state: RootState) => state.favorites.items);

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${open ? styles.active : ""}`}
        onClick={() => setOpen(!open)}
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
                  onSelect(fav);
                  setOpen(false);

                  const item = document.getElementById(`char-${fav.id}`);
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
