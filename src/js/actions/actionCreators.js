
// Add todo
export function addToDo(text) {
    return {
        type: 'ADD_TODO',
        text
    };
}

// Edit todo
export function editToDo(id, newText) {
    return {
        type: 'EDIT_TODO',
        id,
        newText
    };
}

// Delete todo
export function deleteToDo(index) {
    return {
        type: 'DELETE_TODO',
        index
    };
}