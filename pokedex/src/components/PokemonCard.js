import React from "react";

const PokemonCard = (props) => {
    console.log(props)
    return (
        <div>
            <h2>{props.name}</h2>
        </div>
    );
}

export default PokemonCard;