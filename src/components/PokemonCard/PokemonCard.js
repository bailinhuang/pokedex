import React from 'react';

import './PokemonCard.scss';
import question_img from '../../assets/question.jpg';

const PokemonCard = props => {
  const {sprites, name, height, weight} = props.pokemon;
  let default_img = question_img;
  if(sprites.front_default){
    default_img = sprites.front_default;
  } 
  return (
    <div className='pokemon-card'>
      <div className='card-content'>
        <img src={default_img} alt={'Pokemon image of ' + name}></img>
        <div className="pokemon-information-container">
          <h1>Name: {name}</h1>
          <p>Height: {height}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
