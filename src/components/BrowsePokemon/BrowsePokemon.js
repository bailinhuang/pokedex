import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { useParams, useHistory } from 'react-router-dom';
import { NavBar } from '../AppBar/NavBar';

import { getPokemonByID, getTotalPokemon } from '../../services/pokeapi';
import PokemonCard from '../PokemonCard/PokemonCard';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './BrowsePokemon.scss';

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
    if(typeof(pokemonId) === 'number') console.log(pokemonId);
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

  const changePokemonByName = name => {
    name = name.trim();
    if(name){
      history.push('/browse/' + name);
    } else{
      history.push('/404');
    }
  };

  useEffect(() => {
    if (!pokemonList || !pokemonMap) {
      setPokemonInformation();
    }
  }, [history, pokemonList, pokemonMap]);

  useEffect(() => {
    if(id && id !== pokemonId){
      getPokemonByID(id).then(res => {
        if(res){
          console.log(res);
          setPokemonId(res.name);
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
          <NavBar changePokemon={changePokemonByName} pokemonList={pokemonList}/>
        </div>
        <div className="browse-main-container">
          <div className="browse-container">
            {pokemonMap ?             <div>
              <Button variant="contained" color="primary" onClick={() => changePokemon(-1)}>
                <NavigateBeforeIcon/>
              </Button>
              <Button variant="contained" color="primary" onClick={() => changePokemon(1)}>
                <NavigateNextIcon/>
              </Button>
            </div> : <p>Loading...</p>}
            {pokemon && <PokemonCard pokemon={pokemon}/>}
          </div>
        </div> 
      </>
  );
};
