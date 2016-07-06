
import React from 'react';
import ReactDOM from 'react-dom';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


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
        console.log("Task", this.props.task);
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
            editing,
            task,
            deleteToDo,
            setEditing
        } = this.props;

        // if (task.completed) { return null; }

        const isEditing = editing.active && (editing.index === index);
        const editTextRef = this.getEditTextRef();
        const completeButtonText = (task.completed ? 'Unc' : 'C') + 'omplete';
        return (
            <div className="task__item"
                key={index}>
                <ReactCSSTransitionGroup  transitionName="checkmark" transitionEnterTimeout={1300} transitionLeaveTimeout={1300} >
                { task.completed && (
                                        <span className="checkmark" key={index}>&#x02713;</span>
                                    ) }
                </ReactCSSTransitionGroup>
                { isEditing  || (<p className="task__text">{task.text}</p>) }
                { isEditing  &&
                    (
                        <div className="task__text">
                            <form ref="editForm" onSubmit={this.handleUpdate}>
                                <textarea rows="1" ref={editTextRef} defaultValue={task.text} className="editForm__input" onKeyDown={this.handleKeyDown} ></textarea>
                                <input type="submit" hidden/>
                            </form>
                        </div>
                    )
                }
                <div className="timestamp">{this.formatDate(task.dueDate)}</div>
                <span className="button--task closeX" onClick={deleteToDo.bind(null, index)}>&times;</span>
                <span className="button--task edit" onClick={setEditing.bind(null, index)}>&Xi;</span>
                <div className="complete-wrap">
                    <button className="btn btn--small task__complete-button" onClick={this.setCompleted}>{completeButtonText}</button>
                </div>
            </div>
            );
    }
});

export default Task;