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
    if (error) return <div>Error!</div>;

    return (
      <div>
        {products
          ? products.map((item, index) => {
              return <div key={item.id}>{item.title}</div>;
            })
          : "Loading..."}
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

/*
constructor(props) {
  super(props);
  this.state = {
    Users: [],
  };
}

getUsersData() {
  axios
    .get()
    .then((res) => {
      const data = res.data.results;
      console.log(data);
      const prods = data.map((item, index) => (
        <div key={item.id}>
          <ul>
            <li>{item.id}</li>
            <li>{item.title}</li>
            <li>{item.description}</li>
          </ul>
        </div>
      ));
      this.setState({ prods });
    })
    .catch((error) => {
      console.log(error);
    });
}

componentDidMount() {
  this.getUsersData();
}*/
