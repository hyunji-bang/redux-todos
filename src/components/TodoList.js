import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { deleteTodo, editTodo } from '../action/todoAction'

class TodoList extends React.Component {
    render() {
        return (
            <div className="todo-app__main">
                <ul className="todo-list">
                    {this.props.todos.map((todo) => (
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            editTodo={this.editTodo} // 넘겨주고, 실행은 todo에서
                            deleteTodo={() => this.props.deleteTodo(todo.id)}  // reducer
                            toggleCompleted={() => this.toggleCompleted(todo.id)}
                            isDone={todo.isDone}
                        >
                        </Todo>
                    ))}
                </ul>
            </div>
        )
    }
    editTodo = (e, id) => {
        const editText = e.target.value
        // const newTodos = [...this.state.todos]

        // const editIndex = newTodos.findIndex(todo => todo.id === id)
        // // newTodos.splice(editIndex, 1, {
        // //     id: id,
        // //     text: editText,
        // //     isDone: false
        // // })

        // // newTodos[editIndex] = Object.assign({}, newTodos[editIndex], {
        // //    text: editText
        // // });

        // newTodos[editIndex].text = editText

        // id, text를 받아서 수정처리하는 액션 만들기
        this.props.editTodo(id, editText)
    }

    toggleCompleted = (id) => {
        const newTodos = [...this.props.todos];
        const targetIndex = newTodos.findIndex(todo => todo.id === id);

        if (targetIndex > -1) {
            newTodos[targetIndex].isDone = !newTodos[targetIndex].isDone
        }

        this.setState({
            ...this.state,
            todos: newTodos
        })
    }
}

const mapDispatchToProps = (dispatch) => ({
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    editTodo: (id, text) => dispatch(editTodo(id, text)),
})

// 디스패치와 상태를 주입하려는 컴포넌트를 감싸줍니다.
export default connect(undefined, mapDispatchToProps)(TodoList);
