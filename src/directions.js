import * as _ from './utils';

const goNorth = (distance = 1) => ({ x:0,         y:-distance });
const goEast  = (distance = 1) => ({ x:distance,  y:0 });
const goSouth = (distance = 1) => ({ x:0,         y:distance });
const goWest  = (distance = 1) => ({ x:-distance, y:0 });

const NORTH = {
    display: 'North',
    keyCode:38,
    direction: goNorth
};

const EAST = {
    display: 'East',
    keyCode:39,
    direction: goEast
};

const SOUTH = {
    display: 'South',
    keyCode:40,
    direction: goSouth
};

const WEST = {
    display: 'West',
    keyCode:37,
    direction: goWest
};

export const ifInputMatchesAValidDirection = fn => ({ keyCode }) => {
    const currentDirection = _.find(d => d.keyCode === keyCode, [NORTH, EAST, SOUTH, WEST]);
    if (currentDirection) {
        return fn(currentDirection);
    }
};

