export const find = (predicate, array) =>
    array.reduce((accum, current) => predicate(current) ? current : accum, null);


export const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);


