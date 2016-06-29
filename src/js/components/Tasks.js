import React from 'react';

const Tasks = React.createClass({
    render() {
        return (
            <div className="task">
                <ul className="task__list">{this.props.tasks.map((task, index) => (
                    <li
                        className="task__item"
                        key={index}
                        i={index}>{task}<span onClick={this.props.deleteToDo.bind(null, index)} className="closeX">&times;</span></li>
                    ))}</ul>
            </div>
            );
    }
});

export default Tasks;