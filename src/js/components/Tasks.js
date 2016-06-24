import React from 'react';

const Tasks = React.createClass({
    getInitialState() {
        return {
            tasks: [
                'Do stuff',
                'Do some other stuff'
            ]
        };
    },
    render() {
        return (
            <div>
                <ul>{this.state.tasks.map(task => {return(<li>{task}</li>)})}</ul>
            </div>
            );
    }
});

export default Tasks;