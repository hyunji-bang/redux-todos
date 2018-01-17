import React from 'react';

const Todo = (props) => (
    <li className="todo-item">
        <button className="toggle" />
        <div className="todo-item__view">
            <div className="todo-item__view__text"> {props.text} </div>
            <button
                className="todo-item__destroy"
            />
        </div>
        <input type="text" className="todo-item__edit"/>
    </li>
);

export default Todo;