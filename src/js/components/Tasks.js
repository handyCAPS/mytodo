import React from 'react';
import ReactDOM from 'react-dom';

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
    getInitialState() {
        return {
            editing: {
                active: false,
                index: null
            }
        };
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
    setEditing(index) {
        const active = index === this.state.editing.index ? !this.state.editing.active : true;
        this.setState({
            editing: {
                active,
                index
            }
        });
    },
    render() {
        const filteredTasks = this.getFilteredTasks();
        return (
            <div className="task">
                <TypeFilter {...this.props} />
                <div className="task__list">{filteredTasks.map((task, index) => {
                    return (
                        <Task
                            {...this.props}
                            key={index}
                            ref="task"
                            index={index}
                            task={task}
                            setEditing={this.setEditing}
                            selectAndFocus={this.selectAndFocus}
                            editing={this.state.editing} />
                        );
                })}</div>
            </div>
            );
    }
});

export default Tasks;