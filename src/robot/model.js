export default ({x, y}) => {
    let currentPosition = { x, y };
    return {
        setPosition({ x, y }){
            currentPosition = { x, y };
            return currentPosition;
        },

        queryPosition({x, y}){
            return {
                x: currentPosition.x + x,
                y: currentPosition.y + y
            }
        }
    };
};
