import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Landing.scss';

export const Landing = props => {
  return (
    <div className="landing-main-container">
      <h1>POKEDEX</h1>
      <h2>A mini-encyclopedia of Pokémon</h2>
      <Link className="" to="/browse/1">
        <Button variant="contained" color="primary">
          Browse
        </Button>
      </Link>
    </div>
  );
};
