import React from 'react';
import { addTodo } from '../action/todoAction'
import { connect } from 'react-redux';

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1 className="todo-app__header">todos</h1>
                <input
                    type="text"
                    className="todo-app__new-todo"
                    placeholder="What needs to be done?"
                    onKeyDown={this.handleKeyDown}
                />
                <button className="toggle-all"/>
            </header>
        );
    }
    handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            this.props.addTodo(e.target.value);
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    addTodo: (text) => dispatch(addTodo(text))
})


export default connect(undefined, mapDispatchToProps)(Header);
