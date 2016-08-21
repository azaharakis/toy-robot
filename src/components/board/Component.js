import React, { Component } from 'react';
import styles from './Component.css';
import Cell from './cell';

const renderCell = (CELL, i) => <Cell key={i}/>; 

const renderRow = (r, i) => (
    <div key={i} className={styles.row}>
        { r.map(renderCell) }
    </div>
);

export default class Board extends Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div>
                { this.props.board.surface.map(renderRow) }
            </div>
        );
    }
}
