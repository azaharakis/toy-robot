import Cell, { Empty }  from './cell';

export default () => {
    let surface = [
        [Empty, Cell, Cell, Cell, Cell],
        [Cell, Cell, Cell, Cell, Cell],
        [Cell, Cell, Cell, Cell, Cell],
        [Cell, Cell, Cell, Cell, Cell],
        [Cell, Cell, Cell, Cell, Cell]
    ];

    return {
        surface,
        isValid ({x, y}) {
            const isValidCell = () => surface[y][x] !== Empty;
            const isWithinXSurface = () => x >= 0 && x < surface[y].length;
            const isWithinYSurface = () => y >= 0 &&  y < surface.length;

            if (!isWithinYSurface() || !isWithinXSurface() || !isValidCell()) {
                return false
            }

            return true;
        }
    }
};

