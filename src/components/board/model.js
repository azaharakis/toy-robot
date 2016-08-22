const CELL = true;

export default () => {
    let surface = [
        [CELL, CELL, CELL, CELL, CELL],
        [CELL, CELL, CELL, CELL, CELL],
        [CELL, CELL, CELL, CELL, CELL],
        [CELL, CELL, CELL, CELL, CELL],
        [CELL, CELL, CELL, CELL, CELL]
    ];

    return {
        surface,
        isValid ({x, y}) {
            const isValidCell = () => surface[y][x];
            const isWithinXSurface = () => x >= 0 && x < surface[y].length;
            const isWithinYSurface = () => y >= 0 &&  y < surface.length;

            if (!isWithinYSurface() || !isWithinXSurface() || !isValidCell()) {
                return false
            }

            return true;
        }
    }
};

