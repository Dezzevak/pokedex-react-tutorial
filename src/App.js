import React, { useState, useEffect, useMemo } from 'react';
import './style.css';
import { getPokemon } from './api';
import { Pokedex } from './pokedex';

export default function App() {
  let [pokemon, setPokemon] = useState(null);
  let [exists, setExists] = useState(false);

  useEffect(() => {}, [pokemon]);

  const onChangeHandler = (e) => {
    if (e.target.value == '') return;
    getPokemon(e.target.value).then((response) => {
      setPokemon(response.data);
      setExists(true);
    });
  };

  return (
    <>
      <input onChange={onChangeHandler} />
      <div>
        <div>
          {pokemon == null && 'No pokemon searched'}
          {pokemon != null && exists && (
            <Pokedex
              sprite={pokemon.sprites.front_default}
              name={pokemon.species.name}
              description={pokemon.types[0].type.name}
            />
          )}
        </div>
      </div>
    </>
  );
}
