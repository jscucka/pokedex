import React from "react";
import "../Styles/PokemonCard.css";

const PokemonCard = props => {
 
    const colours = {
      normal: '#A8A77A',
      fire: '#EE8130',
      water: '#6390F0',
      electric: '#F7D02C',
      grass: '#7AC74C',
      ice: '#96D9D6',
      fighting: '#C22E28',
      poison: '#A33EA1',
      ground: '#E2BF65',
      flying: '#A98FF3',
      psychic: '#F95587',
      bug: '#A6B91A',
      rock: '#B6A136',
      ghost: '#735797',
      dragon: '#6F35FC',
      dark: '#705746',
      steel: '#B7B7CE',
      fairy: '#D685AD',
    };

  return ( 
    <div className="pokemonCard">
      <div className="head" style={{background: colours[props.pokemonTypes[0]]}}>
        <h2 id="pName">{props.pokemonName.toUpperCase()}</h2>
        <h3 id="pIndex">#{props.pokemonId}</h3>
      </div>
    
     <div className="container">
      <div className="left">
        <img src={props.image} alt={props.pokemonName}/>
      </div>
      <div className="right">
        <div className="abilities">
          <div className="strength">
            <h4>Strong against</h4>
            <ul>
              {props.strongAgainst.map(s => <li key={s.name}>{s.name}</li>)}
            </ul>
          </div>
          <div className="weakness">
            <h4>Weak Against</h4>
            <ul>
              {props.weakAgainst.map(s => <li key={s.name}>{s.name}</li>)}
            </ul>
          </div>
        </div>
        
        
        <div>
        <form id="form"onSubmit={props.handleSubmit}>
        
        
        
        </form>
        </div>
      </div>
     
     </div>
     <p className="lore">{props.pokemonFlavor}</p>
     
    </div>
  );
}

export default PokemonCard;