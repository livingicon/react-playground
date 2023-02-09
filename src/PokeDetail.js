import React, { useState, useEffect } from 'react';
import './App.css';
import { useParams } from 'react-router-dom';

const Item = () => {
  const [pokeImg, setPokeImg ] = useState({});
  let linkId = useParams();
  let pokemon = linkId.id;
  
  useEffect(() => {
    fetchImage(pokemon);
  }, [pokemon]);

  const fetchImage = async (num) => {

    const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${num}`;
    const data = await fetch(pokemonURL);
    const poke = await data.json();
    setPokeImg(poke.sprites.front_default);
  };
  

  return (
    <div>
      <h1>Item</h1>
      <img src={pokeImg} alt="none" />
    </div>
  );
};

export default Item;