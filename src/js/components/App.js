import React from 'react';

import { Link } from 'react-router';


const App = React.createClass({
    getInitialState: () => (
        {
            header: 'Initial header',
            textMain: 'Initial textMain'
        }
    ),
    render() {
        return (
            <main>
                <Link to="/">
                    <h1 className="someclass">Tims ToDo</h1>
                </Link>
                <div>{this.state.textMain}</div>
                {React.cloneElement(this.props.children, this.props)}
            </main>
        );
    }
});

export default App;