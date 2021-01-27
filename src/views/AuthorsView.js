import PageHeading from '../ComponentsTest/PageHeading/PageHeading';
import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
// import shotId from 'shortid';

export default function AuthorsView() {
  const [pokemons, setPokemons] = useState(null);
  const { url } = useRouteMatch();
  // const pokeId = shotId.generate();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(r => r.json())
      .then(pokemon => setPokemons(pokemon.results));
  }, []);

  return (
    <>
      <PageHeading text="Список имен покемонов" />
      {pokemons &&
        pokemons.map(pokemon => (
          <li>
            <Link to={`${url}/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
    </>
  );
}
