
import React from 'react';

import { browserHistory } from 'react-router';

const Form = React.createClass({
    componentDidMount() {
        this.refs.newtext.focus();
    },
    handleSave(e) {
        if (e) { e.preventDefault(); }
        const newText = this.refs.newtext.value;
        if (newText.trim() === '') {
            this.refs.newtext.focus();
            return;
        }
        const timestamp = new Date().getTime();
        this.props.addToDo(newText, timestamp);
        this.refs.newtextForm.reset();
        browserHistory.push('/tasks');
    },
    handleKeyDown(event) {
        const key = event.which;
        if (!event.ctrlKey || key !== 13) { return; }
        this.handleSave();
    },
    render() {
        return (
            <div className="form-wrap">
                <form ref="newtextForm">
                    <p className="input-group">
                        <label htmlFor="text" className="input-group__label">Text</label>
                        <textarea ref="newtext" name="text" id="" cols="30" rows="10" className="input-group__text-area" onKeyDown={this.handleKeyDown}></textarea>
                    </p>
                    <input className="btn btn-large form__button" type="submit" onClick={this.handleSave} value="Save" />
                </form>
            </div>
            );
    }
});

export default Form;