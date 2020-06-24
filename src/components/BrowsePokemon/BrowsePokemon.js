import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { useParams, useHistory } from 'react-router-dom';
import { NavBar } from '../AppBar/NavBar';
import './BrowsePokemon.scss';
import { getPokemonByID, getTotalPokemon } from '../../services/pokeapi';
import PokemonCard from '../PokemonCard/PokemonCard';

export const BrowsePokemon = props => {

  const [pokemonId, setPokemonId] = useState('');
  const [pokemon, setPokemon] = useState();
  const [pokemonList, setPokemonList] = useState();
  const [pokemonMap, setPokemonMap] = useState();
  const {id} = useParams();
  let history = useHistory();

  const setPokemonInformation = () => {
    getTotalPokemon().then(res =>{ 
      const map = new Map();
      const list = res.results.map((obj, index) => {
        if(obj){
          obj.position = index;
          map.set(obj.name, obj);
        }
        return obj;
      });
      setPokemonMap(map);
      setPokemonList(list);
    });
  };

  const changePokemon = (num) => {
    const pokemon = pokemonMap.get(pokemonId);
    let position = pokemon.position;
    position += num;
    if(position > pokemonMap.size - 1){
      position = 0;
    } else if(position < 0){
      position = pokemonMap.size - 1;
    }
    history.push('/browse/' + pokemonList[position].name);
  };

  useEffect(() => {
    if (!pokemonList || !pokemonMap) {
      setPokemonInformation();
    }

  }, [history, id, pokemonId, pokemonList, pokemonMap]);

  useEffect(() => {
    if(id && id !== pokemonId){
      setPokemonId(id);
      getPokemonByID(id).then(res => {
        if(res){
          setPokemon(res);
        } else{
          history.push('/404');
        }
      });
    }

  }, [history, id, pokemonId, pokemonList, pokemonMap]);
  
  return (
      <>      
        <div className="">
          <NavBar />
        </div>
        <div className="browse-main-container">
          <div className="browse-container">
            <div>
              <Button variant="contained" color="primary" onClick={() => changePokemon(-1)}>
                <span>Anterior</span>
              </Button>
              <Button variant="contained" color="primary" onClick={() => changePokemon(1)}>
                <span>Siguiente</span>
              </Button>
            </div>
            {pokemon && <PokemonCard pokemon={pokemon}/>}

          </div>
        </div> 
      </>
  );
};
