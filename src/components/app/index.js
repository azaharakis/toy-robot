import React, { Component } from 'react';
import { styles } from './Component.css';
import Board, { model as board } from '../board';
import Robot, { model as robot } from '../robot';
import { ifInputMatchesAValidDirection } from '../../directions';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.robots = [
            robot({x:1, y:0}),
        ];
        this.board = board();
        this.handleKeyDown = ifInputMatchesAValidDirection(this.handleKeyDown.bind(this));

        document.body.addEventListener('keydown', this.handleKeyDown);
        this.state = { robots: this.robots.map( i => i.display() ) }
    }

    handleKeyDown({direction, display}) {
        console.log(`in here ${direction}`);
    }

    componentWillUnmount() {
        document.body.removeEventListener('keydown', this.handleKeyDown);
    }

    render() {
        return (
            <div className={styles}>
                {this.state.robots.map( (display, k) => <Robot key={k} {...display} />)}
                <Board board={this.board}/>
            </div>
        );
    }
}
