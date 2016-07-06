
// Add todo
export function addToDo(text, timestamp, dueDate) {
    return {
        type: 'ADD_TODO',
        text,
        timestamp,
        dueDate,
        completed: false
    };
}

// Edit todo
export function editToDo(index, newObject) {
    return {
        type: 'EDIT_TODO',
        index,
        newObject
    };
}

// Delete todo
export function deleteToDo(index) {
    return {
        type: 'DELETE_TODO',
        index
    };
}

export function completeToDo(index, completed) {
    return {
        type: 'COMPLETE_TODO',
        index,
        completed
    };
}