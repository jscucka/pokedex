import React from "react";
import PokemonCard from "./PokemonCard";
const PokemonList = (props) => {
    return(
        <div>
            {props.pokemon.map((p) => {
               return <PokemonCard name={p} key={p}/>
            })}
        </div>
    )
}

export default PokemonList;