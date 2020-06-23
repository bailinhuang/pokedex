const { POKEMON } = require('../resources/API_RESOURCE');
const { getData } = require('./api');

export const getPokemonByID = (id) => {
  return getData(POKEMON + '/' + id);
};

export const getTotalPokemon = () => {
  return getData(POKEMON + '?limit=1000');
};