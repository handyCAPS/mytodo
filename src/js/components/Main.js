
import React from 'react';
import { Link } from 'react-router';

import TypeFilter from './TypeFilter';


const Main = React.createClass({
    render() {
        return (
            <main className="mainContent">
                <Link to="/">
                    <h1 className="someclass">Tims ToDo</h1>
                </Link>
                <p>Here is some shit I need to do.</p>
                <div className="button-wrap">
                    <Link to="/tasks"><button className="btn button__home">Tasks</button></Link>
                    <Link to="/form"><button className="btn button__home">Form</button></Link>
                </div>

                {React.cloneElement(this.props.children, this.props)}
            </main>
        );
    }
});

export default Main;