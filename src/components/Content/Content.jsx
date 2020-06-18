import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import "./Content.scss";
import PokemonCard from "../PokemonCard";
import Footer from "../Footer";
import { fetchPokemonData } from "../../store/ducks/pokemons/actions";

const Content = () => {
  const { data, error, loading, prevPage, nextPage } = useSelector(
    (state) => ({
      data: state.data.items,
      error: state.data.error,
      loading: state.data.loading,
      prevPage: state.data.prevPage,
      nextPage: state.data.nextPage,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonData(0));
  }, [dispatch]);

  if (loading) return <div>loading...</div>;
  if (error) return console.log(error.menssage);

  return (
    <>
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

// class Content extends Component {
//   componentDidMount() {
//     this.props.fetchPokemonData(0);
//   }

//   render() {
//     const { data, error, loading, prevPage, nextPage } = this.props;

// const mapStateToProps = (state) => {
//   return {
//     data: state.data.items,
//     error: state.data.error,
//     loading: state.data.pending,
//     prevPage: state.data.prevPage,
//     nextPage: state.data.nextPage,
//   };
// };

// export default connect(mapStateToProps, {
//   fetchPokemonData,
// })(Content);
