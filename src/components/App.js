import React from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from '../action/todoAction'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: this.props.todos,
            filter: 'All' // Active, Completed
        };
    }

    render() {
        const stateTodos = this.props.todos || []
        const completedTodos = stateTodos.filter((todo)=> todo.isDone === true)
        const completedLength = completedTodos.length
        const todosLength = stateTodos.length

        let filteredTodos = null;
        switch(this.state.filter) {
            case 'Active':
                filteredTodos = stateTodos.filter(v => !v.isDone);
                break;
            case 'Completed':
                filteredTodos = stateTodos.filter(v => v.isDone);
                break;
            case 'All':
            default:
                filteredTodos = stateTodos;
        }

        return (
            <div className="todo-app">
                <Header saveTodo={this.props.addTodo}/>
                <TodoList
                    todos={filteredTodos}
                    editTodo={this.editTodo}
                    deleteTodo={this.props.deleteTodo}
                    toggleCompleted={this.toggleCompleted}
                />
                <Footer completedLength={completedLength}
                        todosLength={todosLength}
                        clearCompleted={this.clearCompleted}
                        filter={this.state.filter}
                        setFilter={this.setFilter}
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

    toggleCompleted = (id) => {
        const newTodos = [...this.state.todos];
        const targetIndex = newTodos.findIndex(todo => todo.id === id);

        if (targetIndex > -1) {
            newTodos[targetIndex].isDone = !newTodos[targetIndex].isDone
            console.log('newTodo : ', newTodos)
        }

        this.setState({
            ...this.state,
            todos: newTodos
        })
    }

    clearCompleted = () => {
        const newTodos = this.state.todos.filter(todo => !todo.isDone); // 완료상태가 아닌것들만 남도록(완료삭제)

        this.setState({
            ...this.state,
            todos: newTodos
        })
    }

    setFilter = (filter) => {
        this.setState({
            ...this.state,
            filter
        })
    }
}

const mapStateToProps = (state) => (
    state
)


const mapDispatchToProps = (dispatch) => ({
    addTodo: (text) => dispatch(addTodo(text)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    editTodo: (id, text) => dispatch(editTodo(id, text))
})

// 디스패치와 상태를 주입하려는 컴포넌트를 감싸줍니다.
export default connect(mapStateToProps, mapDispatchToProps)(App);
