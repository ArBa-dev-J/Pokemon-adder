import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

function PokemonTable() {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
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
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
     <>
      <div>{error}</div>
      {pokemon.map((pokemon) => (
        <Pokemon pokemon={pokemon} fetchData={fetchData} key={pokemon.id} />
      ))}
    </>
  );
}

export default PokemonTable;
