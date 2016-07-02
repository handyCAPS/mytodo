import React from 'react';
import ReactDOM from 'react-dom';

import Task from './Task';

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
        return (
            <div className="task">
                <div className="task__list">{this.props.tasks.map((task, index) => (
                    <Task
                        {...this.props}
                        ref="task"
                        key={index}
                        index={index}
                        task={task}
                        setEditing={this.setEditing}
                        selectAndFocus={this.selectAndFocus}
                        editing={this.state.editing} />
                    ))}</div>
            </div>
            );
    }
});

export default Tasks;