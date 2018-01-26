import React from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';
import { connect } from 'react-redux';

class App extends React.Component {
    render() {
        const stateTodos = this.props.todos || [] // store의 todos
        const completedTodos = stateTodos.filter((todo)=> todo.isDone === true)
        const completedLength = completedTodos.length
        const todosLength = stateTodos.length

        let filteredTodos = null;
        switch(this.props.todoFilter) {
            case 'active':
                filteredTodos = stateTodos.filter(v => !v.isDone);
                break;
            case 'completed':
                filteredTodos = stateTodos.filter(v => v.isDone);
                break;
            case 'all':
            default:
                filteredTodos = stateTodos;
        }

        return (
            <div className="todo-app">
                <Header/>
                <TodoList
                    todos={filteredTodos}
                    editTodo={this.editTodo}
                />
                <Footer completedLength={completedLength}
                        todosLength={todosLength}
                        filter={this.props.todoFilter} // reducer
                />
            </div>
        );
    }
    // saveTodo = (text) => {
    //     this.setState({
    //         todos: [
    //             ...this.state.todos,
    //             {
    //                 id: Date.now(),
    //                 text: text,
    //                 isDone: false
    //             }
    //         ]
    //     });
    // };

    // deleteTodo = (id) => {
    //     const newTodos = [...this.state.todos];
    //     const targetIndex = newTodos.findIndex(todo => todo.id === id);
    //
    //     if (targetIndex > -1) {
    //         newTodos.splice(targetIndex, 1)
    //     }
    //     // const deleteIndex = this.state.todos.findIndex((todo) => {
    //     //     return todo.id === id
    //     // })
    //     // this.state.todos.splice(deleteIndex, 1)
    //     //
    //     // const newTodos = this.state.todos
    //
    //     this.setState({
    //         todos: newTodos
    //     })
    // }

    // setFilter = (filter) => {
    //     this.setState({
    //         ...this.state,
    //         filter
    //     })
    // }
}

const mapStateToProps = (state) => (
    state
)

// 디스패치와 상태를 주입하려는 컴포넌트를 감싸줍니다.
export default connect(mapStateToProps, undefined)(App);
