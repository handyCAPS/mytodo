
import React from 'react';

const Form = React.createClass({
    handleSave(e) {
        e.preventDefault();
        const newText = this.refs.newtext;
        this.props.addToDo(newText.value);
        this.refs.newtextForm.reset();
    },
    render() {
        return (
            <div className="form-wrap">
                <form ref="newtextForm">
                    <p className="input-group">
                        <label htmlFor="text" className="input-group__label">Text</label>
                        <textarea ref="newtext" name="text" id="" cols="30" rows="10" className="input-group__text-area"></textarea>
                    </p>
                    <button className="btn btn-large form__button" type="submit" onClick={this.handleSave}>Save</button>
                </form>
            </div>
            );
    }
});

export default Form;