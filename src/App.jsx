import clsx from "clsx";
import { useState } from "react";
import { useEffect } from "react";
import PokemonCard from "./components/PokemonCard";

const imgPokemon =
  "https://1000marcas.net/wp-content/uploads/2020/01/Logo-Pokemon.png";

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemonList(data.results);
      });
  }, []);

  return (
    <main className={clsx("bg-black min-h-screen text-white")}>
      <img src={imgPokemon} alt="" className="w-52 mx-auto" />
      <section
        className={clsx(
          "border border-blue-500",
          "p-2",
          "flex flex-wrap gap-3"
        )}
      >
        {pokemonList.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.url}
              name={pokemon.name}
              url={pokemon.url}
            />
          );
        })}
      </section>
    </main>
  );
}
