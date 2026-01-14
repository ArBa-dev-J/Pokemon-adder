import Form from "./Form/Form"
import SearchBar from "./SearchBar/SearchBar";
import PokemonTable from "./PokemonTable/PokemonTable";


function App() {
    return (
        <>
            <main>
                <Form />
                <SearchBar />
                <section className="flex flex-wrap justify-between ">
                <PokemonTable />
                </section>
            </main>
        </>
    );

}

export default App
