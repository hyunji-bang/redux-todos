import React from 'react';
import Todo from './Todo';

const TodoList = (props) => (
    <div className="todo-app__main">
        <ul className="todo-list">
            {props.todos.map((todo) => (
            <Todo
                key={todo.id}
                id={todo.id}
                text={todo.text}
                deleteTodo={()=>props.deleteTodo(todo.id)}
                editTodo={()=>props.editTodo(todo.id)}
                isEditing={props.editingId === todo.id}
                startEdit={()=>props.startEdit(todo.id)}
            >
            </Todo>
            ))}
        </ul>
    </div>
);

export default TodoList;