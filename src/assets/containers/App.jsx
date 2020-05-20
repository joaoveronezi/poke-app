import React, { Component } from "react";
import "../sass/base/App.scss";
import { connect } from "react-redux";

import fetchProductsAction from "../../store/sagas";
import {
  getProductsError,
  getProducts,
  getProductsPending,
} from "../../store/reducers";

import Main from "../../components/Main";
import Header from "../../components/Header";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProductsAction());
  }

  render() {
    const { items, error, pending } = this.props;
    if (error) {
      return <div>Error!</div>;
    }
    if (pending) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        {items &&
          items.map((item, index) => {
            return (
              // <Main item={item.name}/>
              <div key={item.id}>
                <p>{item.name}</p>
                <p>{item.username}</p>
                <p>{item.email}</p>
              </div>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: getProductsError(state),
  items: getProducts(state),
  pending: getProductsPending(state),
});

export default connect(mapStateToProps)(App);
