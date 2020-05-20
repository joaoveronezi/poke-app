import React, { Component } from "react";
import { connect } from "react-redux";

import NavBar from "../NavBar";
import Content from "../Content";
import Footer from "../Footer";

import fetchProductsAction from "../../store/sagas";
import {
  getProductsError,
  getProducts,
  getProductsPending,
} from "../../store/reducers";

class Main extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProductsAction());
  }

  render() {
    const { items, error, pending } = this.props;

    return (
      <div>
        <NavBar />
        <Content />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: getProductsError(state),
  items: getProducts(state),
  pending: getProductsPending(state),
});

export default connect(mapStateToProps)(Main);
