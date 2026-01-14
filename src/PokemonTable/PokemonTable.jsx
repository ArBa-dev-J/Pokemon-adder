import { useEffect, useState } from "react";

function PokemonTable() {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:3000/pokemon");

        if (!response.ok) {
          throw new Error(`Error! Response status: ${response.status}`);
        }

        const results = await response.json();
        setPokemon(results);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, []);

  return (
    <>
      <div>{error}</div>
      {pokemon.map((pokemon) => (
        <div
          id="card"
          key={pokemon.id}
          className="flex flex-col border p-30 mt-9 "
        >
          <img src={pokemon.img} alt={pokemon.name} />
          <div className="text-center">
            <p>{pokemon.name}</p>
            <p>{pokemon.hp}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default PokemonTable;
