import clsx from "clsx";
import { useEffect, useState } from "react";

export default function PokemonCard({ name, url }) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      });
  }, []);

  return (
    <article
      className={clsx(
        "flex flex-wrap flex-col items-center",
        "border rounded-md p-3",
        "bg-gray-800 shadow-lg hover:shadow-red-700",
        "transition ease-in-out hover:-translate-y-1 cursor-pointer"
      )}
    >
      <img
        src={pokemon.sprites?.other?.dream_world?.front_default}
        alt=""
        className={clsx("max-w-20 bg-slate-500 rounded-md")}
      />
      <h3 className={clsx("mt-2")}>{name.toUpperCase()}</h3>
    </article>
  );
}
