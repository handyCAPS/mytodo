
import { addToLocalState, deleteFromLocalState, updateLocalState } from '../util/localstorage';

function tasks(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            addToLocalState("tasks", {text: action.text});
            return state.concat({text: action.text});
        case 'DELETE_TODO':
            deleteFromLocalState("tasks", action.index);
            return state.filter((todo, i) => i !== action.index);
        case 'EDIT_TODO':
            updateLocalState("tasks", action.index, action.text);
            return state.map((taskObject, index) => {
                if (index === action.index) {
                    taskObject.text = action.text;
                    console.info('text', taskObject);
                    return taskObject;
                }
                return taskObject;
            });
        default:
            return state;
    }
}

export default tasks;