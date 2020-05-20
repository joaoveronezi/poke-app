import React, { Component } from "react";
import { connect } from "react-redux";

import "./Content.scss";

import fetchProductsAction from "../../store/sagas";
import {
  getProductsError,
  getProducts,
  getProductsPending,
} from "../../store/reducers";

class Content extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProductsAction());
  }

  render() {
    const { items, error, pending } = this.props;
    if (pending) return <div>Loading...</div>;
    if (error) return console.log(error.message);

    return <div></div>;
  }
}

const mapStateToProps = (state) => ({
  error: getProductsError(state),
  items: getProducts(state),
  pending: getProductsPending(state),
});

export default connect(mapStateToProps)(Content);
