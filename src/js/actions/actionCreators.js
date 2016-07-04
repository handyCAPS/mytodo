
// Add todo
export function addToDo(text, timestamp) {
    return {
        type: 'ADD_TODO',
        text,
        timestamp,
        completed: false
    };
}

// Edit todo
export function editToDo(index, text) {
    return {
        type: 'EDIT_TODO',
        index,
        text
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