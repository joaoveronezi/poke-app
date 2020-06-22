import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import "./Content.scss";
import PokemonCard from "../PokemonCard";
import Footer from "../Footer";
import {
  fetchPokemonData,
  filterPokemon,
} from "../../store/ducks/pokemons/actions";

const Content = () => {
  const { data, error, loading, prevPage, nextPage, search } = useSelector(
    (state) => ({
      data: state.data.items,
      error: state.data.error,
      loading: state.data.loading,
      prevPage: state.data.prevPage,
      nextPage: state.data.nextPage,
      search: state.data.search,
    }),
    shallowEqual
  );

  data &&
    data.filter((data) => {
      if (search == null) {
        return null;
      } else if (data.name.toLowerCase().includes(search.toLowerCase()))
        return console.log(data.name);
    });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonData(0));
  }, [dispatch]);

  if (loading) return <div>loading...</div>;
  if (error) return console.log(error.menssage);

  return (
    <>
      <input
        type="text"
        placeholder="Enter item to be searched"
        onChange={(e) => dispatch(filterPokemon(e.target.value))}
      />
      <div className="List">
        {data &&
          data.map((item, index) => {
            return (
              <PokemonCard
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.sprites.front_default}
                types={item.types}
              />
            );
          })}
      </div>
      <div>
        <Footer prevPage={prevPage} nextPage={nextPage} />
      </div>
    </>
  );
};

export default Content;
