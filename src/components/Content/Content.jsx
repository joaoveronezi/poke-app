import React, { Component } from "react";
import { connect } from "react-redux";

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

    return (
      <div>
        {items &&
          items.map((item, index) => {
            return <p>{item.name}</p>;
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

export default connect(mapStateToProps)(Content);
