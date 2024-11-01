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
      <h2 className="title">
        {data?.name ?? "Select a Pokémon to see details."}
      </h2>
      {selectedPokemon && (
        <>
          <div className="pokemon-image-container">
            <img
              className="pokemon-image"
              src={data?.sprites.front_default}
              alt={data?.name}
            />
          </div>
          <div className="pokemon-details-content">
            <div className="detail-row">
              <span className="detail-label">Name:</span> {data?.name}
            </div>
            <div className="detail-row">
              <span className="detail-label">Height:</span> {data?.height} cm
            </div>
            <div className="detail-row">
              <span className="detail-label">Weight:</span> {data?.weight} kg
            </div>
            <div className="detail-row">
              <span className="detail-label">Types:</span>
              {data?.types?.map(({ type }) => type.name).join(", ")}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PokemonDetail;
