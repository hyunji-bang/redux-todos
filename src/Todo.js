import React from 'react';
import classNames from 'classnames';

const Todo = (props) => (
    <li className={classNames('todo-item', {editing: props.isEditing})}>
        <button className="toggle" />
        <div className="todo-item__view">
            <div className="todo-item__view__text"
                 onDoubleClick={props.startEdit}
            >
                {props.text}
            </div>
            <button
                className="todo-item__destroy"
                onClick={props.deleteTodo}
            />
        </div>
        <input type="text"
               className="todo-item__edit"
               onKeyPress={(e)=>props.editTodo(e, props.id)}
        />
    </li>
);

export default Todo;