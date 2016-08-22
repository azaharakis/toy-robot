import styles from './Component.css';
import React, { Component } from 'react';

const cellFactory = className => <div className={className}></div>;

export default () => cellFactory(styles.default);
export const Empty = () => cellFactory(styles.null);
