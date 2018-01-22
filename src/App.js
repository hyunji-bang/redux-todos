import React from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            todos: [{
                id: 1,
                text: '공부하자',
                isDone: false
            }, {
                id: 1010,
                text: '출근하자',
                isDone: true
            }, {
                id: 23455,
                text: '집에가자',
                isDone: false
            }, {
                id: 111111,
                text: '밥먹자',
                isDone: false
            }],
        };
    }

    render() {
        const stateTodos = this.state.todos || []
        const completedTodos = stateTodos.filter((todo)=> todo.isDone === true)
        const completedLength = completedTodos.length
        const todosLength = stateTodos.length

        return (
            <div className="todo-app">
                <Header saveTodo={this.saveTodo}/>
                <TodoList
                    todos={this.state.todos}
                    editTodo={this.editTodo}
                    deleteTodo={this.deleteTodo}
                    toggleCompleted={this.toggleCompleted}
                />
                <Footer completedLength={completedLength}
                        todosLength={todosLength}
                        clearCompleted={this.clearCompleted}
                />
            </div>
        );
    }

    saveTodo = (text) => {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: Date.now(),
                    text: text,
                    isDone: false
                }
            ]
        });
    };

    editTodo = (e, id) => {
        const editText = e.target.value
        const newTodos = [...this.state.todos]

        const editIndex = newTodos.findIndex(todo => todo.id === id)
        // newTodos.splice(editIndex, 1, {
        //     id: id,
        //     text: editText,
        //     isDone: false
        // })

        // newTodos[editIndex] = Object.assign({}, newTodos[editIndex], {
        //     text: editText
        // });

        newTodos[editIndex].text = editText

        this.setState({
            todos: newTodos,
        })
    }

    deleteTodo = (id) => {
        const newTodos = [...this.state.todos];
        const targetIndex = newTodos.findIndex(todo => todo.id === id);

        if (targetIndex > -1) {
            newTodos.splice(targetIndex, 1)
        }
        // const deleteIndex = this.state.todos.findIndex((todo) => {
        //     return todo.id === id
        // })
        // this.state.todos.splice(deleteIndex, 1)
        //
        // const newTodos = this.state.todos

        this.setState({
            todos: newTodos
        })
    }

    toggleCompleted = (id) => {
        const newTodos = [...this.state.todos];
        const targetIndex = newTodos.findIndex(todo => todo.id === id);

        if (targetIndex > -1) {
            newTodos[targetIndex].isDone = !newTodos[targetIndex].isDone
            console.log('newTodo : ', newTodos)
        }

        this.setState({
            todos: newTodos
        })
    }

    clearCompleted = () => {
        const newTodos = this.state.todos.filter(todo => !todo.isDone); // 완료상태가 아닌것들만 남도록(완료삭제)

        this.setState({
            todos: newTodos
        })
    }
}

export default App;
