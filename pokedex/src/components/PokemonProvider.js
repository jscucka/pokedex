import {React, useEffect, useState} from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import SearchBar from "./SearchBar";

const PokemonProvider = () => {
  const [find, setFind] = useState('zacian');
  const [image, setImage] = useState('');
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonTypes, setPokemonTypes] = useState([])
  const [pokemonId, setPokemonId] = useState('')
  const [pokemonFlavor, setPokemonFlavor] = useState('');
  const [strongAgainst, setStrongAgainst] = useState([]);
  const [weakAgainst, setWeakAgainst] = useState([]);
  const getData = async () => {
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${find.toLowerCase()}`);
      let types = [];
      res.data.types.forEach(type => types.push(type.type.name));
      setImage(res.data.sprites.front_default);
      setPokemonName(res.data.name);
      setPokemonTypes(types)
      setPokemonId(res.data.id);  
      getDetail();
      getStrongAgainst(types);
      getWeakAgainst(types);
  }
const getDetail = async () => {
  let res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${find.toLowerCase()}`);
  const flavor = res.data.flavor_text_entries.find(element => element.language.name === "en")
  setPokemonFlavor(flavor.flavor_text);
}
const getStrongAgainst = async (types) => {
  let res = await axios.get(`https://pokeapi.co/api/v2/type/${types[0]}`);
  setStrongAgainst(res.data.damage_relations.double_damage_to);
}

const getWeakAgainst = async (types) => {
  let res = await axios.get(`https://pokeapi.co/api/v2/type/${types[0]}`);
  setWeakAgainst(res.data.damage_relations.double_damage_from);
}
  const handleSubmit = event => {
    event.preventDefault();
    getData();
    
  }
  const handleChange = (e) => {
     setFind(e.target.value);
  }
  
  useEffect(()=> {
    getData()
  }, [])

  return (
    <div>
      <SearchBar handleChange={handleChange}/>
      <PokemonCard  weakAgainst={weakAgainst} strongAgainst={strongAgainst} handleSubmit={handleSubmit} pokemonId={pokemonId} image={image} pokemonName={pokemonName} pokemonTypes={pokemonTypes} pokemonFlavor={pokemonFlavor} />
    </div>
    
  )
}

export default PokemonProvider;