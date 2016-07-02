
import { addToLocalState, deleteFromLocalState } from '../util/localstorage';

function tasks(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            addToLocalState("tasks", {text: action.text});
            return state.concat({text: action.text});
        case 'DELETE_TODO':
            deleteFromLocalState("tasks", action.index);
            return state.filter((todo, i) => i !== action.index);
        default:
            return state;
    }
}

export default tasks;