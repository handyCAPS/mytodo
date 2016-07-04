
import { addToLocalState, deleteFromLocalState, updateLocalState } from '../util/localstorage';

function tasks(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            const newOb = {
                text: action.text,
                timestamp: action.timestamp,
                completed: action.completed
            };
            addToLocalState("tasks", newOb);
            return state.concat(newOb);
        case 'DELETE_TODO':
            deleteFromLocalState("tasks", action.index);
            return state.filter((todo, i) => i !== action.index);
        case 'EDIT_TODO':
            updateLocalState("tasks", action.index, action.text);
            return state.map((taskObject, index) => {
                if (index === action.index) {
                    taskObject.text = action.text;
                    return taskObject;
                }
                return taskObject;
            });
        default:
            return state;
    }
}

export default tasks;