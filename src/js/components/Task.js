
import React from 'react';

const Task = ({
    task,
    index,
    deleteToDo,
    handleEdit,
    state
}) => (
    <div className="task__item"
        key={index}
        i={index}>
        {task}
        <span className="button--task closeX" onClick={deleteToDo.bind(null, index)}>&times;</span>
        <span className="button--task edit" onClick={handleEdit.bind(null, index)}>&Xi;</span>
        {state.editing && (<p>Editing...</p>)}
        </div>
    );

export default Task;