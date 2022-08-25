import axios from 'axios';
import {React, useState, useEffect} from 'react';
import PokemonList from './PokemonList';

const baseURL = "https://pokeapi.co/api/v2/";



const PokemonProvider = () => {
    const [pokemon, setPokemon] = useState([]);
    
    const getPokemons = async () => {
        await axios.get(`${baseURL}pokemon?limit=15'`).then((response) => {
            setPokemon(response.data.results.map((p => p.name)))
        })
    }
    
   useEffect(() => {
        getPokemons()
   }, [])
    
    return (
        <div>
            <PokemonList pokemon={pokemon} />
        </div>
    )
    
    
}

export default PokemonProvider;