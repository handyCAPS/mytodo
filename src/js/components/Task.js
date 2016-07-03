
import React from 'react';
import ReactDOM from 'react-dom';

const Task = React.createClass({
    getEditTextRef() {
        return "editText" + this.props.index;
    },
    componentDidUpdate() {
        if (this.props.editing.active && this.props.editing.index === this.props.index) {
            const input = this.refs["editText" + this.props.editing.index];
            this.props.selectAndFocus(input);
        }
    },
    handleUpdate(event) {
        event.preventDefault();
        const input = this.refs[this.getEditTextRef()];
        const text = ReactDOM.findDOMNode(input).value;
        this.props.editToDo(this.props.index, text);
        this.props.setEditing(this.props.index);
    },
    render() {
        const {
            index,
            editing,
            task,
            deleteToDo,
            setEditing
        } = this.props;

        const isEditing = editing.active && (editing.index === index);
        const editTextRef = this.getEditTextRef();

        return (
            <div className="task__item"
                key={index}
                i={index}><p>
                { isEditing  || task.text }
                { isEditing  &&
                    (
                        <form ref="editForm" onSubmit={this.handleUpdate}>
                            <input ref={editTextRef} defaultValue={task.text} type="text" />
                            <input type="submit" hidden/>
                        </form>
                    )
                }</p>
                <span className="button--task closeX" onClick={deleteToDo.bind(null, index)}>&times;</span>
                <span className="button--task edit" onClick={setEditing.bind(null, index)}>&Xi;</span>
                </div>
            );
    }
});

export default Task;