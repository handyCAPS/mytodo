import React from 'react';

import { Link } from 'react-router';

const Main = () => (
    <div>
        <p>Here is some shit I need to do.</p>
        <Link to="/tasks">Tasks</Link>
    </div>
    );

export default Main;