
import React from 'react';
import ReactDOM from 'react-dom';

import ReactTransitionGroup from 'react-addons-transition-group';

import Checkmark from './Checkmark';

const Task = React.createClass({
    getEditTextRef() {
        return "editText" + this.props.index;
    },
    componentDidUpdate() {
        if (this.props.isEditing) {
            const input = this.refs["editText" + this.props.editing.index];
            this.props.selectAndFocus(input);
        }
    },
    handleUpdate(event) {
        if (event) { event.preventDefault(); }
        const input = this.refs[this.getEditTextRef()];
        const text = ReactDOM.findDOMNode(input).value;
        this.props.editToDo(this.props.index, {text});
        this.props.setEditing(this.props.index);
    },
    handleKeyDown(event) {
        const key = event.which;
        if (!event.ctrlKey || key !== 13) { return; }
        this.handleUpdate();
    },
    setCompleted() {
        this.props.completeToDo(this.props.index, !this.props.task.completed);
    },
    formatDate(date) {
        const theDate = new Date(date);
        let dateString = '';
        if (!isNaN(theDate.getMinutes())) {
            const theDay = theDate.getDate();
            const theMonth = parseInt(theDate.getMonth()) + 1;
            const theYear = theDate.getFullYear();
            const theHours = theDate.getHours();
            const theMinutes = theDate.getMinutes();
            dateString = theDay + '-' +
                        theMonth + '-' +
                        theYear + ' - ' +
                        theHours + ':' +
                        theMinutes;
        }
        return dateString;
    },
    render() {
        const {
            index,
            task,
            deleteToDo,
            changeEditing,
            isEditing
        } = this.props;



        const editTextRef = this.getEditTextRef();
        const completeButtonText = (task.completed ? 'Unc' : 'C') + 'omplete';
        return (
            <div className="task__item"
                key={index}>
                <ReactTransitionGroup>
                { task.completed && (
                                        <Checkmark key={index} />
                                    ) }
                </ReactTransitionGroup>
                { isEditing  || (<p className="task__text">{task.text}</p>) }
                { !isEditing  ||
                    (
                        <div className="task__form-wrap">
                            <form ref="editForm" onSubmit={this.handleUpdate}>
                                <textarea ref={editTextRef} defaultValue={task.text} className="editForm__input input-group__textarea task__text" onKeyDown={this.handleKeyDown} ></textarea>
                                <input type="submit" className="task__submit btn btn--small" value="Save" />
                            </form>
                        </div>
                    )
                }
                <div className="timestamp">{this.formatDate(task.dueDate)}</div>
                <span className="button--task closeX" onClick={deleteToDo.bind(null, index)}>&times;</span>
                <span className="button--task edit" onClick={changeEditing.bind(null, index)}>&Xi;</span>
                <div className="complete-wrap">
                    <button className="btn btn--small task__complete-button" onClick={this.setCompleted}>{completeButtonText}</button>
                </div>
            </div>
            );
    }
});

export default Task;