import React from 'react';
import Todo from './Todo';

const TodoList = () => (
    <div className="todo-app__main">
        <ul className="todo-list">
            <Todo
                text="todo 텍스트"
            />
        </ul>
    </div>
);

export default TodoList;