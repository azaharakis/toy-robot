import React, { Component } from 'react';
import { styles } from './Component.css';
import Board, { model as board } from '../board';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.board = board();
    }

    render() {
        return (
            <div className={styles}>
                <Board board={this.board}/>
            </div>
        );
    }
}
