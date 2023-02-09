import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [pokemons, setPokemons ] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      setPokemons(await fetchItems())
    }
    getPokemon();
  }, []);
  
  const fetchItems = async () => {
    const pokemons = [];
    for (let i = 1; i <= 10; i++) {
      const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const data = await fetch(pokemonURL);
      const pokes = await data.json();
      console.log(pokes);
      const id = pokes.id;
      const name = pokes.name;
      const image = pokes.sprites.front_default;
      pokemons.push({id, name, image});
    }
    console.log(pokemons);
    return pokemons;
  };

  return (
    <div>
      {pokemons.map(poke => (
        <h1 key="poke.id">
          <Link to={`/shop/${poke.id}`}>{poke.name}</Link>
        </h1>
      ))}
    </div>
  );
};

export default Shop;