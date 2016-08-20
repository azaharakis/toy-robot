import styles from './Component.css';
import React, { Component } from 'react';
import { surfaceArea } from '../board/cell/Component.css';

export default ({position}) => {
    const { x, y } = position;

    return (
        <div className={styles.default}
            style={{
            margin: `calc( (${surfaceArea})/2 - ${styles.dimension}/2)`,
            left: `calc(${surfaceArea} * ${x})`,
            top: `calc(${surfaceArea} * ${y})`}}>
            Robot
        </div>
    );
}
