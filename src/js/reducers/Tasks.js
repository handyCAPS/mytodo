
import { setLocalState, deleteFromLocalState } from '../util/localstorage';

function tasks(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            setLocalState("state.text", action.text);
            return state.concat(action.text);
        case 'DELETE_TODO':
            deleteFromLocalState("state.text", action.index);
            return state.filter((todo, i) => i !== action.index);
        default:
            return state;
    }
}

export default tasks;