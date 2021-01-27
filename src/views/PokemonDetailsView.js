import PageHeading from '../ComponentsTest/PageHeading/PageHeading';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function PokemonDetailsView() {
  const [pokemon, setPokemon] = useState(null);
  const { pokemonName } = useParams();
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(r => r.json())
      .then(setPokemon);
  }, [pokemonName]);
  console.log(pokemon);
  return (
    <div>
      <PageHeading text={`${pokemonName}`} />
      {pokemon && (
        <>
          <p>{pokemon.species.name}</p>
          <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt="qwe"
            width="350"
          ></img>
        </>
      )}
    </div>
  );
}
