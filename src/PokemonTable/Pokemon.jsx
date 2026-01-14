function Pokemon({ pokemon, fetchData }) {
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
    </div>
  );
}

export default Pokemon;
