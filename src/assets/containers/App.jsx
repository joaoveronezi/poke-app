import React, { Component } from "react";

import { getSoupDataFromAPI } from "../../store/sagas";
import "antd/dist/antd.css";
import {connect} from "react-redux";
import Icon from "antd/lib/icon"

import { List, Avatar } from 'antd';


class App extends Component {

  componentDidMount(){
    this.props.dispatch(getSoupDataFromAPI())
    {console.log("console do APP", this.props)}
  }

  render() {
      const { products, loading } = this.props;

      if (loading) {
          return <Icon type="loading" />;
      }
      return (
        <div className="App">
        <header className="App-header" />
        <div>
          
        <ul>
          {products.map((data)=> {
            return ( 
              <List key={data.id}>
               <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src="http://lorempixel.com/400/200/food/" />}
                    title={<a href="##">{data.title}</a>}
                    description={data.description}
                  />
                </List.Item>
              
              </List>
            )
          })}
        </ul>
        </div>
      </div>
    );
  }
} 


const mapStateToProps=(state)=>{
  return {
    products:state.products,
    isLoading:state.isLoading
  }
 
}

export default connect(mapStateToProps)(App);