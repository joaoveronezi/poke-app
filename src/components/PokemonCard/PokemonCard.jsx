import React from "react";
import "./PokemonCard.scss";

const PokemonCard = ({ name, id, image, types }) => {
  return (
    <div className="CardBody">
      <div className="CardHeader">
        <img className="pokemonImage" alt="Pokemon Default" src={image} />
        <h3 key={id}>{name}</h3>
        <p>#{id}</p>
      </div>
      <div className="CardInfoDualType">
        {types &&
          types.map((item, index) => {
            return <p key={id + "-" + index}>{item.type.name}</p>;
          })}
      </div>
    </div>
  );
};

export default PokemonCard;
