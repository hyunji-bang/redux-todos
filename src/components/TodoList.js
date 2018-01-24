import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return  (
        <div className="todo-app__main">
            <ul className="todo-list">
                {props.todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        editTodo={props.editTodo} // 넘겨주고, 실행은 todo에서
                        deleteTodo={()=>props.deleteTodo(todo.id)}
                        toggleCompleted={()=>props.toggleCompleted(todo.id)}
                        isDone={todo.isDone}
                    >
                    </Todo>
                ))}
            </ul>
        </div>
    )
}
export default TodoList;
