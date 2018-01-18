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
            editingId: null
        };
    }

    addTodo = (text) => {
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

    deleteTodo = (id) => {
        const newTodos = [...this.state.todos];
        const targetIndex = newTodos.findIndex(todo => todo.id === id);

        if(targetIndex > -1) {
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

    editTodo = (id) => {
        const newTodos = [...this.state.todos];
        const targetIndex = newTodos.findIndex(todo => todo.id === id);

        if(targetIndex > -1) {

        }
    }

    startEdit = (id) => {
        this.setState({
            editingId: id
        })
    }

    render() {
        console.log('this.state:', this.state);
        return (
            <div className="todo-app">
                <Header addTodo={this.addTodo}/>
                <TodoList
                    todos={this.state.todos}
                    deleteTodo={this.deleteTodo}
                    editTodo={this.editTodo}
                    startEdit={this.startEdit}
                    editingId={this.state.editingId}
                />
                <Footer/>
            </div>
        );
    }
}

export default App;
