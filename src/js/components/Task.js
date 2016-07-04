
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
    setCompleted() {
        console.info("complete: '", this.props.task);
    },
    formatDate(date) {
        const theDate = new Date(date);
        const theDay = theDate.getDate();
        const theMonth = theDate.getMonth();
        const theYear = theDate.getFullYear();
        const theHours = theDate.getHours();
        const theMinutes = theDate.getMinutes();
        const dateString = theDay + '-' + 
                            theMonth + '-' + 
                            theYear + ' - ' +
                            theHours + ':' +
                            theMinutes;
        return dateString;
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
                i={index}>
                <p>{ isEditing  || task.text }</p>
                { isEditing  &&
                    (
                        <form ref="editForm" onSubmit={this.handleUpdate}>
                            <input ref={editTextRef} defaultValue={task.text} type="text" />
                            <input type="submit" hidden/>
                        </form>
                    )
                }
                <span className="button--task closeX" onClick={deleteToDo.bind(null, index)}>&times;</span>
                <span className="button--task edit" onClick={setEditing.bind(null, index)}>&Xi;</span>
                <button className="button" onClick={this.setCompleted}>Complete</button>
                <div className="timestamp">{this.formatDate(task.timestamp)}</div>
                </div>
            );
    }
});

export default Task;