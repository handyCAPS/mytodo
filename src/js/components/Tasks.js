import React from 'react';
import ReactDOM from 'react-dom';

import ReactTransitionGroup from 'react-addons-transition-group';

import Task from './Task';

import TypeFilter from './TypeFilter';

const Tasks = React.createClass({
    componentDidUpdate() {

    },
    selectAndFocus(input) {
        const node = ReactDOM.findDOMNode(input);
        node.focus();
        node.selectionStart = 0;
        node.selectionEnd = node.value.length;
    },
    getFilteredTasks() {
        const filter = this.props.visibilityFilter;
        return this.props.tasks.filter(task => {
            switch (filter) {
                case 'SHOW_ALL':
                    return true;
                case 'SHOW_COMPLETE':
                    return task.completed;
                case 'SHOW_OPEN':
                    return !task.completed;
                default:
                    return true;
            }
        });
    },
    changeEditing(index) {
        console.log("Editing:" , this.props.editing);
        const active = index === this.props.editing.index ? !this.props.editing.active : true;
        this.props.setEditing(active, index);
    },
    render() {
        const filteredTasks = this.getFilteredTasks();
        return (
            <div className="task">
                <TypeFilter {...this.props} />
                <div className="task__list">{filteredTasks.map((task, index) => {
                    const isEditing = this.props.editing.active && (this.props.editing.index === index);
                    return (
                        <Task
                            {...this.props}
                            key={index}
                            ref="task"
                            index={index}
                            task={task}
                            changeEditing={this.changeEditing}
                            selectAndFocus={this.selectAndFocus}
                            isEditing={isEditing} />
                        );
                })}</div>
            </div>
            );
    }
});

export default Tasks;