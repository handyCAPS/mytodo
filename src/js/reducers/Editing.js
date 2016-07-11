
function Editing(state = {}, action) {
    if (action.type === 'CHANGE_EDITING') {
        return {
            active: action.active,
            index: action.index
        };
    }
    return state;
}

export default Editing;