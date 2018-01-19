import Todo from './Todo';
import React, { Component } from 'react';

export default class TodoList extends Component {
    render() {
        return (
            <div className="todo-app__main">
                <ul className="todo-list">
                    {this.props.todos.map((todo) => (
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            deleteTodo={() => this.deleteTodo(todo.id)}
                            editTodo={this.props.editTodo}
                            cancelEdit={() => this.cancelEdit()}
                        >
                        </Todo>
                    ))}
                </ul>
            </div>
        )
    }

    deleteTodo = (id) => {
        const newTodos = [...this.state.todos];
        const targetIndex = newTodos.findIndex(todo => todo.id === id);

        if (targetIndex > -1) {
            newTodos.splice(targetIndex, 1)
        }
        // const deleteIndex = this.state.todos.findIndex((todo) => {
        //     return todo.id === id
        // })
        // this.state.todos.splice(deleteIndex, 1)
        //
        // const newTodos = this.state.todos

        this.setState({
            todos: newTodos
        })
    }

}

