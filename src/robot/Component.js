import styles from './Component.css';
import React, { Component } from 'react';

export default ({position}) => {
    const { x, y } = position;

    return (
        <div className={styles.default}>
            Robot
        </div>
    );
}
