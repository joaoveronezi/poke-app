import React from "react";
import { useDispatch } from "react-redux";

import { fetchPokemonData } from "../../store/ducks/pokemons/actions";
import "./style.scss";

const Footer = ({ prevPage, nextPage }) => {
  const dispatch = useDispatch();
  if (prevPage) {
    return (
      <div>
        <button onClick={(e) => dispatch(fetchPokemonData(prevPage))}>
          &laquo;
        </button>
        <button onClick={(e) => dispatch(fetchPokemonData(nextPage))}>
          &raquo;
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button
          className="disabled"
          onClick={(e) => dispatch(fetchPokemonData(prevPage))}
        >
          &laquo;
        </button>
        <button onClick={(e) => dispatch(fetchPokemonData(nextPage))}>
          &raquo;
        </button>
      </div>
    );
  }
};

export default Footer;
