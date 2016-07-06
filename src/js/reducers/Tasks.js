
import { addToLocalState, deleteFromLocalState, updateLocalState } from '../util/localstorage';

function tasks(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            const newOb = {
                text: action.text,
                timestamp: action.timestamp,
                dueDate: action.dueDate,
                completed: action.completed
            };
            addToLocalState("tasks", newOb);
            return state.concat(newOb);
        case 'DELETE_TODO':
            deleteFromLocalState("tasks", action.index);
            return state.filter((todo, i) => i !== action.index);
        case 'EDIT_TODO':
            updateLocalState("tasks", action.index, action.newObject);
            return state.map((taskObject, index) => {
                if (index === action.index) {
                    taskObject = {...taskObject, ...action.newObject};
                    return taskObject;
                }
                return taskObject;
            });
        case 'COMPLETE_TODO':
            updateLocalState("tasks", action.index, {completed: action.completed});
            return state.map((taskObject, index) => {
                if (index === action.index) {
                    taskObject.completed = action.completed;
                    return taskObject;
                }
                return taskObject;
            });
        default:
            return state;
    }
}

export default tasks;