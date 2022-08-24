import React from 'react';
import './pokedex.css';
export const Pokedex = ({ sprite, name, description }) => (
  <div>
    <div className="pokedex">
      <div className="pokemon-avatar">
        <img src={sprite} />
      </div>
      <div className="pokemon-name">{name}</div>
      <div className="pokemon-info">{description}</div>
    </div>
  </div>
);
