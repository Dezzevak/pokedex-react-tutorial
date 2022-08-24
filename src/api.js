import axios from 'axios';

export const getPokemon = (pokemon) => {
  return axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemon);
};
