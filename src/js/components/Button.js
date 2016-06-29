import React from 'react';

const Button = React.createClass({
    render() {
        console.log(this.props);
        return (<button className="btn" onClick={this.props.addToDo.bind(null, 'My first task')}>Push</button>);
    }
});

export default Button;