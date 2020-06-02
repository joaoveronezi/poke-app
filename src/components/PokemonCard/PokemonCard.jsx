import React from "react";
import "./PokemonCard.scss";

const PokemonCard = ({ name }) => {
  return (
    <div className="CardBody">
      <div className="CardHeader">
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default PokemonCard;
