import React from 'react';
import classNames from 'classnames';

class Todo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: '',
            isEditing: false
        }
    }

    componentDidUpdate() {
        console.log('componentDidMount');
        if(this.state.isEditing ) {
            this._inputDom.value = this.props.text;
            this._inputDom.focus();
        }
    }

    render() {
        console.log('렌더~~~~~~~~~~this.state', this.state)
        return (
            <li className={classNames('todo-item', {editing: this.state.isEditing})}>
                <button className="toggle"/>
                <div className="todo-item__view">
                    <div className="todo-item__view__text"
                         onDoubleClick={this.startEdit}
                    >
                        {this.props.text}
                    </div>
                    <button
                        className="todo-item__destroy"
                        onClick={this.props.deleteTodo}
                    />
                </div>
                <input type="text"
                       className="todo-item__edit"
                       onKeyPress={this.handleEditTodo}
                       onBlur={this.cancelEdit}
                       ref={ref => {
                           this._inputDom = ref;
                       }}
                />
            </li>
        )
    }

    handleEditTodo = (e) => {
        if (e.charCode === 13) {
            this.props.editTodo(e, this.props.id)
            this.setState({isEditing:false})
        }
    }

    cancelEdit = () => {
        this.setState({
            ...this.state,
            isEditing: false
        })
    }

    startEdit = () => {
        this.setState({
            ...this.state,
            isEditing: true
        });
    }
}

export default Todo;