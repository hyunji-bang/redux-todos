import React from 'react';
import Todo from './Todo';

const TodoList = (props) => (
    <div className="todo-app__main">
        <ul className="todo-list">
            {props.todos.map((todo) => (
            <Todo
                text={todo.text}
                key={todo.id}
                deleteTodo={(id)=>props.deleteTodo(todo.id)}
                id={todo.id}
            />
            ))}
        </ul>
    </div>
);

export default TodoList;