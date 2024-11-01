import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useGetPokemonByNameQuery } from "../../features/pokemon/pokemonApi";
import "./style.css";

const PokemonDetail: React.FC = () => {
  const selectedPokemon = useSelector(
    (state: RootState) => state.pokemon.selectedPokemon
  );

  const { data, error, isLoading } = useGetPokemonByNameQuery(
    selectedPokemon?.name || "",
    { skip: !selectedPokemon }
  );

  if (isLoading) return <p>Loading details...</p>;
  if (error) return <p>Error loading Pokemon details.</p>;

  return (
    <div className="pokemon-details">
      {selectedPokemon ? (
        <>
          <h2 className="main-title">{data?.name}</h2>
          <div className="pokemon-image-wrapper">
            <img
              className="pokemon-image"
              src={data?.sprites.front_default}
              alt={data?.name}
            />
          </div>
          <div className="details">
            <p>
              <strong>Name:</strong> {data?.name}
            </p>
            <p>
              <strong>Height:</strong> {data?.height} cm
            </p>
            <p>
              <strong>Weight:</strong> {data?.weight} kg
            </p>
            <p>
              <strong>Types:</strong>
              {data?.types?.map(({ type }) => type.name).join(", ")}
            </p>
          </div>
        </>
      ) : (
        <p>Select a Pokemon to see details.</p>
      )}
    </div>
  );
};

export default PokemonDetail;
