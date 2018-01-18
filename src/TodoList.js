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
                editTodo={props.editTodo}
                isEditing={props.editingId === todo.id}
                startEdit={()=>props.startEdit(todo.id)}
                cancelEdit={()=>props.cancelEdit()}
            >
            </Todo>
            ))}
        </ul>
    </div>
);

export default TodoList;