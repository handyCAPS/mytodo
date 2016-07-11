import React from 'react';

import RadioButton from './RadioButton';

const TypeFilter = React.createClass({
    handleChange(filter) {
        if (filter !== this.props.visibilityFilter) {
            this.props.changeVisibilityFilter(filter);
        }
    },
    isCurrentFilter(filter) {
        return filter === this.props.visibilityFilter;
    },
    render() {
        const filters = [
            {
                action: 'SHOW_ALL',
                name: 'All'
            },
            {
                action: 'SHOW_COMPLETE',
                name: 'Complete'
            },
            {
                action: 'SHOW_OPEN',
                name: 'Open'
            }
        ];

        return (
            <div className="type-wrap">
                    {filters.map(function(filter, index) {
                        return (
                            <RadioButton name="selectType"
                                        key={index}
                                        text={filter.name}
                                        radioValue={filter.action}
                                        handleChange={this.handleChange}
                                        isChecked={this.isCurrentFilter(filter.action)} />
                                );
                    }, this)}
            </div>
            );
    }
});

export default TypeFilter;