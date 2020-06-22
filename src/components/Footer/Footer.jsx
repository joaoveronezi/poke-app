import React from "react";
import { useDispatch } from "react-redux";

import { fetchPokemonData } from "../../store/ducks/pokemons/actions";
import "./style.scss";

const Footer = ({ prevPage, nextPage }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className={prevPage ? "" : "disabled"}
        onClick={(e) => dispatch(fetchPokemonData(prevPage))}
      >
        &laquo;
      </button>
      <button onClick={(e) => dispatch(fetchPokemonData(nextPage))}>
        &raquo;
      </button>
    </div>
  );
};

export default Footer;
