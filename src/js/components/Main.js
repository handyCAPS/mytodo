
import React from 'react';
import { Link } from 'react-router';


const Main = React.createClass({
    render() {
        return (
            <main className="mainContent">
                <Link to="/">
                    <h1 className="someclass">Tims ToDo</h1>
                </Link>
                <p>Here is some shit I need to do.</p>
                <Link to="/tasks"><button className="btn button__home">Tasks</button></Link>
                <Link to="/form"><button className="btn button__home">Form</button></Link>
                {React.cloneElement(this.props.children, this.props)}
            </main>
        );
    }
});

export default Main;