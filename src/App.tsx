import PokemonList from "./components/pokemonList/PokemonList";
import PokemonDetail from "./components/pokemonDetail/PokemonDetail";
import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", gap: "20px", padding: "20px" }}
    >
      <PokemonList />
      <PokemonDetail />
    </div>
  );
}

export default App;
