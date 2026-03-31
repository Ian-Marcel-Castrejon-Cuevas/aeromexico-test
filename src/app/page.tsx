"use client";

import { useCharacters } from "../hooks/useCharacters";
import { CharacterCard } from "../components/CharacterCard";
import { FavoritesList } from "../components/FavoritesList";

export default function Home() {
  const { characters, loading } = useCharacters();

  if (loading) return <p>Loading...</p>;

  return (
    <main className="container">
      <div className="panel">
        <div className="left">
          <img
            src={characters[0]?.image}
            alt="selected"
            className="mainImage"
          />
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
                <CharacterCard key={char.id} character={char} />
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

              <FavoritesList />

        </div>
      </div>
    </main>
  );
}
