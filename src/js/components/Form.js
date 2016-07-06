
import React from 'react';

import { browserHistory } from 'react-router';

const Form = React.createClass({
    componentDidMount() {
        this.refs.newtext.focus();
    },
    formatDate(dateString) {
        const dateArray = dateString.split('-');
        const now = new Date();
        const thisYear = now.getFullYear();
        if (dateArray.length === 2) {
            dateArray.push(thisYear);
        }
        dateArray.reverse();
        dateArray[1] = parseInt(dateArray[1]) -1;
        const newDate = new Date(...dateArray);
        return newDate;
    },
    handleSave(e) {
        if (e) { e.preventDefault(); }
        const newText = this.refs.newtext.value;
        if (newText.trim() === '') {
            this.refs.newtext.focus();
            return;
        }
        const dueDate = this.formatDate(this.refs.dueDate.value).getTime();
        console.log("date", dueDate);
        const timestamp = new Date().getTime();
        this.props.addToDo(newText, timestamp, dueDate);
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
                        <textarea ref="newtext" name="text" id="" cols="30" rows="10" className="input-group__text-area input-group__input" onKeyDown={this.handleKeyDown}></textarea>
                    </p>
                    <p className="input-group">
                        <label htmlFor="dueDate" className="input-group__label">Einddatum</label>
                        <input type="text" ref="dueDate" className="input-group__input"/>
                    </p>
                    <input className="btn btn-large form__button" type="submit" onClick={this.handleSave} value="Save" />
                </form>
            </div>
            );
    }
});

export default Form;