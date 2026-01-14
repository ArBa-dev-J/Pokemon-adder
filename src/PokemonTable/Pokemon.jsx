function Pokemon({ pokemon, fetchData }) {
  
  //GET POKEOM BY ID  ADD HP
  const updateData = async (id) => {
    const response = await fetch("http://localhost:3000/pokemon/" + id);
    try{
    if (!response.ok) {
      throw new Error("Getting one pokemon was not successful");
    }
    const pokemon = await response.json();
  
    // UPDATE POKEMON HEALTH POINTS

    const requestOptions = {
      method: "PATCH",
      header: {"Content-type": "application/json"},
      body: JSON.stringify({hp: pokemon.hp + 10}),
    };

    const response2 = await fetch(
      "http://localhost:3000/pokemon/" + id,
      requestOptions
    );
     if (!response2.ok) {
      throw new Error("Patch was not successful");
    }
    fetchData();
  } catch (error){
    alert(error.message);
  }
  };

  // DELETE
  const deleteData = async (id) => {
    try {
      const requestOptions = {
        method: "DELETE",
      };

      const response = await fetch(
        "http://localhost:3000/pokemon/" + id,
        requestOptions
      );
      if (response.ok) {
        alert("data deleted");
        fetchData();
      } else {
        throw new Error("Error");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  // ---------------------

  return (
    <div id="card" className="flex flex-col border p-30 mt-9 ">
      <img src={pokemon.img} alt={pokemon.name} />
      <div className="text-center">
        <p>{pokemon.name}</p>
        <p>{pokemon.hp}</p>
      </div>
      <button
        onClick={() => deleteData(pokemon.id)}
        className="bg-emerald-300 p-2"
      >
        Delete
      </button>
      <button
        type="button"
        onClick={() => updateData(pokemon.id)}
        className="bg-emerald-300 p-2 relative top-1.5"
      >
        +10 Health points
      </button>
    </div>
  );
}

export default Pokemon;
