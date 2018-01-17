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
            }]
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

    render() {
        console.log(this.state.todos);
        return (
            <div className="todo-app">
                <Header addTodo={this.addTodo}/>
                <TodoList todos={this.state.todos}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
