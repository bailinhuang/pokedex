import React from 'react';
import PropTypes from 'prop-types';

import './PokemonCard.scss';

const PokemonCard = props => {
  const {sprites, name, height, weight} = props.pokemon;
  console.log(props);
  return (
    <div className='pokemon-card'>
      <img src={sprites.front_default} alt={'picture of pokemon' + name}/>
      <div className='card-content'>
        <h1>Name: {name}</h1>
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>
      </div>
    </div>
  );
};

PokemonCard.propTypes = {

};

export default PokemonCard;
