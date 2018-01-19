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
        console.log('this.state', this.state);
        return (
            <div className="todo-app">
                <Header addTodo={this.addTodo}/>
                <TodoList
                    todos={this.state.todos}
                    editingId={this.state.editingId}
                    editTodo={this.editTodo}
                />
                <Footer/>
            </div>
        );
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
}

export default App;
