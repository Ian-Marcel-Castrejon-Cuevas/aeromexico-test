"use client";

import { useCharacters } from "../hooks/useCharacters";
import { CharacterCard } from "../components/CharacterCard";
import { FavoritesList } from "../components/FavoritesList";
import { useState, useEffect } from "react";
import { Character } from "../types/character";

export default function Home() {
  const { characters, loading } = useCharacters();

  const [selected, setSelected] = useState<Character | null>(null);

  useEffect(() => {
    if (characters.length > 0) {
      setSelected(characters[0]);
    }
  }, [characters]);

  if (loading) return <p>Loading...</p>;

  return (
    <main className="container">
      <div className="panel">
        <div className="left">
          <div className="imageContainer">
            <div className="status">
              <span
                className={`dot ${
                  selected?.status === "Dead"
                    ? "dead"
                    : selected?.status === "Alive"
                      ? "alive"
                      : ""
                }`}
              ></span>

              {selected?.status === "Alive"
                ? "VIVO"
                : selected?.status === "Dead"
                  ? "MUERTO"
                  : selected?.status}
            </div>

            <img
              src={selected?.image}
              alt={selected?.name}
              className="mainImage"
            />

            <div className="infoOverlay">
              <h2>{selected?.name}</h2>
              <p>{selected?.species}</p>
              <p>{selected?.type || ""}</p>

              <div className="stats">
                <div>
                  <span>Origin</span>
                  <p>{selected?.origin?.name}</p>
                </div>

                <div>
                  <span>Location</span>
                  <p>{selected?.location?.name}</p>
                </div>

                <div>
                  <span>Gender</span>
                  <p>{selected?.gender}</p>
                </div>

                <div>
                  <span>Episodes</span>
                  <p>{selected?.episode?.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="searchContainer">
            <span className="searchIcon"></span>
            <input className="search" placeholder="Find your character..." />
          </div>
          <div className="gridContainer">
            <button
              className="arrow up"
              onClick={() => {
                const el = document.getElementById("grid");
                if (el) el.scrollBy({ top: -200, behavior: "smooth" });
              }}
            />

            <div className="grid" id="grid">
              {characters.map((char) => (
                <CharacterCard
                  key={char.id}
                  character={char}
                  onSelect={() => setSelected(char)}
                  isSelected={selected?.id === char.id}
                />
              ))}
            </div>

            <button
              className="arrow down"
              onClick={() => {
                const el = document.getElementById("grid");
                if (el) el.scrollBy({ top: 200, behavior: "smooth" });
              }}
            />
          </div>
          <FavoritesList onSelect={setSelected} />{" "}
        </div>
      </div>
    </main>
  );
}
