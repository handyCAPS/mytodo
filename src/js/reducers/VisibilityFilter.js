
function VisibilityFilter(state = '', action) {
    if (action.filter) {
        return action.filter;
    }
    return state;
}

export default VisibilityFilter;