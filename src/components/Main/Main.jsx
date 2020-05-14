import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadPokemon } from "../../store/sagas";

import './Main.scss';
import NavBar from '../NavBar';
import Content from '../Content';



class Main extends Component {
    render() {
        return (
            <div className="Main">
                <NavBar />
                <Content />
            </div>
        )
    }
}

export default Main;