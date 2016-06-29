
import React from 'react';

import { browserHistory } from 'react-router';

const Form = React.createClass({
    handleSave(e) {
        e.preventDefault();
        const newText = this.refs.newtext.value;
        if (newText.trim() === '') {
            this.refs.newtext.focus();
            returnl
        }
        this.props.addToDo(newText);
        this.refs.newtextForm.reset();
        browserHistory.push('/tasks');
    },
    render() {
        return (
            <div className="form-wrap">
                <form ref="newtextForm">
                    <p className="input-group">
                        <label htmlFor="text" className="input-group__label">Text</label>
                        <textarea ref="newtext" name="text" id="" cols="30" rows="10" className="input-group__text-area"></textarea>
                    </p>
                    <input className="btn btn-large form__button" type="submit" onClick={this.handleSave} value="Save" />
                </form>
            </div>
            );
    }
});

export default Form;