import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { Link, useParams, useHistory } from 'react-router-dom';
import { NavBar } from '../AppBar/NavBar';
import './BrowsePokemon.scss';
import { getPokemonByID, getTotalPokemon } from '../../services/pokeapi';
import PokemonCard from '../PokemonCard/PokemonCard';
import { getData } from '../../services/api';

export const BrowsePokemon = props => {

  const [pokemonId, setPokemonId] = useState('');
  const [pokemon, setPokemon] = useState();
  const [pokemonList, setPokemonList] = useState();
  const [pokemonMap, setPokemonMap] = useState();
  const {id} = useParams();
  let history = useHistory();

  const setPokemonInformation = () => {
    getTotalPokemon().then(res =>{ 
      const list = {};
      const map = res.results.reduce((pokeMap, obj, index) => {
        obj.position = index;
        pokeMap[obj.name] = obj;
        list[index] = obj;
        return pokeMap;
      });
      setPokemonMap(map);
      setPokemonList(list);
    });
  };

  useEffect(() => {
    if (!pokemonList || !pokemonMap) {
      setPokemonInformation();
    }

  }, [history, id, pokemonId, pokemonList, pokemonMap]);

  useEffect(() => {
    if(id && id !== pokemonId){
      setPokemonId(id);
      getPokemonByID(id).then(res => setPokemon(res));
    }

  }, [history, id, pokemonId, pokemonList, pokemonMap]);
  
  return (
      <>      
        <div className="">
          <NavBar />
        </div>
        <div className="browse-main-container">
          <div className="browse-container">
            <Button variant="contained" color="primary">
              <span>Anterior</span>
            </Button>
            {pokemon && <PokemonCard pokemon={pokemon}/>}
            <Button variant="contained" color="primary">
              <span>Siguiente</span>
            </Button>
          </div>
        </div> 
      </>
  );
};
