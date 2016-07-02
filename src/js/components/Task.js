
import React from 'react';
import ReactDOM from 'react-dom';

const Task = React.createClass({
    componentDidUpdate() {
        if (this.props.editing.active && this.props.editing.index === this.props.index) {
        const input = this.refs["editText" + this.props.editing.index];
            this.props.selectAndFocus(input);
        }
    },
    render() {
        const isEditing = this.props.editing.active && (this.props.editing.index === this.props.index);
        const editTextRef = "editText" + this.props.index;
        return (
            <div className="task__item"
                key={this.props.index}
                i={this.props.index}><p>
                {isEditing  || this.props.task.text}
                {isEditing  && (<input ref={editTextRef} defaultValue={this.props.task.text} type="text" />)}</p>
                <span className="button--task closeX" onClick={this.props.deleteToDo.bind(null, this.props.index)}>&times;</span>
                <span className="button--task edit" onClick={this.props.setEditing.bind(null, this.props.index)}>&Xi;</span>
                </div>
            );
    }
});

export default Task;