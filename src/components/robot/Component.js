import styles from './Component.css';
import React, { Component } from 'react';
import { surfaceArea } from '../board/cell/Component.css';

export default ({message, position}) => {
    const { x, y } = position;
    const stylesForPosition = {
        margin: `calc( (${surfaceArea})/2 - ${styles.dimension}/2)`,
        left: `calc(${surfaceArea} * ${x})`,
        top: `calc(${surfaceArea} * ${y})`
    }

    console.log(message);
    return (
        <div className={styles.default}
            style={stylesForPosition}>
            Robot
            <div className={`${styles.speechBubble} ${message && styles.show}`}> {message} </div>
        </div>
    );
}
