import React from "react";
import { useGetPokemonsQuery } from "../../features/pokemon/pokemonApi";
import { useDispatch } from "react-redux";
import { selectPokemon } from "../../features/pokemon/pokemonSlice";
import { startCase } from "lodash";
import "./style.css";

const GIF_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown";

const PokemonList: React.FC = () => {
  const { data, error, isLoading } = useGetPokemonsQuery();
  const dispatch = useDispatch();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading Pokemon list.</p>;

  return (
    <div className="pokemon-list">
      <h2 className="main-title">PokeReact</h2>
      <ul>
        {data?.results.map((pokemon: any) => (
          <li
            key={pokemon.name}
            onClick={() => dispatch(selectPokemon(pokemon))}
          >
            <img
              className="pokemon-icon"
              src={`${GIF_URL}/${pokemon.url.split("/")[6]}.gif`}
              alt={pokemon.name}
            />
            <p>{startCase(pokemon.name)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
