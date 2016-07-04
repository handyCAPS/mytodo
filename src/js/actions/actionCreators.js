
// Add todo
export function addToDo(text) {
    return {
        type: 'ADD_TODO',
        text
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

export function completeToDo(index) {
    return {
        type: 'COMPLETE_TODO',
        index
    };
}