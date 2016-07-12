
import React from 'react';

const Checkmark = React.createClass({
    componentWillAppear(cb) {
        console.log("Appearing");
        cb();
    },
    componentWillEnter(cb) {
        console.log("Entering");
        window.setTimeout(cb, 1500);
    },
    componentDidEnter() {
        console.log("Entered");
    },
    componentWillLeave(cb) {
        console.log("Leaving");
        cb();
    },
    render() {
        return (
            <span className="checkmark" key={this.props.key}>&#x02713;</span>
            );
    }
});

export default Checkmark;