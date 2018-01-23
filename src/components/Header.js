import React from 'react';

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
            this.props.saveTodo(e.target.value);
        }
    }
}

export default Header;