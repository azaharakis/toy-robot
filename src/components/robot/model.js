export default ({x, y}) => {
    let currentPosition = { x, y };
    let currentMessage = null;

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
        },

        clearMessage() {
            currentMessage = null;
        },

        messages: {
            invalidLocation(direction = null) {
                currentMessage = direction && `Nah mate! Not going ${direction}`;
            }
        },

        display() {
            return {
                message: currentMessage,
                position: currentPosition,
            }
        }
    };
};
