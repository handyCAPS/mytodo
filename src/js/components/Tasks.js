import React from 'react';

import Task from './Task';

const Tasks = React.createClass({
    getInitialState() {
        return {
            editing: false
        }
    },
    handleEdit() {
        this.setState({
            editing: !this.state.editing
        });
        console.log('handling edit...');
    },
    render() {
        return (
            <div className="task">
                <div className="task__list">{this.props.tasks.map((task, index) => (
                    <Task {...this.props}
                        state={this.state}
                        key={index}
                        task={task}
                        index={index}
                        handleEdit={this.handleEdit} />
                    ))}</div>
            </div>
            );
    }
});

export default Tasks;