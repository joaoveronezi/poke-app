import React, { Component } from "react";
import "../sass/base/App.scss";
import { connect } from "react-redux";

import fetchProductsAction from "../../store/sagas";
import {
  getProductsError,
  getProducts,
  getProductsPending,
} from "../../store/reducers";

//import Main from '../../components/Main';
//import Header from '../../components/Header';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProductsAction());
  }

  render() {
    const { products, error, pending } = this.props;
    return (
      <div>
        <div>
          <ul>
            <li>{products}</li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: getProductsError(state),
  products: getProducts(state),
  pending: getProductsPending(state),
});

export default connect(mapStateToProps)(App);
