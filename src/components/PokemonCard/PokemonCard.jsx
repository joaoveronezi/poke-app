import React from "react";
import "./PokemonCard.scss";

const PokemonCard = ({ name, id, image, type1, type2 }) => {
  if (!type2) {
    return (
      <div className="CardBody">
        <div className="CardHeader">
          <img className="pokemonImage" alt="Pokemon Default" src={image} />
          <h3 key={id}>{name}</h3>
          <p>#{id}</p>
        </div>
        <div className="CardInfo">
          <p>{type1}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="CardBody">
      <div className="CardHeader">
        <img className="pokemonImage" alt="Pokemon Default" src={image} />
        <h3 key={id}>{name}</h3>
        <p>#{id}</p>
      </div>
      <div className="CardInfoDualType">
        <p>{type1}</p>
        <p>/</p>
        <p>{type2}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
