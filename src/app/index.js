import React, { Component } from 'react';
import { styles } from './Component.css';
import Board, { model as board } from '../board';
import Robot, { model as robot } from '../robot';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: {x: 0, y: 0},
        };

        this.robot = robot(this.state.position);
        this.board = board();
    }

    render() {
        return (
            <div className={styles}>
                <Robot {...this.state} />
                <Board board={this.board}/>
            </div>
        );
    }
}
